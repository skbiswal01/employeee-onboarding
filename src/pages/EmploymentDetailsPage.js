import { Button, Form, Input, Upload } from "antd";

import React from "react";

const EmploymentDetailsPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item label="Photo Upload" name="photo">
        <Upload>
          <Button>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: "Please input your role!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Skills"
        name="skills"
        rules={[{ required: true, message: "Please input your skills!" }]}
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

export default EmploymentDetailsPage;
