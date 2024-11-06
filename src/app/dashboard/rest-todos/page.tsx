export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from '@/lib/prisma';
import { GridTodos } from '../components';

export default async function RestTodosPage() {
  
  const todos = await prisma.todo.findMany({ orderBy: {description: 'asc'}});

  return (
    <>
      <GridTodos todos={todos} />
    </>
  )
}