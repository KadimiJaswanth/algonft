// StatsSparkCard — small card with a sparkline and value
// TODO: render sparkline from client data (no backend keys)
import React from "react";

const StatsSparkCard: React.FC<{ value?: string }> = ({ value = "0" }) => (
  <div className="p-2 border rounded">{value} <div className="text-xs">spark</div></div>
);

export default StatsSparkCard;
