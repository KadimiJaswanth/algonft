import React from 'react';

const WalletInfo: React.FC = () => {
  return (
    <div className="mt-4">
      <div className="text-sm text-gray-300">Wallet</div>
      <div className="mt-1 font-mono text-sm">ABCD...89H</div>
      <div className="mt-2 text-sm">Balance: <strong>12.345 ALGO</strong></div>
    </div>
  );
};

export default WalletInfo;
