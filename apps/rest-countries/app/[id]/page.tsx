import { Country } from "@/type/type";
import Link from "next/link";
import { BackButton } from "./_components/back-button";

export async function generateStaticParams() {
  const responseData = await fetch(`http://localhost:3000/api/list`);
  const countries: Country[] = await responseData.json();

  return countries.map(({ numericCode }) => ({
    id: numericCode,
  }));
}

export default async function Id({ params }: { params: { id: string } }) {
  try {
    const { id } = await params;
    const responseData = await fetch(`http://localhost:3000/api/${id}`);
    const country: Country = await responseData.json();

    const {
      name: countryName,
      flags,
      nativeName,
      population,
      region,
      subregion,
      capital,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = country;

    return (
      <section className="flex flex-col mt-20">
        <BackButton />
        <section className="flex gap-[120px] mt-20">
          <img
            className="aspect-[1.4/1] w-[560px]"
            alt={`the ${countryName}'s national flag`}
            src={`${flags.png}`}
          />
          <div className="flex flex-col">
            <h3 className="font-extrabold text-3xl mt-10 mb-9">
              {countryName}
            </h3>

            <div className="flex gap-[144px] mb-[76px]">
              <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                  <span className="text-base font-bold">Native Name: </span>
                  <span className="text-base font-light">{nativeName}</span>
                </div>

                <div className="flex gap-1">
                  <span className="text-base font-bold">Population: </span>
                  <span className="text-base font-light">{population}</span>
                </div>

                <div className="flex gap-1">
                  <span className="text-base font-bold">Region: </span>
                  <span className="text-base font-light">{region}</span>
                </div>

                <div className="flex gap-1">
                  <span className="text-base font-bold">Sub Region: </span>
                  <span className="text-base font-light">{subregion}</span>
                </div>

                <div className="flex gap-1">
                  <span className="text-base font-bold">Capital: </span>
                  <span className="text-base font-light">{capital}</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex gap-1">
                  <span className="text-base font-bold">Top Level Domain:</span>
                  <span className="text-base font-light">{topLevelDomain}</span>
                </div>

                <div className="flex gap-1">
                  <span className="text-base font-bold">Currencies: </span>
                  <span className="text-base font-light">
                    {currencies.map((currency) => currency.code).join(", ")}
                  </span>
                </div>

                <div className="flex gap-1">
                  <span className="text-base font-bold">Languages: </span>
                  <span className="text-base font-light">
                    {languages.map((language) => language.name).join(", ")}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <span className="text-base font-bold">Border Countries: </span>
              <div className="flex gap-2">
                {borders.map((border) => (
                  <Link
                    key={border}
                    href={`/${border}`}
                    className="px-7 py-[6px] flex justify-center items-center font-light bg-white rounded text-xs drop-shadow-[0_0_4px_rgb(0,0,0,0.25)]"
                  >
                    {border}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    );
  } catch (error) {
    console.log(error);
  }
}
