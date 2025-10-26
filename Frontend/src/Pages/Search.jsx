// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";


// export default function BusSearch() {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [buses, setBuses] = useState([]);

//   const handleSearch = async () => {
//     if (!from || !to) {
//       alert("Please enter both From and To places");
//       return;
//     }

//     try {
//       const res = await axios.get(
//         `http://localhost:5000/api/search?from=${from}&to=${to}`
//       );

//       if (res.data.status && res.data.data.length > 0) {
//         setBuses(res.data.data);
//       } else {
//         setBuses([]);
//         alert("No buses found for this route");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Error searching buses");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Search Bus</h2>
// <div className="row g-3 align-items-center">
//           <div className="col-md-4 position-relative">
//              <i class="bi bi-person-standing position-absolute top-50 start-10 translate-middle-y"><i className="bi bi-bus-front  ms-0 position-absolute start-10 "></i></i>
//              <input type="text" className="form-control ps-5"placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
//           </div>
//           <div className="col-md-4 position-relative">
//             <i className="bi bi-bus-front position-absolute top-50 start-10 translate-middle-y ms-2 ">
//             <i class="bi bi-person-standing position-absolute top-40 start-10"></i>
//             </i>
//             <input type="text" className="form-control ps-5" placeholder="To"value={to} onChange={(e) => setTo(e.target.value)}/>
//           </div>
//            <div className="col-md-4"> 
//             <button onClick={handleSearch} style={{backgroundColor:"purple",border:"none",padding:"8px",color:"white",borderRadius:"5px",width:"300px"}}>
//               <i className="bi bi-search me-2"></i> Search
//             </button>
//           </div>
    
//       {/* Results */}
//       <div className="row">
//         {buses.length === 0 ? (
//           <p className="text-muted">No buses found.</p>
//         ) : (
//           buses.map((bus) => (
//             <div key={bus._id} className="col-md-4 mb-3">
//                <br /><br />
//               <div className="card shadow-sm border-0 ">
               
//                 <div className="card-body">
//                   <h5 className="card-title">{bus.busname}</h5>
//                   <p className="card-text mb-1">
//                     {bus.from} ➜ {bus.to}
//                   </p>
//                   <p className="card-text mb-1">
//                     🕐 {bus.departureTime} → {bus.arrivalTime}
//                   </p>
//                   <p className="card-text mb-1">
//                     ⏱ Duration: {bus.duration}
//                   </p>
//                   <p className="card-text mb-1">
//                     💺 Seats: {bus.availableSeats} / {bus.totalSeats}
//                   </p>
//                   <p className="card-text fw-bold text-success">
//                     ₹{bus.price}
//                   </p>

//                   {/* <Link to="/booking" className="btn btn-primary"><BookingPage/></Link> */}

//                   <Link to="/booking" state={{ bus }} className="btn btn-primary">
//                     Book Now
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//       </div>
//     </div>
//   );
// }




import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BusBookingStore } from "../Store/Bus.store";

export default function BusSearch() {
  const { buses, searchBuses, loading } = BusBookingStore();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    searchBuses(from, to);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Search Bus</h2>
      <div className="row g-3 align-items-center">
          <div className="col-md-4 position-relative">
            <i className="bi bi-person-standing position-absolute top-50 start-10 translate-middle-y"><i className="bi bi-bus-front  ms-0 position-absolute start-10 "></i></i>
             <input type="text" className="form-control ps-5"placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
           </div>
          <div className="col-md-4 position-relative">
            <i className="bi bi-bus-front position-absolute top-50 start-10 translate-middle-y ms-2 ">
            <i class="bi bi-person-standing position-absolute top-40 start-10"></i>
            </i>
            <input type="text" className="form-control ps-5" placeholder="To"value={to} onChange={(e) => setTo(e.target.value)}/>
          </div>
           <div className="col-md-4"> 
            <button onClick={handleSearch} style={{backgroundColor:"purple",border:"none",padding:"8px",color:"white",borderRadius:"5px",width:"365px"}}>
             <i className="bi bi-search me-2"></i> Search
           </button>
          </div>
   

      <div className="row mt-4">
        {buses.length === 0 ? (
          <p className="text-muted">Search Here</p>
        ) : (
          buses.map((bus) => (
            <div key={bus._id} className="col-md-4 mb-3">
              <div className="card shadow-sm border-10">
                <div className="card-body" >
                  <h5 className="card-title">{bus.busname}</h5>
                  <p className="card-text mb-1">
                    {bus.from} ➜ {bus.to}
                  </p>
                  <p className="card-text mb-1">
                     {bus.departureTime} → {bus.arrivalTime}
                  </p>
                  {/* <p className="card-text mb-1">
                     Duration: {bus.duration}
                  </p> */}
                  {/* <p className="card-text mb-1">
                     Seats: {bus.availableSeats} / {bus.totalSeats}
                  </p> */}
                  <p className="card-text fw-bold ">
                    ₹{bus.price}
                  </p>
                  <Link to="/booking" state={{ bus }} >
                  <button style={{backgroundColor:"purple",border:"none",color:"white",borderRadius:"5px"}}>Book</button>
                    {/* Book Now */}
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
}
