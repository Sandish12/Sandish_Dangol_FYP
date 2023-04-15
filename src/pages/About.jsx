import React from "react";

import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";


import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      {/* <CommonSection title="About Us" /> */}
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={""} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Small message to our renters
                </h2>

                <p className="section__description">
                Dear Room Renters,

                We hope this message finds you well and that you're settling into your new space comfortably. We understand that finding a temporary living space can be challenging, and we're thrilled that you chose us to provide you with a comfortable and affordable accommodation.

                We take pride in offering a wide range of room options to fit your unique needs and preferences. Whether you're here for work, school, or travel, our goal is to create a welcoming and stress-free environment that you can call home. We want you to feel comfortable and at ease during your stay, and we're always here to assist you with anything you may need.

                Please don't hesitate to reach out to us if you have any questions or concerns. Our team is available around the clock to ensure that your stay is as enjoyable and hassle-free as possible. Thank you again for choosing us as your temporary home, and we hope you have a wonderful stay with us.

                Best regards,


                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>




    </Helmet>
  );
};

export default About;
