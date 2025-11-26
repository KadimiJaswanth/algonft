import React from 'react';

// Simple placeholder page for Mint — App.tsx imports a named `Mint` export.
// TODO: replace with full minting UI (wallet connect, IPFS upload, tx build).
export const Mint: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Mint</h1>
      <p className="text-sm text-muted-foreground">Minting playground placeholder.</p>
    </div>
  );
};

export default Mint;
