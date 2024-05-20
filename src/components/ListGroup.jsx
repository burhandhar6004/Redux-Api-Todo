import React, { useEffect } from "react";
import ListItem from "./ListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../feature/todo/todoSlice";

const ListGroup = () => {
  const { allTodos, isLoading, isSuccess, isError } = useSelector(
    (state) => state.todos
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  if (isLoading) {
    return (
      <h1 className="display-6 text-center text-warning">
        <div class="spinner-border text-info" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </h1>
    );
  }

  if (isError) {
    return (
      <h1 className="display-6 text-center text-danger">
        SomeThing went wrong
      </h1>
    );
  }

  if (allTodos.length === 0) {
    return (
      <h1 className="display-6 text-center text-warning">NO TODOS HERE</h1>
    );
  }

  return (
    <>
      <ul className="list-group p-5">
        {allTodos?.map((todo) => (
          <ListItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
