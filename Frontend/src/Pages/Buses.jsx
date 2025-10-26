import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Buses() {
  const [buses, setBuses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/getbus")
      .then(res => setBuses(res.data.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-center">Available Buses</h2>
      <div className="row">
        {buses.map(bus => (
          <div className="col-md-4 mb-3" key={bus._id}>
            <div className="card shadow-sm">
              <div className="card-body"  style={{color: "purple"}}>
                <h5 className="card-title">{bus.busname}</h5>
                <p className="card-text">
                  <strong>From:</strong> {bus.from} <br />
                  <strong>To:</strong> {bus.to} <br />
                  {/* <strong>Date:</strong> {bus.date?.substring(0,10)} <br /> */}
                  <strong>Time:</strong> {bus.departureTime} - {bus.arrivalTime}
                </p>
                {/* <Link to={`/booking/${bus._id}`} className="btn btn-primary">
                  Book Now
                </Link> */}
<button style={{backgroundColor: "purple",border:"none",padding:"7px",borderRadius:"10px",float:"right"}}>
<Link to="/booking" state={{ bus }} style={{textDecoration: "none",color: "white"}}>
  Book Now
</Link>
</button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
