"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";

export function SearchBar() {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const router = useRouter();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.currentTarget.value);
  };

  const handleOnEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // TODO: 차후에 region이 있으면 겹쳐서 검사하도록 처리 필요.
      router.push(`/search?keyword=${searchKeyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        className="w-[40rem] h-14 pl-[76px] px-7 py-4 bg-white placeholder-gray-500 text-black drop-shadow-[0_0px_4px_rgba(0,0,0,0.25)] rounded-md"
        type="text"
        placeholder="Search for a country..."
        onChange={handleOnChange}
        onKeyDown={handleOnEnter}
      />
      <img
        className="w-5 h-5 absolute z-20 top-[18px] left-8"
        src="http://localhost:3000/icon-search.svg"
        alt="search bar icon"
      />
    </div>
  );
}
