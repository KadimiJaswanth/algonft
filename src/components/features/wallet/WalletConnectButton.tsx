/**
 * WalletConnectButton component
 * Button to connect/disconnect wallet
 */

import React, { useState } from 'react';
import { Button } from '@/components/primitives';
import { useWallet } from '@/hooks';
import { formatAddress } from '@/utils/format';

interface WalletConnectButtonProps {
  variant?: 'button' | 'pill';
}

/**
 * WalletConnectButton component
 * Handles wallet connection/disconnection
 */
export const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({
  variant = 'button',
}) => {
  const { isConnected, address, loading, connect, disconnect } = useWallet();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleConnect = async () => {
    try {
      // TODO: Implement wallet provider selection
      // For now, use MyAlgo as default
      await connect('myalgo');
      setIsDropdownOpen(false);
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDisconnect = async () => {
    await disconnect();
    setIsDropdownOpen(false);
  };

  if (!isConnected) {
    return (
      <Button
        onClick={handleConnect}
        disabled={loading}
        variant="primary"
      >
        {loading ? 'Connecting...' : 'Connect Wallet'}
      </Button>
    );
  }

  return (
    <div className="relative">
      <Button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        variant={variant === 'pill' ? 'secondary' : 'outline'}
        className={variant === 'pill' ? 'rounded-full' : ''}
      >
        {formatAddress(address || '', 4)}
      </Button>

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-xs text-gray-500">Connected Account</p>
            <p className="font-mono text-sm break-all">{address}</p>
          </div>
          <button
            onClick={handleDisconnect}
            className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
};

WalletConnectButton.displayName = 'WalletConnectButton';
