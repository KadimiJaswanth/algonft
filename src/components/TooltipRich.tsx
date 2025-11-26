// TooltipRich — richer tooltip content wrapper
// TODO: support rich HTML content and accessibility (client-only)
import React from "react";

const TooltipRich: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <span className="tooltip">{children}</span>
);

export default TooltipRich;
