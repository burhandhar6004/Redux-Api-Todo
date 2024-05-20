import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodos, savTodo } from "./todoService";

const todoSlice = createSlice({
  name: "burhan",
  initialState: {
    allTodos: [],

    isLoading: false,
    isSuccess: false,
    isError: false,

    edit: {
      todos: {},
      isEdit: false,
    },
  },

  reducers: {
    // DELETE
    remove: (state, action) => {
      return {
        ...state,
        allTodos: state.allTodos.filter((item) => item._id !== action.payload),
      };
    },

   editTodo : (state, action)=>{
    return{
      ...state,
      edit:{
        todos : action.payload,
        isEdit : true,

      }
    }
   }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })

      .addCase(fetchData.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.allTodos = action.payload;
      })

      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })

      .addCase(removeTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })

      .addCase(removeTodo.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
      })

      .addCase(removeTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })

      .addCase(addTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })

      .addCase(addTodo.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.allTodos = [action.payload, ...state.allTodos];
      })

      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      })

      .addCase(updatetodo.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
      })

      .addCase(updatetodo.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.allTodos = state.allTodos.map(item => item._id === action.payload._id ? action.payload : item);
        state.edit = { todo :{}, isEdit:false}
      })

      .addCase(updatetodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
      });
  },
});

export const { remove, editTodo } = todoSlice.actions;
export default todoSlice.reducer;

export const fetchData = createAsyncThunk("FETCH/DATA", async () => {
  try {
    return await fetchTodos();
  } catch (error) {
    console.log(error);
  }
});

export const removeTodo = createAsyncThunk("REMOVE/TODO", async (id) => {
  try {
    return await deleteTodo(id);
  } catch (error) {
    console.log(error);
  }
});

export const addTodo = createAsyncThunk("ADD/TODO", async (formData) => {
  // console.log(formData);
  try {
    return await savTodo(formData);
  } catch (error) {
    console.log(error);
  }
});

export const updatetodo = createAsyncThunk("UPDATE/TODO", async(formData)=>{
  try {
    return await updatetodo(formData)
  } catch (error) {
    console.log(error);
  }
})
