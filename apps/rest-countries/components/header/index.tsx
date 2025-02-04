import Link from "next/link";
import { ChangeModeButton } from "./components/change-mode-button";

export function Header() {
  return (
    <header className="w-full h-20 flex text-lg px-20 py-7 bg-white fixed top-0 right-0 z-20 justify-between drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
      <Link href="/" className="font-extrabold text-2xl">
        Where in the world?
      </Link>
      <ChangeModeButton />
    </header>
  );
}
