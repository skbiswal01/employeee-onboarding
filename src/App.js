import "./styles/global.scss";

import { Layout, Result } from "antd";
import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import BusinessUnitPage from "./pages/BusinessUnitPage";
import ContributionPage from "./pages/ContributionPage";
import EmployeeDetailsPage from "./pages/EmployeeDetailsPage";
import ErrorBoundary from "./components/error/ErrorBoundary";
import FAQPage from "./pages/FAQPage";
import FeedbackPage from "./pages/Feedback";
import Header from "./components/header/Header";
import HomePage from "./pages/HomePage";
import { fetchUserDetails } from "./features/user/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const userStatus = useSelector((state) => state.user.status);

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUserDetails());
    }
  }, [userStatus, dispatch]);
  return (
    <Router>
      <Layout>
        <Header />
        <Layout.Content style={{ padding: 0, marginTop: 64 }}>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route
                path="/employment-details"
                element={<EmployeeDetailsPage />}
              />
              <Route
                path="/working-bu-details"
                element={<BusinessUnitPage />}
              />
              <Route path="/contribution" element={<ContributionPage />} />
              <Route path="/feedback" element={<FeedbackPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </Layout.Content>
      </Layout>
    </Router>
  );
};

const NotFoundPage = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
    />
  );
};

export default App;
