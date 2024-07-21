import cardsReducer from "../features/cards/cardsSlice";
import { configureStore } from "@reduxjs/toolkit";
import faqReducer from "../features/faq/faqSlice";

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    faq: faqReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
