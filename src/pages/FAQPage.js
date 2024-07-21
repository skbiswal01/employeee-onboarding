import "../styles/FAQPage.scss";

import { Alert, Collapse, Input, Spin } from "antd";
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

const FAQPage = () => {
  const dispatch = useDispatch();
  const faqs = useSelector(selectAllFaqs);
  const faqStatus = useSelector(selectFaqStatus);
  const faqError = useSelector(selectFaqError);

  const [searchTerm, setSearchTerm] = useState("");

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

  let content;

  if (faqStatus === "loading") {
    content = <Spin size="large" />;
  } else if (faqStatus === "succeeded") {
    content = (
      <Collapse accordion className="faq-collapse">
        {filteredFaqs.map((faq, index) => (
          <Panel header={faq.question} key={index} className="faq-panel">
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
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
      </div>
    </div>
  );
};

export default FAQPage;
