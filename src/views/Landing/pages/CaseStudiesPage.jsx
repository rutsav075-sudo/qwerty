import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import TopNav from '../components/TopNav';
import Footer from '../components/Footer';
import { ArrowRight, ShieldAlert, FileSearch, Banknote } from 'lucide-react';

export default function CaseStudiesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const cases = [
    {
      id: 'procurement',
      icon: <FileSearch className="text-text-primary" size={24} />,
      title: "Procurement Agent Swarm",
      scenario: "An autonomous agent swarm is tasked with monitoring inventory levels and automatically generating purchase orders with suppliers when stock runs low.",
      problem: "A logic error in the inventory API causes the agent to misread the current stock level, initiating an order for 100x the normal quantity of an expensive component.",
      intervention: "Synapse OS detects the anomalous order volume through its transaction boundary abstraction. The kill-switch is automatically engaged, halting the swarm's external API calls and routing the intended transaction to a human-in-the-loop approval queue.",
      outcome: "The enterprise avoids a multi-million dollar errant purchase. The operations team reviews the trace logs in the Observatory, patches the agent logic, and resumes normal operation."
    },
    {
      id: 'customer-support',
      icon: <ShieldAlert className="text-text-primary" size={24} />,
      title: "Customer Support Automation",
      scenario: "A fleet of LLM-powered support agents interacts directly with customers, querying a vectorized internal knowledge base to resolve technical issues.",
      problem: "A prompt injection attack causes an agent to attempt to query the knowledge base for sensitive PII (Personally Identifiable Information) belonging to other customers.",
      intervention: "Synapse OS's neural rosters and tenant sync layer intercept the query before it hits the database. The system identifies the cross-tenant boundary violation and instantly quarantines the specific agent instance without taking down the entire support fleet.",
      outcome: "Data exfiltration is prevented entirely. Security teams are alerted with a complete replay of the conversation and the specific prompt injection technique used, allowing them to fortify the prompt engineering."
    },
    {
      id: 'financial-reconciliation',
      icon: <Banknote className="text-text-primary" size={24} />,
      title: "Financial Reconciliation",
      scenario: "Agent swarms parse thousands of unstructured invoices daily, cross-referencing them with internal ledgers and issuing automated payments.",
      problem: "A sophisticated vendor submits a subtly modified invoice with altered payment details that bypasses standard rule-based checks.",
      intervention: "Synapse OS employs behavioral anomaly detection on the agent's typical output patterns. The system flags the deviation in the target account destination and pauses the execution, demanding cryptographic approval from a senior finance officer.",
      outcome: "The fraudulent payment is intercepted. The finance officer reviews the step-by-step reasoning trace of the agent to understand why it approved the invoice, leading to improved agent training data."
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-text-primary selection:bg-primary/20 selection:text-primary flex flex-col">
      <TopNav />
      <main className="flex-grow pt-32 pb-24 md:pt-48 md:pb-32 container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal tracking-tight text-text-primary mb-6">Illustrative Use Cases</h1>
          <p className="text-base md:text-lg text-text-tertiary leading-relaxed font-sans">
            Discover how Synapse OS provides the critical observability and interception layer needed to safely deploy autonomous agent swarms in production.
          </p>
        </motion.div>

        <div className="space-y-12 mb-24 relative pl-4 md:pl-0">
          {cases.map((useCase, idx) => (
            <motion.div 
              key={useCase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-border border-dashed p-8 md:p-12 rounded-2xl shadow-sm relative z-10"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-10 pb-8 border-b border-border border-dashed">
                <div className="w-14 h-14 bg-secondary/50 border border-border rounded-xl flex flex-shrink-0 items-center justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-3xl font-display font-medium text-text-primary">{useCase.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-8">
                  <div className="bg-secondary/30 p-6 rounded-xl border border-border/50">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-3">Scenario</h4>
                    <p className="text-text-secondary leading-relaxed font-sans text-sm md:text-base">{useCase.scenario}</p>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-xl border border-border/50">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-3">The Problem</h4>
                    <p className="text-text-secondary leading-relaxed font-sans text-sm md:text-base">{useCase.problem}</p>
                  </div>
                </div>
                <div className="space-y-8">
                  <div className="bg-primary/5 p-6 rounded-xl border border-primary/20">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">Synapse OS Intervention</h4>
                    <p className="text-text-primary font-medium leading-relaxed font-sans text-sm md:text-base">{useCase.intervention}</p>
                  </div>
                  <div className="bg-secondary/30 p-6 rounded-xl border border-border/50">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary mb-3">Outcome</h4>
                    <p className="text-text-secondary leading-relaxed font-sans text-sm md:text-base">{useCase.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center bg-text-primary text-white p-12 md:p-16 rounded-2xl relative overflow-hidden shadow-lg"
        >
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-4">Ready to secure your agent swarms?</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto leading-relaxed text-base md:text-lg">
              We're currently onboarding select design partners. Want to be our first official case study? Get in touch.
            </p>
            <Link 
              to="/contact?message=I'd%20like%20to%20discuss%20a%20case%20study."
              className="bg-white text-text-primary hover:bg-white/90 transition-colors text-sm font-medium rounded-full px-8 py-3 inline-flex items-center justify-center gap-2"
            >
              Contact Sales
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
