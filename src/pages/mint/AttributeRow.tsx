import React from 'react';

const AttributeRow: React.FC = () => {
  return (
    <div className="flex gap-2">
      <input className="flex-1 p-2 rounded bg-[rgba(0,0,0,0.4)]" placeholder="Trait type" />
      <input className="flex-1 p-2 rounded bg-[rgba(0,0,0,0.4)]" placeholder="Value" />
    </div>
  );
};

export default AttributeRow;
