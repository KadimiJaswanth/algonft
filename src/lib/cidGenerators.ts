// cidGenerators — small helpers to create mock IPFS CIDs for demos
// TODO: use real IPFS uploads in prod; these are client-side mocks
export const mockCid = (seed = '') => `bafy${seed}mockcid`;
