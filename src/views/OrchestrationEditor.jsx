import React, { useState, useEffect } from 'react';
import { Server } from 'lucide-react';

export default function OrchestrationEditor() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full h-full relative bg-[#0a0a0a] text-foreground flex flex-col overflow-hidden">
      <div className="flex-1 w-full h-full relative z-10 bg-black/20">
        <iframe 
          src="http://localhost:5678"
          className={`w-full h-full border-0 absolute inset-0 z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          title="Synapse Orchestration"
          allow="clipboard-read; clipboard-write"
          onLoad={() => setIsLoaded(true)}
        />

        {!isLoaded && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0a0a0a] text-slate-400 gap-6">
            <div className="w-16 h-16 rounded-2xl bg-teal-500/10 flex items-center justify-center border border-teal-500/20 animate-pulse">
              <Server className="w-8 h-8 text-teal-400" />
            </div>
            <div className="text-center space-y-2 max-w-md">
              <h2 className="text-lg font-semibold text-white">Connecting to Synapse Engine...</h2>
              <p className="text-sm text-slate-500">
                Loading the orchestration engine...
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
