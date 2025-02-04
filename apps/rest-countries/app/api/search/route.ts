import { NextRequest, NextResponse } from "next/server";
import data from "../list/data.json";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const queryKeyword = searchParams.get("keyword");
    const queryRegion = searchParams.get("region");

    if (queryRegion && queryKeyword) {
      const searchResultCountries = await data
        .filter((country) =>
          country.name
            .toLocaleLowerCase()
            .includes(queryKeyword.toLocaleLowerCase())
        )
        .filter((country) =>
          country.name
            .toLocaleLowerCase()
            .includes(queryKeyword.toLocaleLowerCase())
        );
      return searchResultCountries
        ? NextResponse.json(searchResultCountries)
        : [];
    }

    if (queryKeyword) {
      const searchResultCountries = await data.filter((country) =>
        country.name
          .toLocaleLowerCase()
          .includes(queryKeyword.toLocaleLowerCase())
      );
      return searchResultCountries
        ? NextResponse.json(searchResultCountries)
        : [];
    }

    if (queryRegion) {
      const searchResultCountries = await data.filter((country) =>
        country.region
          .toLocaleLowerCase()
          .includes(queryRegion.toLocaleLowerCase())
      );
      return searchResultCountries
        ? NextResponse.json(searchResultCountries)
        : [];
    }
  } catch (error) {
    throw new Error("데이터가 없습니다.");
  }
}
