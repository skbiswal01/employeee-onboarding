import "../styles/FAQPage.scss";

import { Alert, Collapse, Input, Spin, Pagination, Form, Button, Select, Tag } from "antd";
import React, { useEffect, useState } from "react";
import {
  fetchFaqs,
  selectAllFaqs,
  selectFaqError,
  selectFaqStatus,
} from "../features/faq/faqSlice";
import { useDispatch, useSelector } from "react-redux";

const { Panel } = Collapse;
const { Search } = Input;
const { Option } = Select;

const FAQPage = () => {
  const dispatch = useDispatch();
  const faqs = useSelector(selectAllFaqs);
  const faqStatus = useSelector(selectFaqStatus);
  const faqError = useSelector(selectFaqError);

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [form] = Form.useForm();
  const pageSize = 5;

  useEffect(() => {
    if (faqStatus === "idle") {
      dispatch(fetchFaqs());
    }
  }, [faqStatus, dispatch]);

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const currentFaqs = filteredFaqs.slice(startIndex, startIndex + pageSize);

  const onFinish = (values) => {
    console.log("Form Values:", values);
    // Handle form submission logic here
  };

  const getStatusTagColor = (status) => {
    switch (status) {
      case 'new':
        return 'blue';
      case 'in progress':
        return 'yellow';
      case 'completed':
        return 'green';
      default:
        return 'gray';
    }
  };

  let content;

  if (faqStatus === "loading") {
    content = <Spin size="large" />;
  } else if (faqStatus === "succeeded") {
    content = (
      <>
        <Collapse accordion className="faq-collapse">
          {currentFaqs.map((faq, index) => (
            <Panel header={faq.question} key={index} className="faq-panel">
              <p>{faq.answer}</p>
              <Tag color={getStatusTagColor(faq.status)}>{faq.status}</Tag>
            </Panel>
          ))}
        </Collapse>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={filteredFaqs.length}
          onChange={handlePageChange}
          showSizeChanger={false}
          className="pagination"
        />
      </>
    );
  } else if (faqStatus === "failed") {
    content = (
      <Alert message="Error" description={faqError} type="error" showIcon />
    );
  }

  return (
    <div className="faq-container">
      <div className="scrollable-content">
        <div className="hero-section">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about the onboarding process.</p>
        </div>
        <div className="search-container">
          <Search
            placeholder="Search FAQs"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 400 }}
          />
        </div>
        <div className="faq-content">{content}</div>
        <div className="faq-form-container">
          <Form form={form} onFinish={onFinish} layout="vertical">
            <Form.Item name="category" label="Category" rules={[{ required: true }]}>
              <Select placeholder="Select a category">
                <Option value="general">Buddy Mentor</Option>
                <Option value="technical">Line Manager</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item name="subject" label="Subject" rules={[{ required: true }]}>
              <Input placeholder="Enter the subject" />
            </Form.Item>
            <Form.Item name="question" label="Question" rules={[{ required: true }]}>
              <Input.TextArea rows={4} placeholder="Enter your question" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;



