'use client';

import { Todo } from '@prisma/client';
import styles from './Activity.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
  todo: Todo,
  toggleTodo?: (id: string, complete: boolean) => Promise<Todo|void>
}

export const Activity = ({ todo, toggleTodo }: Props) => {
  return (
    <div className={ `${todo.completed ? styles.todoDone : styles.todoPending} cursor-pointer` } 
      onClick={ () => toggleTodo && toggleTodo(todo.id, !todo.completed) }
    >
      <div className="flex flex-col sm:flex-row justify-start items-center gap-4 ">
        <div
          className={`
            flex p-2 rounded-md
            hover:bg-opacity-60
            ${ todo.completed ? 'bg-blue-100' : 'bg-red-100' }
          `}>
          {
            todo.completed
              ? <IoCheckboxOutline size={30} color="black" />
              : <IoSquareOutline size={30}  color="black" />
          }
        </div>
        <div className="text-center sm:text-left text-black">
          { todo.description }
        </div>
      </div>
    </div>
  )
};
