import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

// Dummy async function to simulate fetching data
export const fetchFaqs = createAsyncThunk("faq/fetchFaqs", async () => {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          question: "What is Employee Onboarding?",
          answer:
            "Employee onboarding is the process of integrating new employees into the organization and its culture.",
        },
        {
          question: "How long does the onboarding process take?",
          answer:
            "The onboarding process typically takes between one to three months, depending on the role and company.",
        },
        {
          question: "What documents are needed for onboarding?",
          answer:
            "Common documents include identification, tax forms, employment contracts, and direct deposit information.",
        },
        {
          question: "Who will be my point of contact during onboarding?",
          answer:
            "Your assigned HR representative or manager will be your main point of contact.",
        },
        {
          question: "What should I wear on my first day?",
          answer:
            "You should wear business casual attire unless otherwise specified by your HR representative.",
        },
        {
          question: "Will I receive training during onboarding?",
          answer:
            "Yes, training is a key component of onboarding to help you understand your role and the company's processes.",
        },
        {
          question: "How do I access the company's intranet?",
          answer:
            "Access instructions will be provided during your IT orientation session.",
        },
        {
          question: "What is the company's policy on remote work?",
          answer:
            "The company's remote work policy will be covered during your onboarding orientation.",
        },
        {
          question: "How do I enroll in benefits?",
          answer:
            "Benefits enrollment information and instructions will be provided by the HR department during onboarding.",
        },
        {
          question: "When will I receive my first paycheck?",
          answer:
            "Paycheck schedules and details will be explained during your HR orientation session.",
        },
        {
          question: "What are the company's core values?",
          answer:
            "The company's core values will be discussed during your onboarding orientation and are also available on the company's intranet.",
        },
        {
          question: "Who do I contact for IT support?",
          answer:
            "IT support contact details will be provided during your IT orientation.",
        },
        {
          question: "What is the company's vacation policy?",
          answer:
            "Vacation policies will be covered during your HR orientation and are available in the employee handbook.",
        },
        {
          question: "Are there opportunities for professional development?",
          answer:
            "Yes, the company offers various professional development programs which will be introduced during your onboarding.",
        },
        {
          question: "How do I access my work email?",
          answer:
            "Instructions for accessing your work email will be provided during your IT orientation.",
        },
        {
          question: "What is the company's policy on dress code?",
          answer:
            "The company's dress code policy will be covered during your HR orientation.",
        },
        {
          question: "Will I have a mentor or buddy during onboarding?",
          answer:
            "Yes, you will be assigned a mentor or buddy to help you navigate the onboarding process.",
        },
        {
          question: "How do I submit expenses for reimbursement?",
          answer:
            "Expense submission procedures will be explained during your HR orientation and are available on the company's intranet.",
        },
        {
          question: "What are the working hours?",
          answer:
            "Standard working hours and any flexible working arrangements will be discussed during your onboarding orientation.",
        },
        {
          question: "How do I request time off?",
          answer:
            "Time-off request procedures will be explained during your HR orientation and are available on the company's intranet.",
        },
        {
          question: "What is the company's policy on social media use?",
          answer:
            "The company's social media policy will be covered during your HR orientation and is available in the employee handbook.",
        },
        {
          question: "Where can I find the employee handbook?",
          answer:
            "The employee handbook is available on the company's intranet and will be provided during your HR orientation.",
        },
        {
          question: "How do I set up direct deposit for my paycheck?",
          answer:
            "Direct deposit setup instructions will be provided during your HR orientation.",
        },
        {
          question: "Who do I contact if I have questions about my role?",
          answer:
            "Your manager or HR representative will be your main point of contact for role-related questions.",
        },
        {
          question: "What are the company's expectations for performance?",
          answer:
            "Performance expectations will be discussed during your onboarding orientation and regular check-ins with your manager.",
        },
      ]);
    }, 1000);
  });
  return response;
});

const faqSlice = createSlice({
  name: "faq",
  initialState: {
    faqs: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFaqs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.faqs = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllFaqs = (state) => state.faq.faqs;
export const selectFaqStatus = (state) => state.faq.status;
export const selectFaqError = (state) => state.faq.error;

export default faqSlice.reducer;
