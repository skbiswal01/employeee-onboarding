import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch user details
export const fetchUserDetails = createAsyncThunk(
  "user/fetchUserDetails",
  async () => {
    const response = await fetch("/api/userDetails"); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Failed to fetch user details");
    }
    const data = await response.json();
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    role: "manager",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.name = action.payload.name;
        state.role = action.payload.role;
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
