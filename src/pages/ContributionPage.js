import "../styles/ContributionPage.scss";

import ActionModal from "../components/contribution/ActionModal";
import { Layout } from "antd";
import ManagerActions from "../components/contribution/ManagerAction";
import React from "react";
import UploadResource from "../components/contribution/UploadResource";
import ViewResources from "../components/contribution/ViewResource";
import { useSelector } from "react-redux";

const ContributionPage = () => {
  const userRole = useSelector((state) => state.user.role); // Fetch user role from Redux store
  const userStatus = useSelector((state) => state.user.status);

  if (userStatus === "loading") {
    return <div>Loading...</div>;
  }

  //   if (userStatus === "failed") {
  //     return <div>Error loading user details</div>;
  //   }

  return (
    <Layout.Content className="contribution-page">
      <div className="contribution-container">
        <div className="scrollable-content">
          <h1 className="page-title">Contribution Page</h1>
          <div className="content-container">
            <div className="left-panel">
              <UploadResource />
              <ViewResources />
            </div>
            {userRole === "manager" && (
              <div className="right-panel">
                <ManagerActions />
              </div>
            )}
          </div>
          <ActionModal />
        </div>
      </div>
    </Layout.Content>
  );
};

export default ContributionPage;
