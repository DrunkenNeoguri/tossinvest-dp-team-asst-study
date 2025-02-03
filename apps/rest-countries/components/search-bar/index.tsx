"use client";
import { ChangeEvent, useEffect, useState } from "react";

export function SearchBar() {
  const [searchKeyword, setSearchKeyword] = useState<string>();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.currentTarget.value);
  };

  useEffect(() => {}, []);

  return (
    <input
      className="w-[40rem] h-14 pr-[76px] pl-8 py-4 placeholder-gray-500 text-black"
      type="text"
      placeholder="Search for a country..."
      onChange={handleOnChange}
    />
  );
}
