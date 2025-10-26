// let mongoose = require("mongoose");

// let book = new mongoose.Schema({

//     passengerName:{
//         type:String
//     },

//     email:{
//         type:String
//     },

//    aadhar: {
//   type: String,
//   required: true,
//   match: /^[0-9]{12}$/ 
// },

//     mobileNumber:{
//         type:Number
//     },

//     alternatemobile:{
//         type:Number
//     },
    
//     busId: { 
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: "Bus" 
//     } ,
//     date: { 
//       type: Date, 
//       default: Date.now 
//     },

//     selectedseats:{
//         type:[]
//     },
//     availableSeats: {
//   type: Number,
//   default: 40
// },
// bookedSeats: {
//   type: [String],
//   default: []
// }


// })

// let bookingDetail = mongoose.model("BookingDetail",book);

// module.exports = bookingDetail;

let mongoose = require("mongoose");

let bookingSchema = new mongoose.Schema({
  passengerName: { type: String, required: true },
  email: { type: String, required: true },
  aadhar: { type: String, required: true, match: /^[0-9]{12}$/ },
  mobileNumber: { type: Number, required: true },
  alternatemobile: { type: Number },
  busId: { type: mongoose.Schema.Types.ObjectId, ref: "Bus", required: true },
  date: { type: Date, default: Date.now },
  selectedseats: { type: [String], required: true } // ✅ array of strings
});

let BookingDetail = mongoose.model("BookingDetail", bookingSchema);

module.exports = BookingDetail;
