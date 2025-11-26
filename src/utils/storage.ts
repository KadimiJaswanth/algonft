/**
 * Local storage utilities
 */

/**
 * Get item from localStorage
 * @param key - Storage key
 * @param defaultValue - Default value if key doesn't exist
 * @returns Parsed value or default
 */
export const getLocalStorageItem = <T>(key: string, defaultValue?: T): T | null => {
  try {
    const item = localStorage.getItem(key);
    if (item === null) return defaultValue ?? null;
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Error reading localStorage key "${key}":`, error);
    return defaultValue ?? null;
  }
};

/**
 * Set item in localStorage
 * @param key - Storage key
 * @param value - Value to store
 */
export const setLocalStorageItem = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage key "${key}":`, error);
  }
};

/**
 * Remove item from localStorage
 * @param key - Storage key
 */
export const removeLocalStorageItem = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing localStorage key "${key}":`, error);
  }
};

/**
 * Clear all localStorage items
 */
export const clearLocalStorage = (): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error('Error clearing localStorage:', error);
  }
};

/**
 * Check if localStorage is available
 */
export const isLocalStorageAvailable = (): boolean => {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};
