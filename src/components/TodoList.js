import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos,toggleTodo,deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && <li className="list-item">No Items</li>}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
