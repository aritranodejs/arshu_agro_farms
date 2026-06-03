import type { ReactNode } from "react";

/** Plain wrapper — page enter animation removed to avoid hydration mismatches. */
export function PageWrapper({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
