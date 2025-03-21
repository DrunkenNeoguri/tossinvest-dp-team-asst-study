import { NextResponse } from "next/server";
import data from "./data.json";

export async function GET() {
  try {
    return NextResponse.json(data);
  } catch {
    throw new Error("데이터가 없습니다.");
  }
}
