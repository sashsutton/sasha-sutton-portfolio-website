"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Mode } from "@/data/content";

interface ModeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextValue | null>(null);

/**
 * Drives the single shared accent variable that distinguishes the two
 * lenses (cyan for science, amber for music) by stamping data-mode on
 * <html>. Route changes set the mode; the landing page defaults to science.
 */
export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("science");

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) throw new Error("useMode must be used within a ModeProvider");
  return ctx;
}
