// SpinnerOverlay — full-screen loading overlay
// TODO: use when awaiting wallet or IPFS responses (client-only)
import React from "react";

const SpinnerOverlay: React.FC = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black/30">Loading...</div>
);

export default SpinnerOverlay;
