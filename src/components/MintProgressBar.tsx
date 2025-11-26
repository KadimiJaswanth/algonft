// MintProgressBar — simple progress indicator for mint flow
// TODO: connect progress to actual mint pipeline (client-side tracking)
import React from "react";

const MintProgressBar: React.FC<{ progress?: number }> = ({ progress = 0 }) => (
  <div className="w-full bg-gray-200 rounded h-3 overflow-hidden">
    <div className="bg-blue-500 h-3" style={{ width: `${Math.min(100, progress)}%` }} />
  </div>
);

export default MintProgressBar;
