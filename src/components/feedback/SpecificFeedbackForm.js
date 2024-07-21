import { Button, Checkbox, Form, Input } from "antd";

import React from "react";

const SpecificFeedbackForm = () => {
  const onFinish = (values) => {
    console.log("Specific Feedback:", values);
  };

  return (
    <Form name="specific-feedback" layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Specific Aspects"
        name="aspects"
        rules={[{ required: true, message: "Please select specific aspects!" }]}
      >
        <Checkbox.Group>
          <Checkbox value="Recruitment Process">Recruitment Process</Checkbox>
          <Checkbox value="First Day Experience">First Day Experience</Checkbox>
          <Checkbox value="Training Sessions">Training Sessions</Checkbox>
          <Checkbox value="Tools Provided">Tools Provided</Checkbox>
          <Checkbox value="Overall Experience">Overall Experience</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item
        label="Feedback"
        name="feedback"
        rules={[{ required: true, message: "Please provide your feedback!" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SpecificFeedbackForm;
