import React, { useState } from "react";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import fakeData from "../fakeData/fakeData.json";
import map from "../images/Map.png";
import image from "../images/peopleicon.png";
import "./Destination.css";

const Destination = () => {
  const { rideId } = useParams();
  const ride = fakeData.find((rd) => rd.id == rideId);
  console.log(ride);
  const [submit,setSubmit]=useState(false);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 my-5">
          <Form className="mb-5">
            <Form.Group>
              <Form.Label>Pick From</Form.Label>
              <Form.Control type="text" placeholder='Mirpur' required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Pick To</Form.Label>
              <Form.Control type="text" placeholder='Gulshan'  required/>
            </Form.Group>
            <Button variant="primary" onClick={() => setSubmit(true)}>
              Submit
            </Button>
          </Form>
          { 
            submit? <Card>
            <Card.Body className="card-heading text-center">
              <Card.Title>Your Location from Destination</Card.Title>
            </Card.Body>
            <ListGroup>
              <ListGroupItem className="d-flex">
                {" "}
                <div className="px-5">
                  <img style={{ width: "90px" }} src={ride.image} alt="" />{" "}
                  {ride.name}{" "}
                  <img style={{ width: "30px" }} src={image} alt="" />
                </div>
                <div className="px-5"> ${ride.price}</div>
              </ListGroupItem>
              <ListGroupItem className="d-flex">
                {" "}
                <div className="px-5">
                  <img style={{ width: "90px" }} src={ride.image} alt="" />{" "}
                  {ride.name}{" "}
                  <img style={{ width: "30px" }} src={image} alt="" />
                </div>
                <div className="px-5"> ${ride.price}</div>
              </ListGroupItem>
              <ListGroupItem className="d-flex">
                {" "}
                <div className="px-5">
                  <img style={{ width: "90px" }} src={ride.image} alt="" />{" "}
                  {ride.name}{" "}
                  <img style={{ width: "30px" }} src={image} alt="" />
                </div>
                <div className="px-5"> ${ride.price}</div>
              </ListGroupItem>
            </ListGroup>
          </Card>
          : null
          }
        </div>
        <div className="col-md-6 my-5">
          <img style={{ width: "30rem" }} src={map} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Destination;
