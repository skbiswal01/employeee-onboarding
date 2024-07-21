import { Button, Form, Input } from "antd";

import React from "react";

const WorkingBusinessUnitPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        label="Business Unit"
        name="businessUnit"
        rules={[
          { required: true, message: "Please input your business unit!" },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Platform"
        name="platform"
        rules={[{ required: true, message: "Please input your platform!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lab"
        name="lab"
        rules={[{ required: true, message: "Please input your lab!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Team"
        name="team"
        rules={[{ required: true, message: "Please input your team!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Required Skills"
        name="requiredSkills"
        rules={[{ required: true, message: "Please input required skills!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default WorkingBusinessUnitPage;
