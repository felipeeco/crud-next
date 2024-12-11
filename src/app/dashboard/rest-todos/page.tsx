export const dynamic = 'force-dynamic';
export const revalidate = 0;

import prisma from '@/lib/prisma';
import { GridTodos } from '../components';
import { getUserServerSession } from '../serverActions';
import { redirect } from 'next/navigation';

export default async function RestTodosPage() {
  const userSession = await getUserServerSession();
  if(!userSession) return redirect('/api/auth/signin');
  const userId = userSession?.id ?? ''; 
  const todos = await prisma.todo.findMany({
    where: {
      userId
    },
    orderBy: {
      description: 'asc',
    },
  });

  return (
    <>
      <GridTodos todos={todos} />
    </>
  )
}