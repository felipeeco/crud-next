import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

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

const putSchema = yup.object({
  description: yup.string().required(),
  completed: yup.boolean().optional().default(false)
});

export async function PUT(request: Request, { params }: Segments) {
  const todo = await prisma.todo.findUnique({ where: { id: params.id } })
  if(!todo) return NextResponse.json({ message: "Todo not found" }, { status: 404 });

  try {
    const { description, completed } = await putSchema.validate(await request.json());
    await prisma.todo.update({ 
      where: { id: params.id }, 
      data: {
        description,
        completed
      }
    });
    return NextResponse.json({ message: "todo updated successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
  }
}