import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addTodo, editTodo, remove, removeTodo } from "../feature/todo/todoSlice";

const ListItem = ({ todo }) => {
  // const { allTodos } = useSelector((state) => state.todos);

  const {isSuccess} = useSelector((state)=>state.todos)
  

  

  const dispatch = useDispatch();


  


const handleDelete = (id)=>{
  dispatch(removeTodo(id))
  if(isSuccess){
    dispatch(remove(id))
  }
}

 

  const handleEdit =(todo)=>{
    dispatch(editTodo(todo))
  }

  return (
    <>
      <li className="list-group-item mt-2 rounded-0">
        <h1 className="display-6">
          {todo.title} <br />
          {todo.description}
          <span className="float-end">
            <button
              className="btn btn-warning btn-sm mx-2"
              onClick={() => handleEdit(todo)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm mx-2"
              onClick={()=>handleDelete(todo._id)}
            >
              Delete
            </button>
          </span>
        </h1>
      </li>
    </>
  );
};

export default ListItem;
