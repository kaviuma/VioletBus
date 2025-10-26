import React, { useEffect, useState } from "react";
import "../Styles/Viewbooking.css"
import { BusBookingStore } from "../Store/Bus.store";


export default function ViewBookings() {
  const { bookings, getAllBookings, deleteBooking } = BusBookingStore();
  const [selectedBooking, setSelectedBooking] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    getAllBookings();
  }, [getAllBookings]);

  const handleCancel = () => {
    if (!cancelReason) return alert("Enter cancellation reason!");
    deleteBooking(selectedId, cancelReason);
    setShowModal(false);
  };

  const formatTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString();
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">My Bookings</h3>

      {bookings.length === 0 ? (
        <p className="text-center text-muted">No bookings found!</p>
      ) : (
        <div className="row g-3">
          {bookings.map((b) => (
            <div className="col-md-4" key={b._id}>
              <div className="card shadow-sm border-0">
                <div className="card-body">
                  <h5 className="text-secondary mb-1">{b.busId?.busname || "N/A"}</h5>
                  <p className="small mb-1">{b.busId?.from || "-"} ➜ {b.busId?.to || "-"}</p>
                  <p className="mb-1">
                    <strong>Departure:</strong> {b.busId?.departureTime || "-"} &nbsp;|&nbsp;
                    <strong>Arrival:</strong> {b.busId?.arrivalTime || "-"}
                  </p>
                  {/* <p className="mb-1"><strong>Seats:</strong> {b.selectedseats.join(", ")}</p> */}
                  <p className="mb-1"><strong>Date:</strong> {formatTomorrowDate()}</p>
                  <p className="mb-1"><strong>Status:</strong> {b.status || "Booked"}</p>

                  <button
                    className="btn btn-danger w-80 mt-2"
                    onClick={() => {
  setSelectedId(b._id);
  setSelectedBooking(b); 
  setCancelReason("");
  setShowModal(true); }}
style={{float:"right"}}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

{showModal && selectedBooking && (
  <div
    className="modal-backdrop-custom"
    onClick={() => setShowModal(false)}
  >
    <div
      className="modal-dialog-custom"
      onClick={(e) => e.stopPropagation()}
    >
      <span
        className="modal-close-btn"
        onClick={() => setShowModal(false)}
      >
        ✕
      </span>

      <h4 className="text-danger text-center fw-bold mb-3">
        Cancel Booking
      </h4>

      {/* ✅ Display Booking Details */}
      <div className="mb-3">
         <p><strong>Passenger:</strong> {selectedBooking.passengerName}</p>
        <p><strong>Bus:</strong> {selectedBooking.busId?.busname}</p>
        <p><strong>Route:</strong> {selectedBooking.busId?.from} ➜ {selectedBooking.busId?.to}</p>
        <p><strong>Seats:</strong> {selectedBooking.selectedseats.join(", ")}</p>
        <p><strong>Date:</strong> {formatTomorrowDate()}</p>
        
        <p><strong>Status:</strong> {selectedBooking.status || "Booked"}</p>
      </div>

      <p className="text-center">
        Please provide a reason for cancellation:
      </p>

      <textarea
        className="form-control border-2 rounded-3"
        placeholder="Enter reason..."
        value={cancelReason}
        onChange={(e) => setCancelReason(e.target.value)}
        rows={3}
      />

      <div className="d-flex justify-content-center gap-2 mt-3">
        <button
          className="btn btn-secondary px-4"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
        <button
          className="btn btn-danger px-4"
          onClick={handleCancel}
        >
          Confirm Cancel
        </button>
      </div>
    </div>
  </div>
)}



    

    </div>
  );
}
