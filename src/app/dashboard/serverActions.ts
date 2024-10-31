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

export async function CreateTodo(description: string, completed: boolean): Promise<string> {
  try {
    await prisma.todo.create({ 
      data: {
        description,
        completed
      } 
    });
    return 'Todo created succesfull'
  } catch (error) {
    return `Error creating todo: ${error}`
  }
}

export async function DeleteTodo(id: string): Promise<string> {
  try {
    await prisma.todo.delete({
      where: {
        id: id,
      },
    });
    return 'Todo deleted successfully';
  } catch (error) {
    return `Error deleting todo: ${error}`;
  }
}