import "../../styles/FeedbackPage.scss";

import GeneralFeedbackForm from "./GeneralFeedbackForm";
import React from "react";
import SpecificFeedbackForm from "./SpecificFeedbackForm";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const FeedbackTabs = () => {
  return (
    <div className="feedback-container">
      <div className="scrollable-content">
        <div className="hero-section">
          <h1>Feedback</h1>
          <p>We value your feedback. Please let us know how we can improve.</p>
        </div>
        <div className="tabs-container">
          <Tabs defaultActiveKey="1">
            <TabPane tab="General Feedback" key="1">
              <GeneralFeedbackForm />
            </TabPane>
            <TabPane tab="Specific Feedback" key="2">
              <SpecificFeedbackForm />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FeedbackTabs;
