"use client";

import { useSyncExternalStore } from "react";

/** True only after client hydration — use to avoid SSR/client animation mismatches. */
export function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );
}
