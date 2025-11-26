/**
 * Hook for handling async operations
 */

import { useState, useCallback, useEffect } from 'react';

interface UseAsyncResult<T, E = Error> {
  data: T | null;
  loading: boolean;
  error: E | null;
  execute: (...args: any[]) => Promise<T>;
}

/**
 * Hook to handle async function execution with loading and error states
 */
export const useAsync = <T, E = Error,>(
  asyncFunction: (...args: any[]) => Promise<T>,
  immediate: boolean = false
): UseAsyncResult<T, E> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<E | null>(null);

  const execute = useCallback(
    async (...args: any[]) => {
      try {
        setLoading(true);
        setError(null);
        const response = await asyncFunction(...args);
        setData(response);
        return response;
      } catch (err) {
        const error = err as E;
        setError(error);
        throw error;
      } finally {
        setLoading(false);
      }
    },
    [asyncFunction]
  );

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { data, loading, error, execute };
};
