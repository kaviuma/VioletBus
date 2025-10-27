import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Terms() {
  return (
    <>
      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Terms & Conditions</h1>
          <p className="text-muted fs-5"> Please read these terms carefully before using Violet Bus services. </p>
        </div>

        <section className="mb-4">
          <h4 className="fw-semibold "> General Terms</h4>
          <p> By accessing or using <strong>Violet Bus</strong>, you agree to follow these Terms & Conditions. We may update these terms at any time, and continued use means you accept the changes. </p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold"> Booking Policy</h4>
          <p> All bookings made through Violet Bus are confirmed only after successful payment. Please verify travel details before finalizing your booking. Violet Bus is not responsible for incorrect information entered by users. </p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold"> Cancellation & Refunds</h4>
          <p> Cancellations are allowed as per the bus operator's policy. Refunds, if applicable, will be processed to your original payment method within 3-7 business days. </p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold"> Passenger Responsibility</h4>
          <p> Passengers must carry valid ID proof and reach the boarding point on time. Violet Bus is not liable for missed buses due to passenger delays.  </p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold"> Platform Usage</h4>
          <p> Users agree not to misuse the website or attempt unauthorized access. Any fraudulent activity will lead to account suspension or legal action if necessary.</p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold">Liability Disclaimer</h4>
          <p> Violet Bus acts as a booking platform and does not operate buses directly. We are not responsible for delays, cancellations, or issues caused by bus operators. </p>
        </section>

        <section className="mb-4">
          <h4 className="fw-semibold"> Privacy & Data</h4>
          <p> Your personal data is collected and used in accordance with our Privacy Policy. We never share sensitive information without your consent. </p>
        </section>

        <div className="text-center mt-5">
          <h5 className="fw-bold "> Thank You for Choosing Violet Bus</h5>
          <p className="text-muted"> We're committed to making your travel safe and convenient. </p>
        </div>
      </div>

      <footer className="text-white text-center py-3" style={{backgroundColor: "purple"}}>
        &copy; {new Date().getFullYear()} Violet Bus | All Rights Reserved
      </footer>
    </>
  );
}
