import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../styles/about-section.css";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Room rent service</h2>
              <p className="section__description">
                Welcome to our website for booking rooms! We are a group of enthusiastic people 
                who are committed to giving you cozy, budget-friendly lodging for your transient 
                visits. Whether you're a student, traveler, or just need a temporary living place, 
                our aim is to make your stay seamless and stress-free.

                Our platform provides a wide selection of rooms to accommodate various requirements 
                and tastes. We offer solutions for every budget and lifestyle, from comfortable private 
                rooms to roomy shared flats. Our houses are situated in excellent areas with quick access 
                to restaurants, public transit, and other amenities.

                We at our room rental website are committed to offering the best possible client service. 
                If you have any questions or issues, our team is here to help you at any time. To guarantee 
                that your stay is comfortable and hygienic, we also make sure that our properties are 
                well-maintained and cleaned frequently.

                We appreciate you considering us for your temporary housing needs. We sincerely hope you enjoy 
                your time with us, and we can't wait to have you stay with us soon!
              </p>

            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src="https://www.thespruce.com/thmb/Yaz6mR23IBvAPvkviKYi1N6clLU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PAinteriors-7-cafe9c2bd6be4823b9345e591e4f367f.jpg" alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
