import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch quotes
export const fetchQuote = createAsyncThunk("quotes/fetchQuote", async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data;
});

const quotesSlice = createSlice({
  name: "quotes",
  initialState: {
    quote: "",
    author: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.quote = action.payload.content;
        state.author = action.payload.author;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default quotesSlice.reducer;
