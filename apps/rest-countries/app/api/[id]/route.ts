import { NextResponse } from "next/server";
import data from "../list/data.json";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  const filteredData = await data.filter(
    (country) => country.numericCode === id
  );

  return NextResponse.json(filteredData[0]);
}
