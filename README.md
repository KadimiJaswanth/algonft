# Algorand NFT Minter + Wallet + Payments Dashboard

A complete **frontend-only** React + TypeScript scaffold for building applications with Algorand NFT minting, wallet management, and payments functionality.

## ⚠️ Important: Frontend-Only Scaffold

This is a **frontend-only** scaffold with client-side stubs for blockchain integration. No backend, API keys, or secrets are included.

All Algorand blockchain calls are marked with `TODO` comments showing how to implement them using:
- **algosdk** for transaction building
- **MyAlgoConnect**, **AlgoSigner**, or **WalletConnect** for wallet signing
- **Algorand Indexer** for querying blockchain data

## 📋 What's Included

### Components (~40 files)
- **Primitives**: Button, Input, Card, Modal, Badge, Spinner, etc.
- **Wallet**: WalletConnectButton, AccountCard
- **NFT Minting**: MintForm, MintPreview, IPFSUploader
- **Gallery**: GalleryGrid, NFTCard, Filters, Pagination
- **Payments**: SendPaymentForm, PaymentHistory (stub)
- **Dashboard**: DashboardHeader, StatsPanel (stubs)

### Hooks (~10 files)
- `useAlgorandClient` - Access suggested transaction parameters
- `useWallet` - Wallet connection state and actions
- `useFetch` - Generic data fetching
- `useDebounce` - Debounce hook for search/filters
- `usePagination` - Pagination logic
- `useLocalStorage` - localStorage management
- `useAsync` - Async operation handling
- `useToast` - Notifications
- `useOutsideClick` - Click outside detection
- `useMediaQuery` - Responsive design helpers
- `useForm` - Form state management

### Services (~5 files)
- `algorandClient.ts` - Browser-friendly algosdk wrapper with TODOs
- `nftService.ts` - NFT minting and management stubs
- `paymentService.ts` - Payment processing stubs
- `walletService.ts` - Wallet connection stubs
- `ipfsService.ts` - IPFS upload/fetch stubs

### Utils (~5 files)
- `format.ts` - Number, date, and address formatting
- `validators.ts` - Algorand address and data validation
- `storage.ts` - localStorage utilities
- `constants.ts` - App configuration
- `types.ts` - TypeScript interfaces

### Pages
- `Index.tsx` - Landing page with feature showcase
- `NotFound.tsx` - 404 page

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and pnpm (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Type checking
pnpm lint
```

The app will be available at `http://localhost:5173`

## 📦 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Styling
- **React Router 6** - Routing
- **algosdk** - Algorand SDK (client-side only)
- **Vitest** - Testing framework
- **React Testing Library** - Component testing

## 🔗 Browser Wallet Integration

This scaffold is ready to integrate with browser wallet providers:

### MyAlgoConnect
```typescript
import MyAlgoConnect from '@randlabs/myalgo-connect';
const myAlgo = new MyAlgoConnect();
const signedTxns = await myAlgo.signTransaction(unsignedTxn.toByte());
```

### AlgoSigner
```typescript
const signedTxns = await window.AlgoSigner.signTransaction(
  algosdk.encodeObj([unsignedTxn])
);
```

### WalletConnect
```typescript
// Use WalletConnect protocol for multi-chain support
```

## 🎯 How to Implement Real Blockchain Functionality

1. **Search for `TODO` comments** throughout the codebase
2. Each TODO shows where to add actual blockchain integration
3. Key files to modify:
   - `src/lib/algorandClient.ts` - Connect to real Algorand node
   - `src/services/nftService.ts` - Implement NFT minting
   - `src/services/paymentService.ts` - Implement payments
   - `src/services/walletService.ts` - Connect wallet providers
   - `src/services/ipfsService.ts` - Integrate IPFS hosting

## 📝 Project Structure

```
src/
├── components/
│   ├── primitives/          # Base UI components
│   ├── features/            # Feature-specific components
│   │   ├── wallet/
│   │   ├── nft/
│   │   ├── gallery/
│   │   ├── payment/
│   │   ├── dashboard/
│   │   └── common/
│   └── layout/              # Layout/navigation
├── pages/                   # Page components
├── hooks/                   # Custom React hooks
├── services/                # API and blockchain services (stubs)
├── lib/                     # Utilities and libraries
├── utils/                   # Helper functions
├── types/                   # TypeScript types
├── styles/                  # Global styles
├── tests/                   # Test files
├── App.tsx                  # Main app component
├── main.tsx                 # Entry point
└── index.css                # Global styles

public/
└── sample-nfts.json         # Sample data for testing
```

## 🧪 Testing

Tests are set up with Vitest and React Testing Library:

```bash
# Run tests
pnpm test

# Run tests with UI
pnpm test:ui

# Watch mode
pnpm test --watch
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the Algorand color palette and theme.

### Styling
- Global styles: `src/index.css`
- Component-level styling: Tailwind classes in TSX files

### API Integration
1. Locate `TODO` comments in service files
2. Replace mock returns with actual API calls
3. Use provided hooks (`useAsync`, `useFetch`) for async operations

## ⚠️ Important Notes

- **No Private Keys**: Never store private keys or wallet seeds in this code
- **No API Tokens**: No Algorand node tokens or service secrets included
- **Frontend Only**: All signing must happen in the browser using wallet providers
- **Testing Network**: Use testnet for development/testing

## 📚 Resources

- [Algorand Developer Docs](https://developer.algorand.org)
- [JS Algorand SDK](https://github.com/algorand/js-algorand-sdk)
- [MyAlgoConnect](https://github.com/randlabs/myalgo-connect)
- [AlgoSigner](https://github.com/PureStake/algosigner)
- [Algorand Indexer API](https://developer.algorand.org/docs/rest-apis/indexer/)

## 📄 License

MIT

---

**Happy building! Remember to replace all TODOs with real blockchain integration before going to production.**
