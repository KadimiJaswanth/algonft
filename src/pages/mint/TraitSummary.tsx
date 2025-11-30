import React from 'react';

const TraitSummary: React.FC = () => {
  const traits = [
    { type: 'Background', value: 'Neon Grid' },
    { type: 'Eyes', value: 'Holo' },
    { type: 'Accessory', value: 'Laser Hat' },
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {traits.map((t) => (
        <div key={t.type} className="bg-[rgba(255,255,255,0.02)] p-2 rounded">
          <div className="text-xs text-gray-300">{t.type}</div>
          <div className="font-medium">{t.value}</div>
        </div>
      ))}
    </div>
  );
};

export default TraitSummary;
