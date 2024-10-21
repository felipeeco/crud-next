import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";
  const skip = searchParams.get("skip") ?? "0";

  if(isNaN(+skip)) {
    return NextResponse.json({ message: "skip parameter should be a number" }, { status: 400 });
  }

  if(isNaN(+take)) {
    return NextResponse.json({ message: "take parameter should be a number" }, { status: 400 });
  }

  const todos = await prisma.todo.findMany({
    take: +take,
    skip: +skip
  });

  return NextResponse.json(todos);
}