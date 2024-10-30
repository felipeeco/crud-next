'use client';

import { Todo } from '@prisma/client';
import { Activity } from '../components';

interface Props {
  todos?: Todo[];
}

export const GridTodos = ({ todos = [] } : Props) => {
  return (
    <>
      {
        todos && todos.map(todo => (
           <Activity
             key={todo.id}
             todo={todo}
           />
        ))
      }
    </>
  )
};