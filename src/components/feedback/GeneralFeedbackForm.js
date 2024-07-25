import { Alert, Button, Form, Input, Spin, Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { submitFeedback } from "../../features/feedback/feedbackSlice";

const { Option } = Select;

const GeneralFeedbackForm = () => {
  const dispatch = useDispatch();
  const feedbackStatus = useSelector((state) => state.feedback?.status);
  const feedbackError = useSelector((state) => state.feedback?.error);

  const onFinish = (values) => {
    dispatch(submitFeedback(values));
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Form name="general-feedback" layout="vertical" onFinish={onFinish}>
      <Form.Item
        name="category"
        label="Name"
        rules={[{ required: true, message: "Please select name" }]}
      >
        <Select placeholder="Select a name" onClick={stopPropagation}>
          <Option value="Category1">Buddy Mentor</Option>
          <Option value="Category2">Line Manager</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Feedback"
        name="feedback"
        rules={[{ required: true, message: "Please provide your feedback!" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        {feedbackStatus === "loading" && <Spin />}
        {feedbackStatus === "failed" && (
          <Alert
            message="Error"
            description={feedbackError}
            type="error"
            showIcon
          />
        )}
        <Button
          type="primary"
          htmlType="submit"
          disabled={feedbackStatus === "loading"}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GeneralFeedbackForm;
