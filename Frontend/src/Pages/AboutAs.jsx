import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function About() {
  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">About Violet Bus</h1>
          <p className="text-muted fs-5">
            Making your travel simple, safe, and affordable — wherever you go.
          </p>
        </div>

        <section className="mb-5">
          <h4 className=" fw-bold mb-3"> Who We Are</h4>
          <p>
            <strong>Violet Bus</strong> is your trusted partner for comfortable and
            hassle-free bus travel across India. We make it easy to{" "}
            <strong>search, compare, and book</strong> bus tickets online in just
            a few clicks.
          </p>
        </section>

        <section className="mb-5">
          <h4 className=" fw-bold mb-3"> Why Choose Violet Bus?</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"  style={{color: "purple"}}>
              <i className="bi bi-check-circle me-2" style={{color: "purple"}}></i> Quick & Easy Booking
            </li>
            <li className="list-group-item"  style={{color: "purple"}}>
              <i className="bi bi-check-circle me-2" style={{color: "purple"}}></i> Affordable Ticket Prices
            </li>
            <li className="list-group-item"  style={{color: "purple"}}>
              <i className="bi bi-check-circle me-2" style={{color: "purple"}}></i> Safe & Comfortable Rides
            </li>
            <li className="list-group-item"  style={{color: "purple"}}>
              <i className="bi bi-check-circle  me-2" style={{color: "purple"}}></i> 24/7 Customer Support
            </li>
          </ul>
        </section>

        <section className="mb-5">
          <h4 className="fw-bold mb-3"> Safety & Trust</h4>
          <p>
            We work only with verified bus operators who follow strict safety and
            hygiene standards. All transactions are{" "}
            <strong>secure and encrypted</strong>, so you can book with peace of mind.
          </p>
        </section>

        <div className="text-center mt-4">
          <h5 className="fw-bold">Thank You for Choosing Violet Bus</h5>
          <p className="text-muted">Your journey starts with us!</p>
        </div>
      </div>

      <footer className="text-white text-center py-3" style={{backgroundColor: "purple"}}>
        &copy; {new Date().getFullYear()} Violet Bus | All Rights Reserved
      </footer>
    </>
  );
}
