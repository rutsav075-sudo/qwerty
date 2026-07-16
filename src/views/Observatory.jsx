import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  Handle,
  Position,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useSynapse } from '../context/SynapseContext';
import { 
  Play, X, Eye, Activity, Clock, DollarSign, 
  CheckCircle2, AlertTriangle, Zap, ChevronDown, 
  ChevronUp, RotateCcw, Cpu
} from 'lucide-react';
import styles from './Observatory.module.css';

import { AgentNode } from '../components/observatory/AgentNode';
import { TimelinePanel } from '../components/observatory/TimelinePanel';
import { AgentDetailPanel } from '../components/observatory/AgentDetailPanel';

const nodeTypes = { agentNode: AgentNode };

// ═══════════════════════════════════════════
// Edge definitions: which agents can communicate
// ═══════════════════════════════════════════
const AGENT_EDGES = [
  { source: 'inventory', target: 'procurement', label: 'Low Stock Alert' },
  { source: 'procurement', target: 'finance', label: 'PO Validation' },
  { source: 'inventory', target: 'pricing', label: 'Demand Signal' },
  { source: 'logistics', target: 'procurement', label: 'Route Alert' },
  { source: 'logistics', target: 'finance', label: 'Cost Analysis' },
  { source: 'pricing', target: 'finance', label: 'Revenue Data' },
  { source: 'finance', target: 'inventory', label: 'Budget Approval' },
  { source: 'pricing', target: 'logistics', label: 'Priority Signal' },
];

// Constellation layout positions for agents
const AGENT_POSITIONS = {
  inventory:   { x: 400, y: 80 },
  procurement: { x: 100, y: 300 },
  finance:     { x: 700, y: 300 },
  logistics:   { x: 200, y: 550 },
  pricing:     { x: 600, y: 550 },
};

// ═══════════════════════════════════════════
// Main Observatory Component
// ═══════════════════════════════════════════
export default function Observatory() {
  const {
    simulator,
    scenarios,
    agentStatuses,
    activityLog,
    pendingApprovals,
    scenarioRunning,
    demoSteps,
    activeHandoffs,
    runScenario,
    approveRequest,
    rejectRequest,
  } = useSynapse();

  const [selectedAgent, setSelectedAgent] = useState(null);
  const [timelineOpen, setTimelineOpen] = useState(false);
  const [activeEdges, setActiveEdges] = useState(new Set());
  const [viewMode, setViewMode] = useState('live'); // 'live' or 'flow'
  const logEndRef = useRef(null);

  // Track which edges are active based on agent statuses + handoffs
  useEffect(() => {
    const processing = new Set(
      Object.entries(agentStatuses)
        .filter(([_, a]) => a.status === 'processing')
        .map(([id]) => id)
    );

    const edgeSet = new Set();
    
    // Light edges for processing agents
    AGENT_EDGES.forEach(e => {
      if (processing.has(e.source) || processing.has(e.target)) {
        edgeSet.add(`${e.source}-${e.target}`);
      }
    });
    
    // Light edges for active handoffs
    activeHandoffs.forEach(h => {
      const edgeId = `${h.from}-${h.to}`;
      edgeSet.add(edgeId);
    });
    
    setActiveEdges(edgeSet);
  }, [agentStatuses, activeHandoffs]);

  // Open timeline when scenario starts
  useEffect(() => {
    if (scenarioRunning) setTimelineOpen(true);
  }, [scenarioRunning]);

  // Auto-scroll activity log
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activityLog]);

  // Build React Flow nodes
  const handleNodeClick = useCallback((agentId) => {
    setSelectedAgent(prev => prev === agentId ? null : agentId);
  }, []);

  const rfNodes = useMemo(() => {
    return Object.entries(agentStatuses).map(([id, agent]) => ({
      id,
      type: 'agentNode',
      position: AGENT_POSITIONS[id] || { x: 400, y: 300 },
      data: { agent, onClick: handleNodeClick },
    }));
  }, [agentStatuses, handleNodeClick]);

  const rfEdges = useMemo(() => {
    return AGENT_EDGES.map(e => {
      const edgeId = `${e.source}-${e.target}`;
      const isActive = activeEdges.has(edgeId);
      return {
        id: edgeId,
        source: e.source,
        target: e.target,
        label: isActive ? e.label : '',
        animated: isActive,
        style: {
          stroke: isActive ? '#06b6d4' : 'rgba(0,0,0,0.12)',
          strokeWidth: isActive ? 3 : 1.5,
          strokeDasharray: isActive ? '8 4' : 'none',
        },
        labelStyle: {
          fontSize: 10,
          fontFamily: 'monospace',
          fill: isActive ? '#0891b2' : 'transparent',
          fontWeight: 600,
        },
        labelBgStyle: {
          fill: isActive ? 'rgba(255,255,255,0.9)' : 'transparent',
          stroke: isActive ? 'rgba(6,182,212,0.2)' : 'transparent',
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color: isActive ? '#06b6d4' : 'rgba(0,0,0,0.12)',
          width: 16,
          height: 16,
        },
      };
    });
  }, [activeEdges]);

  const [nodes, setNodes, onNodesChange] = useNodesState(rfNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(rfEdges);

  // Sync nodes/edges with real-time state
  useEffect(() => {
    setNodes(rfNodes);
  }, [rfNodes, setNodes]);

  useEffect(() => {
    setEdges(rfEdges);
  }, [rfEdges, setEdges]);

  // Get logs for selected agent
  const agentLogs = useMemo(() => {
    if (!selectedAgent) return [];
    return activityLog.filter(l => l.agentId === selectedAgent).slice(-50);
  }, [activityLog, selectedAgent]);

  // Build timeline entries from demo steps — persist after scenario completes
  const [lastScenarioId, setLastScenarioId] = useState(null);
  
  useEffect(() => {
    if (scenarioRunning) setLastScenarioId(scenarioRunning);
  }, [scenarioRunning]);
  
  const displayScenarioId = scenarioRunning || lastScenarioId;
  const activeScenario = displayScenarioId ? scenarios[displayScenarioId] : null;
  const timelineEntries = useMemo(() => {
    if (!activeScenario) return [];
    return activeScenario.steps.map((step, i) => ({
      ...step,
      status: demoSteps[i]?.status || 'pending',
      output: demoSteps[i]?.output || null,
    }));
  }, [activeScenario, demoSteps]);

  // Pending approval for detail panel
  const agentApprovals = useMemo(() => {
    return pendingApprovals.filter(a => a.status === 'pending');
  }, [pendingApprovals]);

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col bg-transparent">

      {/* ── Scenario Launcher Bar ── */}
      <div className={styles.scenarioBar}>
        <div className="flex items-center gap-2 mr-4">
          <Cpu size={16} className="text-black/50 dark:text-white/50" />
          <span className="text-sm font-bold text-black dark:text-white tracking-tight">Observatory</span>
        </div>
        <div className="w-px h-6 bg-black/10 dark:bg-white/10" />

        {Object.entries(scenarios).map(([id, scenario]) => (
          <button
            key={id}
            onClick={() => runScenario(id)}
            disabled={!!scenarioRunning}
            className={`${styles.scenarioCard} ${
              scenarioRunning === id ? styles.scenarioCardActive : ''
            } ${scenarioRunning && scenarioRunning !== id ? styles.scenarioCardDisabled : ''}`}
          >
            <span className="text-base">{scenario.icon}</span>
            <span>{scenario.title}</span>
            {scenarioRunning === id && (
              <div className="w-3 h-3 border-2 border-cyan-500 border-t-transparent animate-spin" />
            )}
            {!scenarioRunning && <Play size={12} className="opacity-40" />}
          </button>
        ))}

        {/* Agent count badge & View Toggle */}
        <div className="ml-auto flex items-center gap-3">
          <div className="flex bg-black/5 dark:bg-white/5 rounded-lg p-1 mr-2 border border-black/10 dark:border-white/10">
            <button
              onClick={() => setViewMode('live')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                viewMode === 'live' 
                  ? 'bg-cyan-500 text-white shadow-sm' 
                  : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
              }`}
            >
              Live Swarm
            </button>
            <button
              onClick={() => setViewMode('flow')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all ${
                viewMode === 'flow' 
                  ? 'bg-cyan-500 text-white shadow-sm' 
                  : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white'
              }`}
            >
              Simulated Flow
            </button>
          </div>

          {agentApprovals.length > 0 && (
            <div className="flex items-center gap-1.5 px-2 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-[11px] font-mono font-medium">
              <AlertTriangle size={12} />
              {agentApprovals.length} pending
            </div>
          )}
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-black/50 dark:text-white/50">
            <div className="w-2 h-2 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.4)]" />
            {Object.values(agentStatuses).filter(a => a.status !== 'offline').length} online
          </div>
        </div>
      </div>

      {/* ── Main Content Area ── */}
      {viewMode === 'live' ? (
        <div className="flex-1 w-full h-full bg-transparent overflow-hidden">
          <iframe 
            src="http://localhost:5175" 
            className="w-full h-full border-none"
            title="Synapse Observatory Live"
          />
        </div>
      ) : (
        <div className={`flex-1 relative ${styles.canvas}`}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            nodeTypes={nodeTypes}
            fitView
            fitViewOptions={{ padding: 0.3 }}
            proOptions={{ hideAttribution: true }}
            minZoom={0.3}
            maxZoom={1.5}
          >
            <Background gap={24} size={1} color="rgba(0,0,0,0.05)" />
            <Controls showInteractive={false} />
          </ReactFlow>

          {/* ── Agent Detail Panel (Slide-in) ── */}
          <AgentDetailPanel
            selectedAgent={selectedAgent}
            setSelectedAgent={setSelectedAgent}
            agentStatuses={agentStatuses}
            agentApprovals={agentApprovals}
            approveRequest={approveRequest}
            rejectRequest={rejectRequest}
            agentLogs={agentLogs}
            logEndRef={logEndRef}
          />

          {/* ── Timeline Panel ── */}
          <TimelinePanel
            timelineOpen={timelineOpen}
            setTimelineOpen={setTimelineOpen}
            timelineEntries={timelineEntries}
            activeScenario={activeScenario}
            scenarioRunning={scenarioRunning}
          />
        </div>
      )}
    </div>
  );
}
