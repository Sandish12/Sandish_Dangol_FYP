// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/room-item.css";



const HouseItem = (props) => {
  const { house } = props;

  return (
    <Col lg="4" md="6" sm="6" className="mb-5">
      <div className="room__item">
        <div className="house__img">
          <img src={house.imageUrl} alt="" className="w-100" />
        </div>

        <div className="room__item-content mt-4">
          <h4 className="section__title text-center">{house.name}</h4>
          <h6 className="rent__price text-center mt-">
            ${house.price}.00 <span>/ Month</span>
          </h6>

          <div className="room__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-home-2-line"></i> {house.houseNumber}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-map-pin-line"></i> {house.address}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i className="ri-star-line"></i> {house.rating}
            </span>
          </div>

          <div className="room__item-desc">{house.description}</div>


          <button className="w-50 room__item-btn room__btn-details">
            <Link to={`/house/${house.id}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default HouseItem;