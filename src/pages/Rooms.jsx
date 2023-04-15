import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import axios from "axios";
import Helmet from "../components/Helmet/Helmet";
import "../styles/houselist.css";
import HouseItem from "../components/UI/HouseItem";

const Rooms = () => {
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await axios.get("https://localhost:7111/api/house/rent");
            setHouses(response.data);
        };

        fetchHouses();
    }, []);

    return (
        <Helmet title="Rooms">
            <section>
                <Container>
                    <Row>
                        {houses.map((house) => (
                            <HouseItem key={house.id} house={house} />
                        ))}
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Rooms;
