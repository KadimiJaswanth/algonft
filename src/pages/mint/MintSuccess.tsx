import React from 'react';

const MintSuccess: React.FC = () => {
  // placeholder; would show real tx/nft id on success
  const success = false;
  const nftId = 12345;

  if (!success) return null;

  return (
    <div className="mt-3 p-3 bg-[rgba(0,255,180,0.06)] rounded">
      <div className="text-sm">Success! NFT minted</div>
      <div className="font-mono">NFT ID: {nftId}</div>
    </div>
  );
};

export default MintSuccess;
