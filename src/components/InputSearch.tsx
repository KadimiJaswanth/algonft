// InputSearch — search input with optional clear
// TODO: wire to search suggestions and debounce (client-only)
import React from "react";

const InputSearch: React.FC = () => (
  <div className="flex items-center gap-2">
    <input placeholder="Search" className="border p-1 flex-1" />
    <button className="px-2 py-1 border rounded">Clear</button>
  </div>
);

export default InputSearch;
