// useThemeSwitcher — simple theme toggle hook
// TODO: persist theme to localStorage and update document class (client-only)
import { useState } from "react";

export const useThemeSwitcher = () => {
  const [theme, setTheme] = useState<'light'|'dark'>('light');
  return { theme, setTheme } as any;
};
