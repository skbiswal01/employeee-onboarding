import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actionsNeeded: [
    {
      id: 1,
      title: "Resource1",
      description: "Description1",
      uploadedBy: "Employee1",
      category: "Category1",
      file: "link-to-file1",
    },
    {
      id: 2,
      title: "Resource2",
      description: "Description2",
      uploadedBy: "Employee2",
      category: "Category2",
      file: "link-to-file2",
    },
  ],
  selectedAction: null,
};

const managerSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
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
    setSelectedAction: (state, action) => {
      state.selectedAction = action.payload;
    },
    clearSelectedAction: (state) => {
      state.selectedAction = null;
    },
  },
});

export const {
  approveResource,
  rejectResource,
  setSelectedAction,
  clearSelectedAction,
} = managerSlice.actions;

export default managerSlice.reducer;
