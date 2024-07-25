import { Button, Card, Form, Input, Select, Upload, message } from "antd";
import React, { useState } from "react";

import { UploadOutlined } from "@ant-design/icons";
import { uploadResource } from "../../features/contribution/contributionSlice";
import { useDispatch } from "react-redux";

const { Option } = Select;

const UploadResource = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const [fileList, setFileList] = useState([]);

  const onFinish = (values) => {
    const resource = { ...values, file: fileList[0] };
    dispatch(uploadResource(resource))
      .then(() => {
        message.success("Resource uploaded successfully!");
        form.resetFields();
        setFileList([]);
      })
      .catch(() => {
        message.error("Failed to upload resource");
      });
  };

  const handleUploadChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <Card title="Upload Resource" className="upload-card">
      <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please select a category" }]}
        >
          <Select placeholder="Select a category" onClick={stopPropagation}>
            <Option value="Category1">Business Unit</Option>
            <Option value="Category2">Platform</Option>
            <Option value="Category3">Lab</Option>
            <Option value="Category3">Feature Team</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="category"
          label="File Type"
          rules={[{ required: true, message: "Please select a File Type" }]}
        >
          <Select placeholder="Select a category" onClick={stopPropagation}>
            <Option value="Category1">Link</Option>
            <Option value="Category2">Video</Option>
            <Option value="Category3">Image</Option>
            <Option value="Category3">Document</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="file"
          label="File"
          rules={[{ required: true, message: "Please upload a file" }]}
        >
          <Upload
            fileList={fileList}
            beforeUpload={() => false}
            onChange={handleUploadChange}
            onClick={stopPropagation}
          >
            <Button icon={<UploadOutlined />}>Select File</Button>
          </Upload>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Upload
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default UploadResource;
