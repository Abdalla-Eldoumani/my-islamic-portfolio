"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

// Wraps the page in MotionConfig so Framer Motion respects the user's
// prefers-reduced-motion setting. Server components can still nest inside
// because this only adds a client boundary at the wrapper itself.
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
