"use client";

import { Regions } from "@/type/type";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function Dropdown() {
  const [toggleState, setToggleState] = useState<"open" | "close">("close");

  const router = useRouter();
  const searchParams = useSearchParams();
  const queryRegion = searchParams.get("region");

  const handleOnClickToggleButton = () => {
    return toggleState === "open"
      ? setToggleState("close")
      : setToggleState("open");
  };

  const handleOnClickRegionButton = (region: Regions) => {
    // TODO: 차후에 keyword가 있으면 겹쳐서 검사하도록 처리 필요.
    return router.push(`/search?region=${region}`);
  };

  const openToggleStyle = toggleState === "open" ? "flex flex-col" : "hidden";

  return (
    <div className="relative">
      <button
        type="button"
        className="w-[200px] h-14 text-black bg-white drop-shadow-[0_0px_4px_rgba(0,0,0,0.25)] rounded-md px-6 mr-5 appearance-none flex justify-start items-center cursor-pointer"
        onClick={handleOnClickToggleButton}
      >
        <span>{queryRegion != null ? queryRegion : "Filter by Region"}</span>
      </button>
      <img
        src="http://localhost:3000/icon-dropdown.svg"
        alt="Dropdown icon"
        className="absolute top-6 w-2 h-2 right-11"
      />

      <div
        className={
          "absolute z-10 top-[60px] mt-2 py-3 px-2 w-[200px] border-box bg-white rounded-lg text-left drop-shadow-[0_0px_4px_rgba(0,0,0,0.25)] " +
          openToggleStyle
        }
      >
        <button
          type="button"
          className="w-full py-[6px] px-4 text-black rounded-lg flex justify-start items-center hover:bg-slate-50 ease delay-100 cursor-pointer"
          onClick={() => handleOnClickRegionButton("Africa")}
        >
          Africa
        </button>
        <button
          type="button"
          className="w-full py-[6px] px-4 text-black rounded-lg flex justify-start items-center hover:bg-slate-50 ease delay-100 cursor-pointer"
          onClick={() => handleOnClickRegionButton("America")}
        >
          America
        </button>
        <button
          type="button"
          className="w-full py-[6px] px-4 text-black rounded-lg flex justify-start items-center hover:bg-slate-50 ease delay-100 cursor-pointer"
          onClick={() => handleOnClickRegionButton("Asia")}
        >
          Asia
        </button>
        <button
          type="button"
          className="w-full py-[6px] px-4 text-black rounded-lg flex justify-start items-center hover:bg-slate-50 ease delay-100 cursor-pointer"
          onClick={() => handleOnClickRegionButton("Europe")}
        >
          Europe
        </button>
        <button
          type="button"
          className="w-full py-[6px] px-4 text-black rounded-lg flex justify-start items-center hover:bg-slate-50 ease delay-100 cursor-pointer"
          onClick={() => handleOnClickRegionButton("Oceania")}
        >
          Oceania
        </button>
      </div>
    </div>
  );
}
