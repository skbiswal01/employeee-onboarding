import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "Employment Details",
    description: "View the organization chart and skillset for your role",
    image: "employmentDetailsImage", // Use a key to reference the image later
    link: "/employment-details",
  },
  {
    title: "Business Unit",
    description: "View unit to feature team structure with essential onboarding resources",
    image: "workingBuDetailsImage", // Use a key to reference the image later
    link: "/working-bu-details",
  },
  {
    title: "Contribution",
    description: "Add unit, platform, lab, or team resources seamlessly",
    image: "contributionImage", // Use a key to reference the image later
    link: "/contribution",
  },
  {
    title: "Q&A and FAQ",
    description: "Ask questions to your buddy, mentor, manager, or any employee",
    image: "faqImage", // Use a key to reference the image later
    link: "/faq",
  },
  {
    title: "Feedback",
    description: "A one stop place to provide feedback",
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
