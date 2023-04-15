import axios from "axios";
import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

const HouseDetails = () => {
  const { id } = useParams();
  const [house, setHouse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://localhost:7111/api/house/${id}`).then((response) => {
      setHouse(response.data);
    });
  }, [id]);

  const handleSaveHouse = () => {
    axios.post(`https://localhost:7111/api/house/rent`, house).then((response) => {
      console.log(response.data);
      navigate("/rooms")

    })

  };

  if (!house) {
    return <div>Loading...</div>;
  }

  return (
    <Helmet title={house.name}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7F9WwkpYk2BMRGUk6neESe39eHfARg1eoJhxGxB4r&s" alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{house.name}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ${house.price}.00 / Day
                  </h6>

                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({house.rating} ratings)
                  </span>
                </div>

                <p className="section__description">
                  {house.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {house.address}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      className="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {house.houseNumber}
                  </span>


                </div>
              </div>
            </Col>

            {/* <!-- Button trigger modal --> */}

            <div className="modal-footer">
              {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
              <button type="button" className="btn btn-primary" onClick={handleSaveHouse}>Book Now</button>
            </div>

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HouseDetails;


