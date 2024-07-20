import { Card, Col, Row } from "antd";

import { Link } from "react-router-dom";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col span={8}>
          <Link to="/faq">
            <Card title="Q&A and FAQ">Link to Q&A and FAQ Page</Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/employment-details">
            <Card title="Employment Details">
              Link to Employment Details Page
            </Card>
          </Link>
        </Col>
        <Col span={8}>
          <Link to="/working-bu-details">
            <Card title="Working Business Unit Details">
              Link to Working BU Details Page
            </Card>
          </Link>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={8}>
          <Link to="/contribution">
            <Card title="Contribution">Link to Contribution Page</Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
