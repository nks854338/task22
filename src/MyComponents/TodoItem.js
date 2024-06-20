import React from "react";

export const TodoItem = ({ todo, onDelete}) => {
  return (
    <div className="box">
      <div className="card">
        <div className="imgBox">
        <img src={todo.img} />
        </div>
        <div className="infoBox">
        <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="deleteBtn" onClick={()=>{onDelete(todo)}}>Delete</button><hr/>
      </div>
      </div>
    </div>
  )
}
