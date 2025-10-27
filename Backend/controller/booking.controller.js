const Bus = require("../model/Bus.model");
const BookingDetail = require("../model/Booking.model");
const nodemailer = require("nodemailer")

module.exports = {

addBooking: async (req, res) => {
  console.log("Booking request body:", req.body);

  try {
    const { passengerName, email, aadhar, mobileNumber, alternatemobile, busId, selectedseats } = req.body;

    if (!passengerName || !email || !aadhar || !mobileNumber || !busId || !selectedseats || selectedseats.length === 0) {
      return res.status(400).json({ status: false, msg: "Missing required fields" });
    }

    const bus = await Bus.findById(busId);
    if (!bus) return res.status(404).json({ status: false, msg: "Bus not found" });

    const alreadyBooked = bus.bookedSeats.some(seat => selectedseats.includes(seat));
    if (alreadyBooked) return res.status(400).json({ status: false, msg: "Seats already booked" });

    //  Set booking date as tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const newBooking = new BookingDetail({
      passengerName,
      email,
      aadhar,
      mobileNumber,
      alternatemobile,
      busId,
      selectedseats,
      date: tomorrow
    });

    await newBooking.save();

    // Update bus
    bus.bookedSeats.push(...selectedseats);
    bus.availableSeats -= selectedseats.length;
    await bus.save();

    //  Send confirmation email
    try {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      let mailOptions = {
  from: `"Violet Bus" <${process.env.EMAIL_USER}>`,  
  to: email, 
  subject: `Booking Confirmed - ${bus.busname}`,
  html: `
    <h3>Booking Confirmation</h3>
    <p>Hi <b>${passengerName}</b>,</p>
    <p>Your booking for bus <b>${bus.busname}</b> is confirmed.</p>
    <p><b>From:</b> ${bus.from}</p>
    <p><b>To:</b> ${bus.to}</p>
    <p><b>Seats:</b> ${selectedseats.join(", ")}</p>
    <p><b>Date:</b> ${tomorrow.toLocaleDateString()}</p>
    <p><b>Driver Name:</b> ${bus.driverName || "Not provided"}</p>
    <p><b>Driver Number:</b> ${bus.driverNumber || "Not provided"}</p>
    <p>Thank you for booking with us!</p>
  `
};


      await transporter.sendMail(mailOptions);
      console.log("Confirmation email sent to", email);
    } catch (emailErr) {
      console.error("Email sending failed:", emailErr.message);
    }

    // Respond to user
    res.json({ status: true, msg: "Booking saved successfully", booking: newBooking });

  } catch (err) {
    console.error("Booking Error:", err.message);
    res.json({ status: false, msg: "Booking failed", error: err.message });
  }
},

getAllBookings: async (req, res) => {
    try {
      const bookings = await BookingDetail.find()
        .populate("busId")
        .sort({ date: 1 }); 
      res.json({ status: true, data: bookings });
    } catch (error) {
      res.json({ status: false, msg: error.message });
    }
},

getBookingById: async (req, res) => {
    try {
      const booking = await BookingDetail.findById(req.params.id).populate("busId");
      if (!booking) return res.json({ status: false, msg: "Booking not found" });
      res.json({ status: true, data: booking });
    } catch (error) {
      res.json({ status: false, msg: error.message });
    }
},

deleteBooking: async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await BookingDetail.findById(id);
    if (!booking) return res.status(404).json({ status: false, msg: "Booking not found" });

    const bus = await Bus.findById(booking.busId);
    if (bus) {
      const updatedSeats = bus.bookedSeats.filter(seat => !booking.selectedseats.includes(seat));
      const seatsCancelled = booking.selectedseats.length;
      await Bus.findByIdAndUpdate(bus._id, {
        bookedSeats: updatedSeats,
        $inc: { availableSeats: seatsCancelled }
      });
    }
    await BookingDetail.findByIdAndDelete(id);
    res.json({ status: true, msg: "Booking deleted successfully" });
  } 
  catch (err) {
    console.error(err);
    res.json({ status: false, msg: "Server error" });
  }
}

};
