import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
      {props.todos.length === 0? "No item is present": 
        props.todos.map((todo) => {
          <div></div>
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
          }
    </div>
  )
}
