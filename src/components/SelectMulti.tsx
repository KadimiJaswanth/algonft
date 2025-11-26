// SelectMulti — multi-select control (placeholder)
// TODO: implement keyboard accessibility and passthrough selection state
import React from "react";

const SelectMulti: React.FC = () => (
  <select multiple className="border p-1 w-full">
    <option>Option A</option>
    <option>Option B</option>
  </select>
);

export default SelectMulti;
