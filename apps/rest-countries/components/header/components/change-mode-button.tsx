"use client";

import { useEffect, useState } from "react";

export function ChangeModeButton() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const handleChangeMode = () => {
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
    <button
      className="flex gap-2 p-2 justify-center items-center mt-[2px] cursor-pointer"
      type="button"
      onClick={handleChangeMode}
    >
      <img
        src="http://localhost:3000/icon-moon.svg"
        className="w-4 h-4 "
        alt="change dark mode button"
      />
      <span className="text-base font-bold dark:text-white text-black">
        Dark Mode
      </span>
    </button>
  );
}
