// useKeyboardShortcuts — register keyboard shortcuts client-side
// TODO: map keys to actions and clean up listeners on unmount
import { useEffect } from "react";

export const useKeyboardShortcuts = (map: Record<string, () => void>) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      if (map[key]) map[key]();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [map]);
};
