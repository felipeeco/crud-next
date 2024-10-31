"use server";

import prisma from '@/lib/prisma';
import { Todo } from "@prisma/client";

export async function UpdateTodo(id: string, completed: boolean): Promise<Todo | null> {
  try {
    const updatedTodo = await prisma.todo.update({
      where: { id },
      data: { completed },
    });
    return updatedTodo;
  } catch (error) {
    console.error("Error updating todo:", error);
    return null;
  }
}
