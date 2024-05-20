import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quote",
  initialState: {
    quoteData: null,
    isLoading: false,
    isSuccess: false,
    isError: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;

      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.isLoading = false;
        state.isError = false;
        state.quoteData = action.payload;


      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.isLoading = false;


      });
  },
});

export default quoteSlice.reducer;

export const fetchQuote = createAsyncThunk("FETCH/QUOTE", async () => {
  const response = await fetch("https://quotable.io/random");
  const data = await response.json();
  //   console.log(data);
  return data;
});
