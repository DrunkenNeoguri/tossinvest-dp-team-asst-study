"use client";
import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href="/"
      className="flex w-[136px] h-10 justify-center items-center bg-white rounded-lg drop-shadow-[0_0_4px_rgb(0,0,0,0.25)]"
    >
      Back
    </Link>
  );
}
