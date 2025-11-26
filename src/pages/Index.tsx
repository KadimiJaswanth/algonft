/**
 * Index (home) page
 * Landing page for Algorand NFT Dashboard
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '@/components/primitives';
import { useWallet } from '@/hooks';

/**
 * Index page
 * Home/landing page with feature showcase
 */
export const Index: React.FC = () => {
  const { isConnected } = useWallet();

  const features = [
    {
      title: 'NFT Minting',
      description: 'Create and mint your own NFTs on the Algorand blockchain with IPFS integration',
      icon: '🎨',
      link: '/mint',
    },
    {
      title: 'Wallet Management',
      description: 'Connect your wallet, view balances, and manage your Algorand assets',
      icon: '👛',
      link: '/wallet',
    },
    {
      title: 'Gallery & Marketplace',
      description: 'Browse NFTs, view details, and manage your collection',
      icon: '🖼️',
      link: '/gallery',
    },
    {
      title: 'Payments',
      description: 'Send ALGO payments and track transaction history',
      icon: '💳',
      link: '/payments',
    },
    {
      title: 'Dashboard',
      description: 'Monitor your portfolio with real-time stats and analytics',
      icon: '📊',
      link: '/dashboard',
    },
    {
      title: 'Developer Ready',
      description: 'TypeScript, modern tooling, and clear TODOs for blockchain integration',
      icon: '⚙️',
      link: '/',
    },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="py-12">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Algorand <span className="text-algorand-600">NFT</span> Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A complete frontend-only React + TypeScript scaffold for NFT minting, wallet management, and payments on the Algorand blockchain.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            {isConnected ? (
              <>
                <Link to="/mint">
                  <Button variant="primary" size="lg">
                    Start Minting →
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="outline" size="lg">
                    View Gallery
                  </Button>
                </Link>
              </>
            ) : (
              <Button variant="primary" size="lg">
                Connect Wallet to Get Started
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Powerful Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <Link to={feature.link}>
                <div className="space-y-4">
                  <div className="text-5xl">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="pt-4">
                    <span className="text-algorand-600 font-medium text-sm flex items-center gap-1">
                      Learn more →
                    </span>
                  </div>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-gray-900 rounded-2xl p-12 text-white">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold">Modern Tech Stack</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Built with production-ready tools and best practices
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'React 18', emoji: '⚛️' },
              { name: 'TypeScript', emoji: '📘' },
              { name: 'Tailwind CSS', emoji: '🎨' },
              { name: 'Algorand SDK', emoji: '🔗' },
              { name: 'Vite', emoji: '⚡' },
              { name: 'React Router', emoji: '🛣️' },
              { name: 'Vitest', emoji: '🧪' },
              { name: 'IPFS', emoji: '📦' },
            ].map((tech, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl">{tech.emoji}</div>
                <p className="text-sm font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Getting Started
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card
            header={<div className="text-2xl font-bold text-algorand-600">1</div>}
          >
            <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
            <p className="text-gray-600">
              Start by connecting your Algorand wallet to access all features.
            </p>
          </Card>
          <Card
            header={<div className="text-2xl font-bold text-algorand-600">2</div>}
          >
            <h3 className="text-xl font-semibold mb-2">Upload & Mint</h3>
            <p className="text-gray-600">
              Upload your NFT artwork to IPFS and mint it on the Algorand blockchain.
            </p>
          </Card>
          <Card
            header={<div className="text-2xl font-bold text-algorand-600">3</div>}
          >
            <h3 className="text-xl font-semibold mb-2">Manage & Trade</h3>
            <p className="text-gray-600">
              View your NFTs, send payments, and manage your digital assets.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-algorand-50 border-2 border-algorand-200 rounded-2xl p-12 text-center space-y-6">
        <h2 className="text-3xl font-bold text-gray-900">
          Ready to Build?
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          This is a frontend-only scaffold. Explore the code to see how to integrate real Algorand blockchain functionality.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="https://github.com/algorand/js-algorand-sdk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary">
              View Algorand SDK Docs
            </Button>
          </a>
          <a
            href="https://developer.algorand.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">
              Developer Guide
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

Index.displayName = 'Index';
