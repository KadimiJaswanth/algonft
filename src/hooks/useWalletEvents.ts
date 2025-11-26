// useWalletEvents — hook for wallet connect/disconnect events
// TODO: subscribe to AlgoSigner/MyAlgoConnect events in-browser (client-only)
import { useEffect } from "react";

export const useWalletEvents = (handler: (e: any) => void) => {
  useEffect(() => {
    // placeholder: attach wallet events
    return () => {
      // cleanup
    };
  }, [handler]);
};
