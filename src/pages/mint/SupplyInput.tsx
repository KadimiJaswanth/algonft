import React from 'react';

const SupplyInput: React.FC = () => {
  return (
    <label className="flex flex-col">
      <div className="text-sm text-gray-300">Supply / Quantity</div>
      <input type="number" min={1} defaultValue={1} className="p-2 rounded bg-[rgba(0,0,0,0.4)]" />
    </label>
  );
};

export default SupplyInput;
