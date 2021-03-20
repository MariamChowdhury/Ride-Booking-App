import React, { useEffect, useState } from "react";
import RideCards from "../RideCards/RideCards";
import "./Home.css";
import RideInfo from "../fakeData/fakeData.json";
const Home = () => {
  const [rideInfo, setRideInfo] = useState([]);
  useEffect(() => {
    setRideInfo(RideInfo);
  }, []);
  return (
    <div className="home-container">
      <div className="container mt-5">
        <div className="row">
          {rideInfo.map((rideInfo) => (
            <RideCards key={rideInfo.id} rideInfo={rideInfo}></RideCards>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
