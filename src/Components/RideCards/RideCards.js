import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './RideCards.css'
import { useHistory } from 'react-router';
const RideCards = (props) => {
    const{id,image,name}=props.rideInfo
    const history=useHistory()
    const handleRides = (rideId) => {
       const url=`destination/${id}`
       history.push(url)
    }
  return (
    <div className="col-md-3 my-3">
        <Card className='card-container'>
            <Card.Img variant="top" className='card-image' src={image} />
            <Card.Body>
                <div className="text-center">
                    <Card.Title>{name}</Card.Title>
                    <Button variant="primary" onClick={handleRides}>Book {name}!</Button>
                </div>
            </Card.Body>
        </Card>
        </div>
  );
};

export default RideCards;