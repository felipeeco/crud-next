import prisma from '@/lib/prisma';

export default async function RestTodosPage() {
  
  const todos = await prisma.todo.findMany({ orderBy: {description: 'asc'}});

  return (
    <>
      
    </>
  );
}