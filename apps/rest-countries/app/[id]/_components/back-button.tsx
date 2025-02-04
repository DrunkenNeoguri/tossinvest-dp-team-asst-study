"use client";
import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href="/"
      className="flex w-[136px] h-10 justify-center items-center bg-white rounded-lg drop-shadow-[0_0_4px_rgb(0,0,0,0.25)] gap-2"
    >
      <img
        src="http://localhost:3000/icon-back.svg"
        alt="back arrow"
        className="w-4 h-4"
      />
      <span className="text-sm font-light">Back</span>
    </Link>
  );
}
