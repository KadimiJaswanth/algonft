/**
 * NFTCard component
 * Individual NFT card for gallery display
 */

import React from 'react';
import { Card, Badge, Button } from '@/components/primitives';
import { NFT_PLACEHOLDER_IMAGE } from '@/utils/constants';
import { Link } from 'react-router-dom';

interface NFTCardProps {
  id: number;
  name: string;
  unitName: string;
  image: string;
  creator?: string;
  total?: number;
  balance?: number;
  onSelect?: (id: number) => void;
}

/**
 * NFTCard component
 * Displays an NFT in card format
 */
export const NFTCard: React.FC<NFTCardProps> = ({
  id,
  name,
  unitName,
  image,
  creator,
  total,
  balance,
  onSelect,
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
      <Link to={`/nft/${id}`} className="block h-full">
        <div className="space-y-4">
          {/* Image */}
          <div className="relative pb-full bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = NFT_PLACEHOLDER_IMAGE;
              }}
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            {/* Name and Unit */}
            <div>
              <h3 className="font-semibold text-lg truncate">{name}</h3>
              <Badge variant="info" className="mt-1">
                {unitName}
              </Badge>
            </div>

            {/* Creator */}
            {creator && (
              <p className="text-xs text-gray-500 truncate">
                by {creator.slice(0, 8)}...{creator.slice(-4)}
              </p>
            )}

            {/* Stats */}
            {total && (
              <div className="pt-2 border-t border-gray-200 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <p className="text-gray-500">Total</p>
                  <p className="font-semibold">{total}</p>
                </div>
                {balance !== undefined && (
                  <div>
                    <p className="text-gray-500">Balance</p>
                    <p className="font-semibold">{balance}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action */}
          {onSelect && (
            <Button
              onClick={(e) => {
                e.preventDefault();
                onSelect(id);
              }}
              size="sm"
              variant="outline"
              fullWidth
              className="mt-auto"
            >
              View Details
            </Button>
          )}
        </div>
      </Link>
    </Card>
  );
};

NFTCard.displayName = 'NFTCard';
