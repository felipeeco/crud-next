import { Todo } from '@prisma/client';
import styles from './Activity.module.css';
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5';

interface Props {
  todo: Todo,
  toggleTodo: (id: string, complete: boolean) => Promise<Todo|void>,
  deleteTodo: (id: string) => Promise<void>
}

export const Activity = ({ todo, toggleTodo, deleteTodo }: Props) => {
  return (
    <div className={ `${todo.completed ? styles.todoDone : styles.todoPending} cursor-pointer relative` } 
      onClick={ () => toggleTodo && toggleTodo(todo.id, !todo.completed) }
    >
      <div className="flex flex-col sm:flex-row justify-start items-center mb-10">
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
      <button 
        className="absolute bottom-2 right-2 mb-2 p-1 bg-red-500 text-white rounded-md text-xs hover:bg-red-700"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </div>
  )
};