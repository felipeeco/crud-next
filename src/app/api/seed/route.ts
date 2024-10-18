import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {

  await prisma.todo.deleteMany(); //be aware because this will delete all the data in the table
  
  await prisma.todo.createMany({
    data: [
      {description: "Learn Prisma", completed: true},
      {description: "Learn Prisma 2"},
      {description: "Learn Prisma 3"},
      {description: "Learn Prisma 4"},
    ]
  });


  return NextResponse.json({ message: "Seed Executed" });
}