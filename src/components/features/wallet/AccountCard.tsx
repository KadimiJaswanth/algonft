/**
 * AccountCard component
 * Displays account information and balance
 */

import React from 'react';
import { Card } from '@/components/primitives';
import { useWallet } from '@/hooks';
import { formatAlgo, formatAddress } from '@/utils/format';

/**
 * AccountCard component
 * Shows wallet address, balance, and asset count
 */
export const AccountCard: React.FC = () => {
  const { isConnected, address, account } = useWallet();

  if (!isConnected || !account) {
    return (
      <Card>
        <p className="text-gray-500">No wallet connected</p>
      </Card>
    );
  }

  return (
    <Card
      header={
        <h3 className="text-lg font-semibold">Account Information</h3>
      }
    >
      <div className="space-y-4">
        {/* Address */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Address</p>
          <p className="font-mono text-sm mt-1 break-all">{address}</p>
          <p className="text-xs text-gray-500 mt-1">
            {formatAddress(address || '', 8)}
          </p>
        </div>

        {/* Balance */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Balance</p>
          <p className="text-2xl font-bold text-algorand-600 mt-1">
            {formatAlgo(account.amount)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {account.amount.toLocaleString()} microAlgos
          </p>
        </div>

        {/* Assets */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Assets Held</p>
          <p className="text-xl font-semibold mt-1">{account.assets.length}</p>
        </div>

        {/* Created Assets */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Created Assets</p>
          <p className="text-xl font-semibold mt-1">{account.createdAssets.length}</p>
        </div>
      </div>
    </Card>
  );
};

AccountCard.displayName = 'AccountCard';
