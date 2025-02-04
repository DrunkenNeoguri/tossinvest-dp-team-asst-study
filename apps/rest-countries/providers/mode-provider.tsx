"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

type ModeType = "light" | "dark";

interface ModeContextType {
  mode: ModeType;
  setMode: () => void;
}

export const ModeContext = createContext<ModeContextType>({
  mode: "light",
  setMode: () => {},
});

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ModeType>("light");

  const handleChangeMode = () => {
    console.log(mode);
    return mode === "light" ? setMode("dark") : setMode("light");
  };

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      localStorage.currentTheme === mode ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
    );

    localStorage.currentTheme = mode;
    localStorage.removeItem("theme");
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode: mode, setMode: handleChangeMode }}>
      {children}
    </ModeContext.Provider>
  );
}
