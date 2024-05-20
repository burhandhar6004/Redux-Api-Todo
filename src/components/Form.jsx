import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updatetodo } from "../feature/todo/todoSlice";

const Form = () => {
  const { edit } = useSelector((state) => state.todos);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(edit.isEdit){
      dispatch(updatetodo({
        id : edit.todos._id,
        title,
        description,
      }))
    }else{
      dispatch(addTodo({ title, description }));
    }

    setDescription("");
    setTitle("");
  };

  useEffect(() => {
    setTitle(edit.todos.title);
    setDescription(edit.todos.description);
  },[edit]);

  return (
    <>
      <form className="p-5" onSubmit={handleSubmit}>
        <input
          className="form-control w-100 rounded-0 "
          placeholder="Enter Text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="form-control w-100 rounded-0 mt-2 "
          placeholder="Enter Tittle"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button className="btn btn-success w-100 mt-2 rounded-0">
          Save Todo
        </button>
      </form>
    </>
  );
};

export default Form;
