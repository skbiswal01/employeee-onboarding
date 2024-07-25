// LineManagerDetails.js
import React from "react";
import { Card } from "antd";
import "./LineManagerDetails.scss"; // Ensure to import the CSS file

const LineManagerDetails = ({ manager }) => {
  if (!manager) {
    return null;
  }

  return (
    <Card
      className="line-manager-card-unique"
      title={
        <span className="line-manager-title-unique">Line Manager Details</span>
      }
    >
      <div className="line-manager-details-unique">
        <p>Name: {manager.name}</p>
        <p>Email: {manager.email}</p>
        <p>Role: {manager.role}</p>
      </div>
    </Card>
  );
};

export default LineManagerDetails;
