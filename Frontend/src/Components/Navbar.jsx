// import React from "react";
// import { Link } from "react-router-dom";
// import "../Styles/Navbar.css"

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//         <Link className="navbar-brand fw-bold" to="/">BusBooking</Link>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <Link className="nav-link" to="/buses">Buses</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/mybookings">My Bookings</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className="container "  >
        <Link className="navbar-brand fw-bold " to="/">
        Violet Bus
        </Link>

      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
             Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/help">
              Help
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                 About
              </Link>
            </li>
              <li className="nav-item">
              <Link className="nav-link" to="/terms">
                 Terms
              </Link>
            </li>
             <li className="nav-item">
              <Link className="nav-link" to="/viewbooking">
                My Bookings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}










// import React from 'react'

// const Navbar1 = () => {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg  bg-primary">
//   <div className="container-fluid" >
//     <a className="navbar-brand fw-bold" href="/">My Bus</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNavDropdown" >
//       <ul className="navbar-nav ms-auto" >
//         <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a> </li>
//         <li className="nav-item"><a className="nav-link" href="/buses">Buses</a> </li>
//         <li className="nav-item"><a className="nav-link" href="/booking">Booking</a> </li>
//       </ul>
//     </div>
//   </div>
// </nav>


//     </div>
//   )
// }

// export default Navbar1



