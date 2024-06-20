import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("i am onDelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodo = (title, desc, img) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      img: img,
    };

    setTodos([...todos, myTodo]);

    if(localStorage.getItem("todos")){
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Lotus",
      desc: "Sacred, aquatic plant; symbolic purity.",
      img: "./images/1.jpg",
    },
    {
      sno: 2,
      title: "Daisy",
      desc: "Simple, white petals; sunny center.",
      img:"./images/2.jpg",
    },
    {
      sno: 3,
      title: "Jasmine",
      desc: "Sweet, fragrant; night-blooming flowers.",
      img:"./images/3.jpg",
    },
    {
      sno: 4,
      title: "Geranium",
      desc: "Bright, clustered blooms; hardy plant.",
      img:"./images/4.jpg",
    },
    {
      sno: 5,
      title: "Tulip",
      desc: "White Tulip: Pure, Elegant, Serene, Graceful",
      img: "./images/5.jpg",
    },
    {
      sno: 6,
      title: "Peony",
      desc: "Lush, multi-petaled; richly fragrant.",
      img:"./images/6.jpg",
    },
  ]);

  return (
    <>
      <Header />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
