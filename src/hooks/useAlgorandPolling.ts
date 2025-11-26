// useAlgorandPolling — poll for transaction confirmation or indexer updates
// TODO: use client-side polling or websockets; do not store secrets here
import { useEffect } from "react";

export const useAlgorandPolling = (txId?: string, cb?: (status: any) => void) => {
  useEffect(() => {
    if (!txId) return;
    // placeholder: poll indexer for txId
    return () => {
      // cleanup
    };
  }, [txId]);
};
