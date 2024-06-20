import React, { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc || !img) {
      alert("please set title and description and upload your flower img");
    }
    props.addTodo(title, desc, img);

    setTitle('');
    setDesc('');
    setImg(null);
  };

  const handleImageChange = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };


  return (
    <div className="AddTodoForm">
        <form onSubmit={submit}>
          <h3>Add Todo</h3>
          <div className="todoTitle">
            <label htmlFor="title" className="">
              Flower title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              className=""
              id="title"
            />
          </div>

          <div className="todoDescription">
            <label htmlFor="desc" className="">
              Flower description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              className=""
              id="desc"
            />
          </div>

          <div className="todoImg">
            <label htmlFor="img" className="">
              Flower Image
            </label>
            <input type="file" onChange={handleImageChange} />
          </div>
          <button type="submit" className="todoSubmitBtn">
            Submit
          </button>
        </form>
        </div>
  );
};

export default AddTodo;
