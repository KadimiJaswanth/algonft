// MintGasEstimation — shows rough fee estimate for a mint
// TODO: compute suggested params via indexer/algod client or show placeholder; no node tokens
import React from "react";

const MintGasEstimation: React.FC<{ estimate?: number }> = ({ estimate = 0.15 }) => (
  <div className="text-sm">Estimated fee: {estimate} ALGO (approx)</div>
);

export default MintGasEstimation;
