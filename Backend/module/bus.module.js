let express = require("express");
const { addbus, getbus, getsinglebus, updateBus,deleteBus, searchbus} = require("../controller/bus.controller");
let BusRouter = express.Router();


BusRouter.post("/addbus",addbus);
BusRouter.get("/getbus",getbus);
BusRouter.get("/getbus/:id",getsinglebus);
BusRouter.put("/update/:id",updateBus);
BusRouter.delete("/delete/:id",deleteBus);
BusRouter.get("/search",searchbus);

module.exports = BusRouter;