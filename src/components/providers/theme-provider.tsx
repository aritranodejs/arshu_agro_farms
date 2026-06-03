"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  THEME_STORAGE_KEY,
  applyThemeClass,
  readStoredTheme,
  type ResolvedTheme,
  type ThemeSetting,
} from "@/lib/theme";

type ThemeContextValue = {
  theme: ThemeSetting;
  setTheme: (theme: ThemeSetting) => void;
  resolvedTheme: ResolvedTheme;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: ThemeSetting;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "light",
  enableSystem = true,
  disableTransitionOnChange = false,
  storageKey = THEME_STORAGE_KEY,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeSetting>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    let stored = readStoredTheme(storageKey, defaultTheme);
    if (!enableSystem && stored === "system") {
      stored = defaultTheme === "system" ? "light" : defaultTheme;
    }

    setThemeState(stored);
    setResolvedTheme(applyThemeClass(stored, disableTransitionOnChange));

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystemChange = () => {
      setThemeState((current) => {
        if (current !== "system") return current;
        setResolvedTheme(applyThemeClass("system", disableTransitionOnChange));
        return current;
      });
    };

    media.addEventListener("change", onSystemChange);
    return () => media.removeEventListener("change", onSystemChange);
  }, [defaultTheme, disableTransitionOnChange, enableSystem, storageKey]);

  const setTheme = useCallback(
    (next: ThemeSetting) => {
      const value =
        !enableSystem && next === "system"
          ? defaultTheme === "system"
            ? "light"
            : defaultTheme
          : next;

      setThemeState(value);
      try {
        localStorage.setItem(storageKey, value);
      } catch {
        /* private browsing */
      }
      setResolvedTheme(applyThemeClass(value, disableTransitionOnChange));
    },
    [defaultTheme, disableTransitionOnChange, enableSystem, storageKey]
  );

  const value = useMemo(
    () => ({ theme, setTheme, resolvedTheme }),
    [theme, setTheme, resolvedTheme]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
