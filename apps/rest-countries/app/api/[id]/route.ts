import { NextResponse } from "next/server";
import data from "../list/data.json";
import { Country } from "@/type/type";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const countries = (await data) as Country[];

    const findCountryData = (await countries.find(
      (country) => country.numericCode === id
    )) as Country;

    const borderCountriesData = !findCountryData.borders
      ? []
      : await data.filter((country) =>
          findCountryData.borders.includes(country.alpha3Code)
        );

    return NextResponse.json({
      country: findCountryData,
      borderCountries: borderCountriesData,
    });
  } catch (error) {
    throw new Error(`${error}`);
  }
}
