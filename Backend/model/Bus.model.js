let mongoose = require("mongoose");

let Bus = new mongoose.Schema({
   busname: {
    type: String,
    required: true,
    trim: true
  },
  from: {
    type: String,
    required: true,
    trim: true
  },
  to: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  departureTime: { 
    type: String, 
    required: true,
    trim: true
  },
  arrivalTime: { 
    type: String,
    required: true,
    trim: true
  },
  duration: { 
    type: String,
    default: ""
  },
  busType: { 
    type: String
  },
  price: { 
    type: Number,
    required: true,
    min: [0, "Price cannot be negative"]
  },
  totalSeats: { 
    type: Number,
    required: true,
    min: [1, "Bus must have at least 1 seat"]
  },
  availableSeats: { 
    type: Number,
    required: true,
    min: [0, "Available seats cannot be negative"]
  },
  driverName : {
  type: String
  },
  driverNumber: {
    type: Number
  },
  amenities: {
    type: [String],
    default: []
  },
  status: {
    type: String,
    enum: ["Active", "Cancelled", "Completed"],
    default: "Active"
  },
  imageurl: {
    type: String,
    default: ""
  },
  bookedSeats: { 
    type: [String], 
    default: []
  },


})


let BusModel = mongoose.model("Bus",Bus);
module.exports = BusModel;