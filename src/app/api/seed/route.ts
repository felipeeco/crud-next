import { NextResponse } from "next/server";

export async function GET() {

  // await prisma.todo.deleteMany(); //be aware because this will delete all the data in the table


  return NextResponse.json({ message: "Seed Executed" });
}