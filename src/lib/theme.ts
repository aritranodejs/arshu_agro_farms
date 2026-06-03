export const THEME_STORAGE_KEY = "arshu-agro-theme";

export type ThemeSetting = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function resolveTheme(theme: ThemeSetting): ResolvedTheme {
  return theme === "system" ? getSystemTheme() : theme;
}

export function applyThemeClass(
  theme: ThemeSetting,
  disableTransition = false
): ResolvedTheme {
  const resolved = resolveTheme(theme);
  const root = document.documentElement;

  if (disableTransition) {
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode(
        "*,*::before,*::after{transition:none!important}"
      )
    );
    document.head.appendChild(style);
    window.getComputedStyle(document.body);
    setTimeout(() => document.head.removeChild(style), 1);
  }

  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;

  return resolved;
}

export function readStoredTheme(
  storageKey: string,
  defaultTheme: ThemeSetting
): ThemeSetting {
  try {
    const stored = localStorage.getItem(storageKey) as ThemeSetting | null;
    return stored ?? defaultTheme;
  } catch {
    return defaultTheme;
  }
}
