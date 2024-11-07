"use client";

import { Todo } from "@prisma/client";
import { Activity } from "../components";
import { UpdateTodo, CreateTodo, DeleteTodo } from "../serverActions";
import React, { useState } from "react";

interface Props {
  todos?: Todo[];
}

export const GridTodos = ({ todos = [] }: Props) => {
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const [message, setMessage] = useState('');

  const toggleTodo = async (id: string, completed: boolean) => {
    const updatedTodo = await UpdateTodo(id, completed);
    if (updatedTodo) {
      setMessage('Todo updated successfully');
    } else {
      setMessage('There was an error, please try again');
    }
  };

  const deleteTodo = async (id: string) => {
    const deleteTodo = await DeleteTodo(id);
    if(deleteTodo === 'Todo deleted successfully') {
      setMessage(deleteTodo);
    } else {
      setMessage('There was an error, please try again');
    } 
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const answer = await CreateTodo(description, completed);
    if(answer === 'Todo created succesfull') {
      setMessage(answer);
      setDescription("");
      setCompleted(false);
    }else {
      setMessage('There was an error, please try again');
      setDescription("");
      setCompleted(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-4 bg-white shadow-md rounded-md mb-8"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Completed
          </label>
          <div className="flex items-center mb-2">
            <input
              id="completed-true"
              type="radio"
              name="completed"
              value="true"
              checked={completed === true}
              onChange={() => setCompleted(true)}
              className="mr-2 leading-tight"
            />
            <label htmlFor="completed-true" className="text-gray-700">
              Yes
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="completed-false"
              type="radio"
              name="completed"
              value="false"
              checked={completed === false}
              onChange={() => setCompleted(false)}
              className="mr-2 leading-tight"
            />
            <label htmlFor="completed-false" className="text-gray-700">
              No
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Todo
          </button>
        </div>
        <h3 className="mt-4 text-red-500">{message}</h3>
      </form>
      <div className="w-4/5 mx-auto flex flex-wrap gap-6">
        {todos &&
          todos.map((todo) => (
            <Activity key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
          ))}
      </div>
    </div>
  );
};