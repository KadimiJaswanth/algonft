import React from 'react';

const CarouselItem: React.FC<{ id: number; name: string; owner: string }> = ({ id, name, owner }) => {
  return (
    <div className="w-36 bg-[rgba(255,255,255,0.02)] rounded p-2 flex-shrink-0">
      <div className="w-full h-20 bg-gradient-to-br from-[#0ff] to-[#a0f] rounded mb-2" />
      <div className="text-sm font-semibold">{name}</div>
      <div className="text-xs text-gray-300">{owner}</div>
      <button className="mt-2 text-xs text-[#4dd0e1]">View on AlgoExplorer</button>
    </div>
  );
};

export default CarouselItem;
