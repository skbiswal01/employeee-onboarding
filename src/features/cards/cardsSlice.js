import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Q&A and FAQ",
    description: "Link to Q&A and FAQ Page",
    image: "faqImage", // Use a key to reference the image later
    link: "/faq",
  },
  {
    title: "Employment Details",
    description: "Link to Employment Details Page",
    image: "employmentDetailsImage", // Use a key to reference the image later
    link: "/employment-details",
  },
  {
    title: "Working Business Unit Details",
    description: "Link to Working BU Details Page",
    image: "workingBuDetailsImage", // Use a key to reference the image later
    link: "/working-bu-details",
  },
  {
    title: "Contribution",
    description: "Link to Contribution Page",
    image: "contributionImage", // Use a key to reference the image later
    link: "/contribution",
  },
  {
    title: "Feedback",
    description: "Link to Feedback Page",
    image: "feedbackImage",
    link: "/feedback",
  },
];

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {},
});

export const selectAllCards = (state) => state.cards;

export default cardsSlice.reducer;
