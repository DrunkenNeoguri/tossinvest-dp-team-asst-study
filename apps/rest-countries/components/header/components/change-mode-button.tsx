"use client";

import { useState } from "react";

export function ChangeModeButton() {
  const [toggleMode, setToggleMode] = useState<"Dark" | "Light">("Light");

  const handleOnClick = () => {
    return setToggleMode((prev) => (prev === "Dark" ? "Light" : "Dark"));
  };

  return (
    <button type="button" onClick={handleOnClick}>
      {toggleMode}
      Mode
    </button>
  );
}
