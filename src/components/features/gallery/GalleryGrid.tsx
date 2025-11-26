/**
 * GalleryGrid component
 * Grid layout for displaying NFT cards
 */

import React from 'react';
import { NFTCard } from './NFTCard';
import type { NFT } from '@/types';

interface GalleryGridProps {
  nfts: NFT[];
  loading?: boolean;
  onSelectNFT?: (id: number) => void;
  columns?: 2 | 3 | 4;
}

/**
 * GalleryGrid component
 * Displays NFTs in a responsive grid
 */
export const GalleryGrid: React.FC<GalleryGridProps> = ({
  nfts,
  loading = false,
  onSelectNFT,
  columns = 3,
}) => {
  const gridColsClass = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin text-4xl">⏳</div>
      </div>
    );
  }

  if (nfts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No NFTs found</p>
        <p className="text-gray-400 text-sm mt-2">
          Try adjusting your filters or create a new NFT
        </p>
      </div>
    );
  }

  return (
    <div className={`grid gap-4 ${gridColsClass[columns]}`}>
      {nfts.map((nft) => (
        <NFTCard
          key={nft.id}
          id={nft.id}
          name={nft.name}
          unitName={nft.unitName}
          image={nft.metadata.image}
          creator={nft.creatorAddress}
          total={nft.total}
          balance={nft.balance}
          onSelect={onSelectNFT}
        />
      ))}
    </div>
  );
};

GalleryGrid.displayName = 'GalleryGrid';
