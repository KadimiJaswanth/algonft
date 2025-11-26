/**
 * Validation utility functions for Algorand addresses and data
 */

/**
 * Validate Algorand address format
 * @param address - Address string to validate
 * @returns true if valid Algorand address
 */
export const isValidAlgorandAddress = (address: string): boolean => {
  // Algorand addresses are base32 encoded and 58 characters long
  if (!address || address.length !== 58) return false;
  try {
    // Check if it can be decoded from base32
    return /^[A-Z2-7]+$/.test(address);
  } catch {
    return false;
  }
};

/**
 * Validate asset ID
 * @param assetId - Asset ID to validate
 * @returns true if valid asset ID
 */
export const isValidAssetId = (assetId: number | string): boolean => {
  const id = typeof assetId === 'string' ? parseInt(assetId, 10) : assetId;
  return !isNaN(id) && id > 0 && Number.isInteger(id);
};

/**
 * Validate amount (in microAlgos)
 * @param amount - Amount to validate
 * @param maxAmount - Optional maximum amount allowed
 * @returns true if valid amount
 */
export const isValidAmount = (amount: number, maxAmount?: number): boolean => {
  if (typeof amount !== 'number' || amount < 0 || !Number.isInteger(amount)) {
    return false;
  }
  if (maxAmount !== undefined && amount > maxAmount) {
    return false;
  }
  return true;
};

/**
 * Validate IPFS hash (CIDv0 or CIDv1)
 * @param hash - IPFS hash to validate
 * @returns true if valid IPFS hash
 */
export const isValidIPFSHash = (hash: string): boolean => {
  // CIDv0 (26-character base58 hash) or CIDv1 (Bafk... format)
  return /^(Qm[a-zA-Z0-9]{44}|bafy[a-zA-Z0-9]{55,})$/.test(hash);
};

/**
 * Validate asset name
 * @param name - Asset name to validate
 * @returns true if valid name (1-32 characters)
 */
export const isValidAssetName = (name: string): boolean => {
  return name.length > 0 && name.length <= 32;
};

/**
 * Validate unit name
 * @param unitName - Unit name to validate
 * @returns true if valid unit name (1-8 characters)
 */
export const isValidUnitName = (unitName: string): boolean => {
  return unitName.length > 0 && unitName.length <= 8;
};

/**
 * Validate total supply
 * @param total - Total supply to validate
 * @param decimals - Number of decimals
 * @returns true if valid total
 */
export const isValidTotal = (total: number, decimals: number): boolean => {
  if (!Number.isInteger(total) || total <= 0) return false;
  // Total must be representable with given decimals
  const max = Math.pow(10, 19 - decimals);
  return total <= max;
};

/**
 * Validate decimals
 * @param decimals - Decimals to validate
 * @returns true if valid (0-19)
 */
export const isValidDecimals = (decimals: number): boolean => {
  return Number.isInteger(decimals) && decimals >= 0 && decimals <= 19;
};

/**
 * Validate email format
 * @param email - Email to validate
 * @returns true if valid email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate transaction note (max 1000 bytes)
 * @param note - Note to validate
 * @returns true if valid note
 */
export const isValidTransactionNote = (note: string): boolean => {
  return note.length <= 1000;
};
