// MintPreviewModal — preview minted NFT metadata before submit
// TODO: show uploaded IPFS CID and unsigned tx details; signing in wallet only
import React from "react";

const MintPreviewModal: React.FC<{ title?: string }> = ({ title = "Untitled" }) => (
  <div className="p-3 border rounded">MintPreview: {title}</div>
);

export default MintPreviewModal;
