import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './RideCards.css'

const RideCards = (props) => {
  console.log(props.rideInfo)
  const{image,name}=props.rideInfo
  return (
    <div className="col-md-3 my-3">
        <Card className='card-container'>
            <Card.Img variant="top" className='card-image' src={image} />
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{name}</Card.Title>
                    <Button variant="primary">Book {name}!</Button>
                </div>
            </Card.Body>
        </Card>
        </div>
  );
};

export default RideCards;