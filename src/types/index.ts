/**
 * Core type definitions for Algorand NFT Dashboard
 */

export interface Account {
  address: string;
  name?: string;
  amount: number; // microAlgos
  assets: Asset[];
  createdAssets: number[];
}

export interface Asset {
  id: number;
  name: string;
  unitName: string;
  total: number;
  decimals: number;
  frozen: boolean;
  balance: number;
}

export interface NFT extends Asset {
  ipfsHash: string;
  metadata: NFTMetadata;
  creatorAddress: string;
  createdAt: number;
}

export interface NFTMetadata {
  name: string;
  description: string;
  image: string;
  properties?: Record<string, string | number>;
}

export interface Transaction {
  id: string;
  type: 'payment' | 'asset-transfer' | 'asset-creation';
  from: string;
  to: string;
  amount: number;
  assetId?: number;
  timestamp: number;
  status: 'pending' | 'confirmed' | 'failed';
  txHash?: string;
}

export interface WalletState {
  isConnected: boolean;
  address: string | null;
  account: Account | null;
  loading: boolean;
  error: string | null;
}

export interface PaymentRequest {
  recipient: string;
  amount: number; // microAlgos
  note?: string;
  assetId?: number;
}

export interface MintRequest {
  assetName: string;
  unitName: string;
  total: number;
  decimals: number;
  ipfsHash: string;
  metadata: NFTMetadata;
}

export interface DashboardStats {
  totalAssets: number;
  totalNFTs: number;
  totalValue: number; // in microAlgos
  recentTransactions: Transaction[];
  portfolioChange: number; // percentage
}
