// WalletAddressCopy — copy-to-clipboard button for an address
// TODO: get address from connected wallet; avoid exposing private keys
import React from "react";

const WalletAddressCopy: React.FC<{ address?: string }> = ({ address }) => (
  <div className="flex items-center gap-2">
    <span className="font-mono text-sm">{address ?? "addr..."}</span>
    <button className="px-2 py-1 border rounded">Copy</button>
  </div>
);

export default WalletAddressCopy;
