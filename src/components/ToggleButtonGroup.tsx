// ToggleButtonGroup — group of toggle buttons
// TODO: manage exclusive or multi-select state client-side
import React from "react";

const ToggleButtonGroup: React.FC = () => (
  <div className="flex gap-2">
    <button className="px-2 py-1 border rounded">A</button>
    <button className="px-2 py-1 border rounded">B</button>
  </div>
);

export default ToggleButtonGroup;
