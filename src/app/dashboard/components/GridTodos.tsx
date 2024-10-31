'use client';

import { useRouter } from 'next/navigation';
import { Todo } from '@prisma/client';
import { Activity, UpdateTodo } from '../components';

interface Props {
  todos?: Todo[];
}

export const GridTodos = ({ todos = [] } : Props) => {

  const router = useRouter();

  const toggleTodo = async(id: string, completed: boolean) => {
    const updatedTodo = await UpdateTodo(id, completed);
    if (updatedTodo) {
      router.refresh();
    }
  };

  return (
    <>
      {
        todos && todos.map(todo => (
           <Activity
             key={todo.id}
             todo={todo}
             toggleTodo={toggleTodo}
           />
        ))
      }
    </>
  )
};