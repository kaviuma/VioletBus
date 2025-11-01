import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Styles/Home.css";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="homepage">
      <div>
      <section className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
        {/* <div className="overlay"></div> */}
        <div className="content">
          <h1 className="fw-bold display-4">Book Your Bus Tickets Easily</h1>
          <p className="lead mb-4">Fast • Safe • Affordable travel made simple</p>
          <Link to="/search" >
    <button style={{border: "none", padding:"10px",backgroundColor:"purple",color:"white",borderRadius:"10px"}}>Search </button>
          </Link>
               </div>
      </section>
      <section id="about" className="py-5 text-center">
        <div className="container" >
          <h2 className="fw-bold mb-4">Why Choose My Bus?</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className="card p-4 shadow-sm h-100" style={{color : "purple"}}>
                
                <h5><i className="bi bi-stopwatch"></i> Easy Booking</h5>
                <p>Book tickets in just a few clicks — no long queues or waiting times!</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-4 shadow-sm h-100 "  style={{color : "purple"}}>
                <h5><i class="bi bi-currency-rupee"></i> Affordable Prices</h5>
                <p>Enjoy pocket-friendly fares with zero hidden charges.</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card p-4 shadow-sm h-100"  style={{color : "purple"}}>
                <h5><i class="bi bi-bus-front"></i>     Safe & Comfortable</h5>
                <p>Travel with verified operators and comfortable buses across routes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
</div>
<hr />
     
      <footer className="bg-light text-center text-muted py-3">
        <p>© 2025 My Bus • All rights reserved</p>
      </footer>
    </div>
  );
}
