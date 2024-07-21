import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Thunk to handle submitting feedback
export const submitFeedback = createAsyncThunk(
  "feedback/submitFeedback",
  async (feedbackData, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/submitFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(feedbackData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitFeedback.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitFeedback.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(submitFeedback.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default feedbackSlice.reducer;
