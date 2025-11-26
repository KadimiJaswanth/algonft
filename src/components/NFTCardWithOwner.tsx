// NFTCardWithOwner — NFT card that includes owner display
// TODO: fetch owner info via indexer client (or wallet) — client-side only
import React from "react";

const NFTCardWithOwner: React.FC<{ owner?: string }> = ({ owner }) => (
  <div className="p-2 border rounded">Owner: {owner ?? "unknown"}</div>
);

export default NFTCardWithOwner;
