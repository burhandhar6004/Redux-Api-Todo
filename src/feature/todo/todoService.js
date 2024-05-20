import axios from "axios";

export const fetchTodos = async () => {
  const response = await axios.get("/api/todo");
  // console.log(response);
  return response.data;
};

export const deleteTodo = async (id) => {
  const response = await axios.delete("/api/todo/" + id);
  return response.data;
//   console.log(response.data);
};

export const savTodo = async(formData)=>{
    const response = await axios.post("/api/todo/" , formData)
    // console.log(response.data);
    return response.data;
}


export const update = async(formData) =>{
  console.log(formData);
  const response = await axios.put("api/todo/" + formData.id, formData);
  // return response.data;
}
