import React from "react";

import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/UI/HeroSlider";

import { Col, Container, Row } from "reactstrap";
import FindRoomForm from "../components/UI/FindRoomForm";

import About from "./About";
import RoomListing from "./HouseList";

const Home = () => {
  return (
    <Helmet title="Home">
  
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              

              <Col lg="8" md="8" sm="12">
                 <FindRoomForm /> 
              </Col>
            </Row>
          </Container>
        
        </div>
      </section>
    
      <RoomListing/>
      
      <About />

   

      
    </Helmet>
  );
};

export default Home;
