import React from 'react';
import NetworkStatus from './NetworkStatus';
import WalletInfo from './WalletInfo';
import BlockAnimation from './BlockAnimation';

const BlockchainSidebar: React.FC = () => {
  return (
    <div className="bg-[rgba(255,255,255,0.02)] rounded-2xl p-6">
      <NetworkStatus />
      <WalletInfo />
      <div className="mt-4">
        <div className="text-sm text-gray-300">Contract ID</div>
        <div className="text-sm font-mono mt-1">Not deployed</div>
      </div>
      <div className="mt-4">
        <BlockAnimation />
      </div>
    </div>
  );
};

export default BlockchainSidebar;
