// useMockNfts — returns a small list of mock NFTs for UI development
// TODO: replace with real data sources; client-only mock helper
export const useMockNfts = () => {
  return [{ id: '1', title: 'Mock NFT 1' }, { id: '2', title: 'Mock NFT 2' }] as any;
};
