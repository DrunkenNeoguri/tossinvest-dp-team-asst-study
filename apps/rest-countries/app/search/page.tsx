import { RegionCard } from "@/components/region-card";
import { SearchBar } from "@/components/search-bar";
import { Country } from "@/type/type";
import { Fragment } from "react";
import { ResultNotFountSection } from "./_component/result-not-found-section";
import { Dropdown } from "@/components/dropdown";

export default async function Search({
  searchParams,
}: {
  searchParams: { keyword?: string; region?: string };
}) {
  try {
    const { keyword, region } = await searchParams;
    const fetchURL = () => {
      if (keyword && region) {
        return `keyword=${keyword}+region=${region}`;
      } else if (keyword) {
        return `keyword=${keyword}`;
      } else if (region) {
        return `region=${region}`;
      }
      return "";
    };

    const responseData = await fetch(
      `http://localhost:3000/api/search?${fetchURL()}`
    );
    const countries: Country[] = await responseData.json();

    return (
      <Fragment>
        <div className="w-full flex justify-between my-12">
          <SearchBar />
          <Dropdown />
        </div>

        {countries.length === 0 ? (
          <ResultNotFountSection />
        ) : (
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
        )}
      </Fragment>
    );
  } catch (error) {
    console.error(error);
  }
}
