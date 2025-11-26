/**
 * Layout component
 * Main layout wrapper for all pages with header and navigation
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { WalletConnectButton } from '@/components/features/wallet/WalletConnectButton';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout component
 * Provides header, navigation, and footer for all pages
 */
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-algorand-600 rounded-lg flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-bold text-xl text-gray-900 hidden sm:inline">
                Algorand NFT
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/"
                className="text-gray-700 hover:text-algorand-600 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                to="/mint"
                className="text-gray-700 hover:text-algorand-600 transition-colors font-medium"
              >
                Mint
              </Link>
              <Link
                to="/gallery"
                className="text-gray-700 hover:text-algorand-600 transition-colors font-medium"
              >
                Gallery
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-algorand-600 transition-colors font-medium"
              >
                Dashboard
              </Link>
            </nav>

            {/* Wallet Button */}
            <div>
              <WalletConnectButton variant="button" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Algorand NFT</h3>
              <p className="text-sm text-gray-600">
                Frontend-only scaffold for NFT minting, wallet management, and payments on Algorand.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-algorand-600">
                    Mint NFTs
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-algorand-600">
                    Wallet Connection
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-algorand-600">
                    Send Payments
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-algorand-600">
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a
                    href="https://developer.algorand.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-algorand-600"
                  >
                    Algorand Developer
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/algorand/js-algorand-sdk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-algorand-600"
                  >
                    JS SDK
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link to="/" className="hover:text-algorand-600">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-algorand-600">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-600 text-center">
            <p>
              © {new Date().getFullYear()} Algorand NFT Scaffold. Frontend-only. No real transactions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

Layout.displayName = 'Layout';
