"use client";

import { ModeContext } from "@/providers/mode-provider";
import { useContext } from "react";

export function ChangeModeButton() {
  const { setMode } = useContext(ModeContext);

  return (
    <button
      className="flex gap-2 p-2 justify-center items-center mt-[2px]"
      type="button"
      onClick={setMode}
    >
      <img
        src="http://localhost:3001/icon-moon.svg"
        className="w-4 h-4 "
        alt="change dark mode button"
      />
      <span className="text-base font-bold dark:text-white text-black">
        Dark Mode
      </span>
    </button>
  );
}
