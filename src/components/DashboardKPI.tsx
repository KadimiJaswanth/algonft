// DashboardKPI — small KPI card for dashboard
// TODO: hook to real metrics (client-only aggregation)
import React from "react";

const DashboardKPI: React.FC<{ label?: string; value?: string }> = ({ label = "KPI", value = "—" }) => (
  <div className="p-3 border rounded">
    <div className="text-xs text-gray-500">{label}</div>
    <div className="text-xl">{value}</div>
  </div>
);

export default DashboardKPI;
