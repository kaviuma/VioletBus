import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BusBookingStore } from "../Store/Bus.store";

export default function BookingPage() {
  const { addBooking, loading, fetchSingleBus, singleBus } = BusBookingStore();
  const location = useLocation();
  const { bus: initialBus } = location.state || {};
  const bus = singleBus || initialBus;

  const [selected, setSelected] = useState([]);
  const [details, setDetails] = useState({ name: "", email: "", aadhar: "", mobile: "", altMobile: ""});

  useEffect(() => {
    if (initialBus) {
      fetchSingleBus(initialBus._id);
    }
  }, [initialBus, fetchSingleBus]);

  const seatsLayout = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"],
    ["D1", "D2", "D3", "D4"],
    ["E1", "E2", "E3", "E4"],
    ["F1", "F2", "F3", "F4"],
    ["G1", "G2", "G3", "G4"],
    ["H1", "H2", "H3", "H4", "H5"],
  ];

  if (!bus) {
    return (
      <div className="text-center mt-5">
        <p>Please go back and choose a bus.</p>
      </div>
    );
  }

  const toggleSeat = (seat) => {
    setSelected((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleBooking = async () => {
    const { name, email, aadhar, mobile, altMobile } = details;

    if (!name || !email || !aadhar || !mobile || !altMobile || selected.length === 0) {
      return alert("Please fill all details and select seats");
    }

    await addBooking({
      passengerName: name,email,aadhar,mobileNumber: Number(mobile),alternatemobile: Number(altMobile),busId: bus._id,selectedseats: selected,
    });

    await fetchSingleBus(bus._id);  

    alert("Booking Successful! & Check your mail");
    setSelected([]);
    setDetails({ name: "", email: "", aadhar: "", mobile: "", altMobile: "" });
  };

  const isBooked = (seat) => bus.bookedSeats?.includes(seat);

  return (
    <div className="container text-center mt-4">
      <h2> Book Your Seats - {bus.busname}</h2>
      <p className="text-muted">Choose seats</p>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "25px" }}>
        {seatsLayout.map((row, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", gap: "10px" }}>
              {row.slice(0, 2).map((seat) => (
                <button
                  key={seat}
                  onClick={() => !isBooked(seat) && toggleSeat(seat)}
                  style={{
                    width: "45px",
                    height: "45px",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    backgroundColor: isBooked(seat)
                      ? "#dc3545"
                      : selected.includes(seat)
                      ? "green"
                      : "#6c757d",
                    cursor: isBooked(seat) ? "not-allowed" : "pointer",
                  }}
                  disabled={isBooked(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>

            <div style={{ width: "60px" }}></div>

            <div style={{ display: "flex", gap: "10px" }}>
              {row.slice(2).map((seat) => (
                <button
                  key={seat}
                  onClick={() => !isBooked(seat) && toggleSeat(seat)}
                  style={{
                    width: "45px",
                    height: "45px",
                    border: "none",
                    borderRadius: "6px",
                    color: "white",
                    backgroundColor: isBooked(seat)
                      ? "#dc3545"
                      : selected.includes(seat)
                      ? "green"
                      : "#6c757d",
                    cursor: isBooked(seat) ? "not-allowed" : "pointer",
                  }}
                  disabled={isBooked(seat)}
                >
                  {seat}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginTop: "15px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ width: "10px", height: "10px", backgroundColor: "green" , borderRadius:"5px" }}></div> Selected
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ width: "10px", height: "10px", backgroundColor: "#6c757d"  , borderRadius:"5px"}}></div> Available
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <div style={{ width: "10px", height: "10px", backgroundColor: "#dc3545"  , borderRadius:"5px"}}></div> Booked
        </div>
      </div>

      <div style={{ maxWidth: "400px", margin: "30px auto", textAlign: "left" }}>
        {["name", "email", "aadhar", "mobile", "altMobile"].map((field) => (
          <input
            key={field}
            type="text"
            className="form-control mb-2"
            placeholder={
              field === "altMobile"
                ? "Alternate Mobile Number"
                : field.charAt(0).toUpperCase() + field.slice(1)
            }
            value={details[field]}
            onChange={(e) => setDetails({ ...details, [field]: e.target.value })}
          />
        ))}

        <button
          onClick={handleBooking}
          className="btn btn-success w-100 mt-2"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </div>
    </div>
  );
}
