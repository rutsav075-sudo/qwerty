import React from 'react';
import { NeuralCore } from '../components/chat/neural-core';

export default function NeuralCorePage() {
  return (
    <div className="w-full h-full text-foreground relative z-50" style={{ backgroundColor: '#ffffff' }}>
      <NeuralCore />
    </div>
  );
}
