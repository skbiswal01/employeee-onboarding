// src/features/businessUnit/businessUnitSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unitStructure: [
    {
      id: 1,
      name: "BCB (Unit)",
      role: "Unit",
      children: [
        {
          id: 2,
          name: "Platform 1",
          role: "Platform",
          children: [
            {
              id: 3,
              name: "Lab 1",
              role: "Lab",
              children: [
                {
                  id: 4,
                  name: "Feature Team 1",
                  role: "Feature Team",
                  children: [
                    { id: 5, name: "John Doe", role: "Developer" },
                    { id: 6, name: "Employee 2", role: "Tester" },
                  ],
                },
                { id: 7, name: "Section 1", role: "Section" },
              ],
            },
          ],
        },
        {
          id: 8,
          name: "Platform 2",
          role: "Platform",
          children: [
            { id: 9, name: "Lab 2", role: "Lab" },
            { id: 10, name: "Feature Team 2", role: "Feature Team" },
          ],
        },
        {
          id: 11,
          name: "Platform 3",
          role: "Platform",
          children: [
            { id: 12, name: "Lab 3", role: "Lab" },
            { id: 13, name: "Feature Team 3", role: "Feature Team" },
          ],
        },
        { id: 14, name: "Platform 4", role: "Platform" },
      ],
    },
  ],
  ktModes: [
    {
      mode: "Online sessions",
      link: "http://dummy-link.com",
      poc: "dummy@email.com",
    },
    {
      mode: "Self-paced",
      link: "http://dummy-link.com",
    },
  ],
  trainingStatusLink: "http://dummy-link.com",
};

const businessUnitSlice = createSlice({
  name: "businessUnit",
  initialState,
  reducers: {},
});

export default businessUnitSlice.reducer;
