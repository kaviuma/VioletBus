let express = require("express");
const { addBooking,getAllBookings,getBookingById,deleteBooking } = require("../controller/booking.controller");


let BookRouter = express.Router();

BookRouter.post("/addbook",addBooking);
BookRouter.get("/getbook",getAllBookings);
BookRouter.get("/getbook/:id",getBookingById);
BookRouter.delete("/delete/:id",deleteBooking);

module.exports = BookRouter;