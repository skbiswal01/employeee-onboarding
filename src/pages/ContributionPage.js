import { Button, Form, Input, Upload } from "antd";

import React from "react";

const ContributionPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input the title!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input the description!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="File Upload" name="file">
        <Upload>
          <Button>Click to Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContributionPage;
