// MintFormCompact — tiny mint form for quick mints
// TODO: build unsigned ASA creation tx and pass to wallet for signing (client-side only)
import React from "react";

const MintFormCompact: React.FC = () => (
  <form className="p-2 border rounded">
    <input placeholder="Name" className="border p-1 w-full mb-2" />
    <button className="px-3 py-1 border rounded">Mint</button>
  </form>
);

export default MintFormCompact;
