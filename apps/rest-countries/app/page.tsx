import { RegionCard } from "@/components/region-card";
import { SearchBar } from "@/components/search-bar";
import { Country } from "@/type/type";
import { Fragment } from "react";

export default async function Home() {
  try {
    const responseData = await fetch(`http://localhost:3000/api/list`);
    const countries: Country[] = await responseData.json();

    return (
      <Fragment>
        <SearchBar />
        <div className="grid grid-cols-4 gap-[76px]">
          {countries.map((country) => (
            <RegionCard
              key={country.name}
              name={country.name}
              region={country.region}
              population={country.population}
              capital={country.capital}
              numericCode={country.numericCode}
              flag={country.flags.png}
            />
          ))}
        </div>
      </Fragment>
    );
  } catch (error) {
    console.error(error);
  }
}
