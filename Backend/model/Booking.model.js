let mongoose = require("mongoose");

let bookingSchema = new mongoose.Schema({
  passengerName: { 
    type: String,
    required: true 
    },
  email: { 
    type: String,
    required: true
   },
  aadhar: {
     type: String,
     required: true,
     match: /^[0-9]{12}$/ 
      },
  mobileNumber: { 
    type: Number, 
    required: true
   },
  alternatemobile: {
     type: Number 
    },
  busId: { 
    type: mongoose.Schema.Types.ObjectId,
     ref: "Bus", 
     required: true 
    },
  date: { 
    type: Date,
     default: Date.now 
    },
  selectedseats: { 
    type: [String], 
    required: true
   } 
});

let BookingDetail = mongoose.model("BookingDetail", bookingSchema);

module.exports = BookingDetail;
