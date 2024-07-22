import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch employee details from an API
export const fetchEmployeeDetails = createAsyncThunk(
  "employee/fetchEmployeeDetails",
  async (employeeId) => {
    const response = await fetch(`/api/employee/${employeeId}`);
    const data = await response.json();
    return data;
  }
);

const initialState = {
  userDetails: {
    id: 5,
    name: "John Doe",
    role: "Senior Developer",
    email: "john.doe@example.com",
    skills: [
      { name: "Selenium", rating: 5 },
      { name: "Java", rating: 4 },
      { name: "BDD", rating: 3 },
    ],
  },
  hierarchy: {
    id: 1,
    name: "CEO",
    role: "Chief Executive Officer",
    children: [
      {
        id: 2,
        name: "CTO",
        role: "Chief Technology Officer",
        children: [
          {
            id: 3,
            name: "Engineering Manager",
            role: "Engineering Manager",
            children: [
              {
                id: 4,
                name: "Dev Team Lead",
                role: "Development Team Lead",
                children: [
                  { id: 5, name: "Senior Developer", role: "Senior Developer" },
                  { id: 6, name: "Junior Developer", role: "Junior Developer" },
                ],
              },
              {
                id: 7,
                name: "QA Team Lead",
                role: "QA Team Lead",
                children: [
                  {
                    id: 8,
                    name: "Senior QA Engineer",
                    role: "Senior QA Engineer",
                  },
                  {
                    id: 9,
                    name: "Junior QA Engineer",
                    role: "Junior QA Engineer",
                  },
                ],
              },
            ],
          },
          {
            id: 10,
            name: "DevOps Manager",
            role: "DevOps Manager",
            children: [
              {
                id: 11,
                name: "Senior DevOps Engineer",
                role: "Senior DevOps Engineer",
              },
              {
                id: 12,
                name: "Junior DevOps Engineer",
                role: "Junior DevOps Engineer",
              },
            ],
          },
        ],
      },
      {
        id: 13,
        name: "CFO",
        role: "Chief Financial Officer",
        children: [
          {
            id: 14,
            name: "Finance Manager",
            role: "Finance Manager",
            children: [
              { id: 15, name: "Accountant", role: "Accountant" },
              { id: 16, name: "Financial Analyst", role: "Financial Analyst" },
            ],
          },
        ],
      },
      {
        id: 17,
        name: "COO",
        role: "Chief Operating Officer",
        children: [
          {
            id: 18,
            name: "Operations Manager",
            role: "Operations Manager",
            children: [
              {
                id: 19,
                name: "Operations Coordinator",
                role: "Operations Coordinator",
              },
              {
                id: 20,
                name: "Logistics Specialist",
                role: "Logistics Specialist",
              },
            ],
          },
        ],
      },
    ],
  },
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    updateSkillRating: (state, action) => {
      const { skillName, rating } = action.payload;
      const skill = state.skills.find((skill) => skill.name === skillName);
      if (skill) {
        skill.rating = rating;
      } else {
        console.error(`Skill ${skillName} not found`);
      }
    },
  },
});

export const { updateSkillRating } = employeeSlice.actions;

export default employeeSlice.reducer;
