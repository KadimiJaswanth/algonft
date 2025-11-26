// IPFSPreview — display an IPFS CID and preview image (placeholder)
// TODO: show actual image from CID (client-side fetch) and validate MIME type
import React from "react";

const IPFSPreview: React.FC<{ cid?: string }> = ({ cid }) => (
  <div className="p-2 border">
    <div>IPFS CID: {cid ?? "bafy..."}</div>
    <div className="mt-2">Preview (placeholder)</div>
  </div>
);

export default IPFSPreview;
