import businessUnitReducer from "../features/businessUnit/businessUnitSlice";
import cardsReducer from "../features/cards/cardsSlice";
import { configureStore } from "@reduxjs/toolkit";
import contributionReducer from "../features/contribution/contributionSlice";
import employeeReducer from "../features/employee/employeeSlice";
import faqReducer from "../features/faq/faqSlice";
import managerReducer from "../features/contribution/managerSlice";
import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    cards: cardsReducer,
    faq: faqReducer,
    contribution: contributionReducer,
    user: userReducer,
    manager: managerReducer,
    employee: employeeReducer,
    businessUnit: businessUnitReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
