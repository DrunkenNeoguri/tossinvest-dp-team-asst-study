"use client";

import { Regions } from "@/type/type";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export function Dropdown() {
  const [selected, setSelected] = useState<Regions>();
  const router = useRouter();

  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelected(event.target.value as Regions);
  };

  useEffect(() => {
    router.push(`/search?region=${selected}`);
  }, [selected]);

  return (
    <div>
      <select name="region" value={selected} onChange={handleOnChange}>
        <option value="select">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}
