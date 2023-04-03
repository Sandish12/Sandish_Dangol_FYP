 import axios from "axios";
import React, { useState, useEffect } from "react";

 import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

  const HouseDetails = () => {
       const { id } = useParams();
       const [house, setHouse] = useState(null);
    
       useEffect(() => {
         axios.get(`https://localhost:7111/api/house/${id}`).then((response) => {
           setHouse(response.data);
         });
       }, [id]);
    
       if (!house) {
         return <div>Loading...</div>;
       }

  return (
    <Helmet title={house.name}>
      <section>
      <Container>
           <Row>
             <Col lg="6">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7F9WwkpYk2BMRGUk6neESe39eHfARg1eoJhxGxB4r&s" alt=""  className="w-100" />
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
                       <i class="ri-star-s-fill"></i>
                       <i class="ri-star-s-fill"></i>
                       <i class="ri-star-s-fill"></i>
                       <i class="ri-star-s-fill"></i>
                       <i class="ri-star-s-fill"></i>
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
                       class="ri-roadster-line"
                       style={{ color: "#f9a826" }}
                     ></i>{" "}
                     {house.address}
                   </span>

                   <span className=" d-flex align-items-center gap-1 section__description">
                     <i
                       class="ri-settings-2-line"
                       style={{ color: "#f9a826" }}
                     ></i>{" "}
                    {house.houseNumber}
                   </span>

                 
                </div>
              </div>
            </Col>

            {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
  Launch demo modal
</button>

{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        {/* <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button> */}
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HouseDetails;


