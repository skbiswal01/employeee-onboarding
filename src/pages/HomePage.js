import "../styles/HomePage.scss";

import { Card, Col, Row } from "antd";

import { Link } from "react-router-dom";
import React from "react";
import contributionImage from "../assets/contribution.jpeg";
import employmentDetailsImage from "../assets/employment-details.png";
// Import images directly
import faqImage from "../assets/faq.jpeg";
import feedbackImage from "../assets/employee-feedback.jpeg";
import { selectAllCards } from "../features/cards/cardsSlice";
import { useSelector } from "react-redux";
import workingBuDetailsImage from "../assets/working-bu-details.jpeg";

// Map image keys to actual imports
const images = {
  faqImage,
  employmentDetailsImage,
  workingBuDetailsImage,
  contributionImage,
  feedbackImage,
};

const HomePage = () => {
  const cards = useSelector(selectAllCards);

  return (
    <div className="home-container">
      <div className="scrollable-content">
        <div className="hero-section">
          <h1>Welcome to Employee Onboarding</h1>
          <p>Streamline your onboarding process with ease and efficiency.</p>
        </div>
        <div className="card-container">
          <Row gutter={[16, 16]} justify="center">
            {cards.map((card, index) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={6}
                key={index}
                className="card-column"
              >
                <Link to={card.link} className="card-link">
                  <Card
                    className="glass-card"
                    title={card.title}
                    cover={
                      <img
                        alt={card.title}
                        src={images[card.image]}
                        className="card-image"
                      />
                    }
                  >
                    {card.description}
                  </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
