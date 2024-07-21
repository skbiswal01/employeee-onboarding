import { Button, Form, Input } from 'antd';

import React from 'react';

const SurveysPollsForm = () => {
  const onFinish = (values) => {
    console.log('Surveys and Polls:', values);
  };

  return (
    <Form name="surveys-polls" layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Survey Question"
        name="surveyQuestion"
        rules={[{ required: true, message: 'Please answer the survey question!' }]}
      >
        <Input.TextArea rows={2} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SurveysPollsForm;