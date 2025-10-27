import React from "react";

export default function HelpSupport() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4"> Help & Support</h2>
      <div className=" border-0 p-10" >
        <h5>Need Assistance?</h5>
        <p> We're here to help you! If you face any issue while booking, cancelling, or viewing tickets, feel free to reach out.
          <br /> Our support team is available 24/7 to assist you with bookings, cancellations, and queries. </p>
          
        <h6 className="mt-3"> <i class="bi bi-telephone"></i> Contact Us</h6>
        <ul className="list-unstyled">
          <li><strong>Phone:</strong> +91 98765 43210</li>
          <li><strong>Email:</strong> violetbus@gmail.com</li>
        </ul>

        <h6 className="mt-3"><i class="bi-exclamation-triangle-fill"></i> Common Issues</h6>
        <ul>
          <li>Didn't receive ticket mail → Check spam folder or re-login.</li>
          <li>Payment failed → Check bank or retry after 5 mins.</li>
          <li>Wrong details entered → Contact support immediately.</li>
        </ul>

        <h6 className="mt-3"> <i class="bi bi-pin-map"></i>  Office Address</h6>
        <p> Violet Bus Pvt Ltd,Tenkasi - 627811. </p>

        <p className="text-center text-muted mt-4 mb-0">  © 2025 Violet Bus | Safe • Fast • Reliable </p>
      </div>
    </div>
  );
}
