/**
 * Hook for responsive media queries
 */

import { useEffect, useState } from 'react';

/**
 * Hook to detect media query matches (responsive design)
 */
export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

/**
 * Predefined breakpoint hooks
 */
export const useIsSmall = () => useMediaQuery('(max-width: 640px)');
export const useIsMedium = () => useMediaQuery('(max-width: 768px)');
export const useIsLarge = () => useMediaQuery('(max-width: 1024px)');
export const useIsXLarge = () => useMediaQuery('(max-width: 1280px)');

export const useIsMobile = () => useMediaQuery('(max-width: 768px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)');
