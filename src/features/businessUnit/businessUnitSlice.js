// src/features/businessUnit/businessUnitSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unitStructure: [
    {
      id: 1,
      name: "BCB",
      role: "Business And Commercial Banking",
      children: [
        {
          id: 2,
          name: "Commercial Lending Platform (CLP)",
          role: "Dominic Adams",
          children: [
            {
              id: 3,
              name: "Commercial Cards",
              role: "Lab",
              children: [
                {
                  id: 4,
                  name: "Feature Team 1",
                  role: "Feature Team 1",
                  children: [
                    { id: 5, name: "John Doe", role: "Developer" },
                    { id: 6, name: "Buddy Mentor", role: "Developer" },
                  ],
                },
                { id: 7, name: "Feature Team 2", role: "Feature Team 2" },
              ],
            },
            {
              id: 15,
              name: "Core Lending Servicing",
              role: "Lab",
              children: [
                {
                  id: 10,
                  name: "Feature Team 1",
                  role: "Feature Team 1",
                  // children: [
                  //   { id: 12, name: "John Doe", role: "Developer" },
                  //   { id: 13, name: "Buddy Mentor", role: "Developer" },
                  // ],
                },
                { id: 7, name: "Feature Team 2", role: "Feature Team" },
              ],
            },
            {
              id: 16,
              name: "Term Lending & Overdrafts",
              role: "Lab",
              children: [
                {
                  id: 10,
                  name: "Feature Team 1",
                  role: "Feature Team 1",
                  // children: [
                  //   { id: 12, name: "John Doe", role: "Developer" },
                  //   { id: 13, name: "Buddy Mentor", role: "Developer" },
                  // ],
                },
                { id: 7, name: "Feature Team 2", role: "Feature Team" },
              ],
            },
            {
              id: 17,
              name: "Asset & Invoice Finance",
              role: "Lab",
              children: [
                {
                  id: 10,
                  name: "Feature Team 1",
                  role: "Feature Team 1",
                  // children: [
                  //   { id: 12, name: "John Doe", role: "Developer" },
                  //   { id: 13, name: "Buddy Mentor", role: "Developer" },
                  // ],
                },
                { id: 7, name: "Feature Team 2", role: "Feature Team" },
              ],
            },
          ],
        },
        {
          id: 8,
          name: "Client data & Analytics (CD&A)",
          role: "Ashish Jain",
        },
        {
          id: 11,
          name: "Client Servicing & Engagement (CS&E)",
          role: "Alexander Moores",
        },
        { id: 14, name: "Cash Management & Payments (CMP)", role: "Nigel Ingram" },
      ],
    },
  ],
  ktModes: [
    {
      key: '1',
      moduleName: "All About Lloyds Technology Center",
      mode: "In Person",
      trainer: "Prachi",
      duration: "1 hr",
      supportingMaterial: "Confluence",
    },
    {
      key: '2',
      moduleName: "BUs and Platforms",
      mode: "Link",
      trainer: "Krishna",
      duration: "0.5 hr",
      supportingMaterial: "Drive",
    },
    {
      key: '3',
      moduleName: "Team Structure",
      mode: "Link",
      trainer: "Ayesha",
      duration: "0.5 hr",
      supportingMaterial: "SharePoint",
    },
    {
      key: '4',
      moduleName: "Platform Architecture",
      mode: "In Person",
      trainer: "Likhitha",
      duration: "3 hr",
      supportingMaterial: "Confluence",
    },
    {
      key: '5',
      moduleName: "Roadmap",
      mode: "Link",
      trainer: "Keerthi",
      duration: "0.5 hr",
      supportingMaterial: "Confluence",
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


