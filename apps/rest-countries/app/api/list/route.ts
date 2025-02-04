import { NextRequest, NextResponse } from "next/server";
import data from "./data.json";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const queryKeyword = searchParams.get("keyword");

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

    return NextResponse.json(data);
  } catch (error) {
    throw new Error("데이터가 없습니다.");
  }
}
