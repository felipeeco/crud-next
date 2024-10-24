import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

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
    skip: +skip,
    orderBy: {
      createdAt: 'desc'
    }
  });

  return NextResponse.json(todos);
}

const postSchema = yup.object({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false)
});

export async function POST(request: Request) {
  try {
    const { description, completed } = await postSchema.validate(await request.json());
    await prisma.todo.create({ 
      data: {
        description,
        completed
      } 
    });
    return NextResponse.json({ message: "todo created successfully" }, { status: 201 });
    /* eslint-disable @typescript-eslint/no-unused-vars */
  } catch (error) {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }
}