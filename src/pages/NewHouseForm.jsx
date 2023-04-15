import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const NewHouseForm = () => {
  const [image, setImage] = useState();
  const [houseData, setHouseData] = useState({
    name: "",
    houseNumber: "",
    address: "",
    rating: "",
    description: "",
    imageUrl: "",
    price: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHouseData({ ...houseData, [name]: value });
  };


  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Images");
    formData.append('cloud_name', 'dcdiahbbe');

    axios.post('https://api.cloudinary.com/v1_1/dcdiahbbe/image/upload', formData)
      .then((response) => {
        setImage(response.data.public_id);
        setHouseData({ ...houseData, imageUrl: response.data.secure_url });
      })
      .catch((error) => {
        console.error(error);
        // Do something with error (e.g. show error message)
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://localhost:7111/api/house", houseData)
      .then((response) => {
        console.log(response);
        // Do something with successful response (e.g. show success message)
      })
      .catch((error) => {
        console.error(error);
        // Do something with error (e.g. show error message)
      });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="mb-4">Add a new house listing</h1>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="name">Name*</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                value={houseData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="houseNumber">House Number*</Label>
              <Input
                type="text"
                name="houseNumber"
                id="houseNumber"
                placeholder="Enter house number"
                value={houseData.houseNumber}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address*</Label>
              <Input
                type="text"
                name="address"
                id="address"
                placeholder="Enter address"
                value={houseData.address}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="rating">Phone number*</Label>
              <Input
                type="text"
                name="rating"
                id="rating"
                placeholder="Enter rating"
                value={houseData.rating}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description*</Label>
              <Input
                type="text"
                name="description"
                id="description"
                placeholder="Enter description"
                value={houseData.description}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image*</Label>
              <Input
                type="file"
                name="image"
                id="image"
                onChange={handleImageUpload}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price*</Label>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="Enter price"
                value={houseData.price}
                onChange={handleInputChange}
                required
              />
            </FormGroup>
            <Button type="submit" color="primary">Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default NewHouseForm;