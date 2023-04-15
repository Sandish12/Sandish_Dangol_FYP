// import React, { useEffect, useState } from "react";
// import { Col, Container, Row } from "reactstrap";
// import axios from "axios";
// import Helmet from "../components/Helmet/Helmet";
// import "../styles/houselist.css";
// import HouseItem from "../components/UI/HouseItem";

// const HouseList = () => {
//   const [houses, setHouses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const fetchHouses = async () => {
//       const response = await axios.get("https://localhost:7111/api/house");
//       setHouses(response.data);
//     };

//     fetchHouses();
//   }, []);

//   const filteredHouses = houses.filter((house) =>
//     house.address.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Helmet title="Rooms">
//       <section>
//         <Container>
//           <Row>
//             <Col lg="12">
//               <div className="d-flex align-items-center gap-3 mb-5">
//                 <span className="d-flex align-items-center gap-2">
//                   <i className="ri-sort-asc"></i> Sort By
//                 </span>
//                 <select>
//                   <option>Select</option>
//                   <option value="low">Low to High</option>
//                   <option value="high">High to Low</option>
//                 </select>
//               </div>
//             </Col>
//             <Col lg="12">
//               <div className="search-form">
//                 <input
//                   type="text"
//                   className="search-input"
//                   placeholder="Search by address"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <button type="submit" className="search-button">Search</button>
//               </div>
//             </Col>
//             {filteredHouses.map((house) => (
//               <HouseItem key={house.id} house={house} />
//             ))}
//           </Row>
//         </Container>
//       </section>
//     </Helmet>
//   );
// };

// export default HouseList;



import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import Helmet from "../components/Helmet/Helmet";
import "../styles/houselist.css";
import HouseItem from "../components/UI/HouseItem";

const HouseList = () => {
  const [houses, setHouses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchHouses = async () => {
      const response = await axios.get("https://localhost:7111/api/house");
      setHouses(response.data);
    };

    fetchHouses();
  }, []);

  let filteredHouses = houses.filter((house) =>
    house.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortOrder === "low") {
    filteredHouses = filteredHouses.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "high") {
    filteredHouses = filteredHouses.sort((a, b) => b.price - a.price);
  }

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <Helmet title="Rooms">
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i className="ri-sort-asc"></i> Sort By
                </span>
                <select onChange={handleSortChange}>
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col>
            <Col lg="12">
              <div className="search-form">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search by address"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-button">Search</button>
              </div>
            </Col>
            {filteredHouses.map((house) => (
              <HouseItem key={house.id} house={house} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default HouseList;
