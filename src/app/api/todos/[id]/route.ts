import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

interface Segments {
  params: {
    id: string;
  }
}

export async function GET(request: Request, { params }: Segments) {
  const todo = await prisma.todo.findUnique({ where: { id: params.id } })
  if(!todo) return NextResponse.json({ message: "Todo not found" }, { status: 404 });
  return NextResponse.json(todo);
}