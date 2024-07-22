import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resources: [],
  actionsNeeded: [],
};

const contributionSlice = createSlice({
  name: "contribution",
  initialState,
  reducers: {
    uploadResource: (state, action) => {
      state.resources.push(action.payload);
    },
    addActionNeeded: (state, action) => {
      state.actionsNeeded.push(action.payload);
    },
    approveResource: (state, action) => {
      const index = state.actionsNeeded.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.actionsNeeded.splice(index, 1);
      }
    },
    rejectResource: (state, action) => {
      const index = state.actionsNeeded.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.actionsNeeded.splice(index, 1);
      }
    },
    fetchResources: (state, action) => {
      state.resources = action.payload;
    },
  },
});

export const {
  uploadResource,
  addActionNeeded,
  approveResource,
  rejectResource,
  fetchResources,
} = contributionSlice.actions;

export default contributionSlice.reducer;
