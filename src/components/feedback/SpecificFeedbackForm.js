import { Button, Form, Input,Radio } from "antd";

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

      <Radio.Group>
        <Radio value="Recruitment Process">Recruitment Process</Radio>
        <Radio value="First Day Experience">First Day Experience</Radio>
        <Radio value="Training Sessions">Training Sessions</Radio>
        <Radio value="Tools Provided">Tools Provided</Radio>
        <Radio value="Overall Experience">Overall Experience</Radio>
      </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input.TextArea rows={1} />
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
