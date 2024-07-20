import { Layout, Result } from "antd";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ContributionPage from "./pages/ContributionPage";
import EmploymentDetailsPage from "./pages/EmploymentDetailsPage";
import ErrorBoundary from "./components/error/ErrorBoundary"; // Updated import path
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import React from "react";
import WorkingBusinessUnitPage from "./pages/WorkingBusinessUnitPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Layout.Header>{/* Header content */}</Layout.Header>
        <Layout.Content>
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route
                path="/employment-details"
                element={<EmploymentDetailsPage />}
              />
              <Route
                path="/working-bu-details"
                element={<WorkingBusinessUnitPage />}
              />
              <Route path="/contribution" element={<ContributionPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </ErrorBoundary>
        </Layout.Content>
        <Layout.Footer>{/* Footer content */}</Layout.Footer>
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
