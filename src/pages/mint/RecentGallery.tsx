import React from 'react';
import CarouselItem from './CarouselItem';

const RecentGallery: React.FC = () => {
  const items = new Array(6).fill(0).map((_, i) => ({ id: i + 1, name: `NFT ${i + 1}` }));
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Recently Minted</h3>
      <div className="mt-3 flex gap-3 overflow-x-auto">
        {items.map((it) => (
          <CarouselItem key={it.id} id={it.id} name={it.name} owner="ABCD...89H" />
        ))}
      </div>
    </div>
  );
};

export default RecentGallery;
