// SelectAsync — async options loader for selects
// TODO: fetch options client-side (debounced) and display loading state
import React from "react";

const SelectAsync: React.FC = () => (
  <select className="border p-1 w-full"><option>Loading...</option></select>
);

export default SelectAsync;
