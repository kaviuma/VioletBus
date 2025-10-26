const Bus = require("../model/Bus.model");

module.exports = {

  // Add new bus
  addbus: async (req, res) => {
    console.log(req.body);
    
    try {
      const {busname,from,to,date,departureTime,arrivalTime,duration,busType,price,totalSeats,availableSeats,amenities,
status,imageurl,bookedSeats,driverName,driverNumber} = req.body;

      // Validation (basic check)
      if (!busname || !from || !to || !date || !departureTime || !price) {
        return res.json({
          status: false,
          msg: "Required fields are missing"
        });
      }

      const newBus = await Bus.create({ busname,from,to,date,departureTime,arrivalTime,duration,busType,price,totalSeats,availableSeats,amenities,status,imageurl,bookedSeats,driverName,driverNumber});

      return res.json({
        status: true,
        msg: "Bus added successfully",
        data: newBus
      });
    } catch (error) {
      console.log(error);
      return res.json({
        status: false,
        msg: "Error adding the bus",
        error: error.message
      });
    }
  },

  // Get single bus by ID
  getsinglebus: async (req, res) => {
    try {
      const { id } = req.params;
      const singleBus = await Bus.findById(id);

      if (!singleBus) {
        return res.status(404).json({
          status: false,
          msg: "Bus not found"
        });
      }

      res.json({
        status: true,
        data: singleBus
      });
    } 
    catch (error) {
      console.log(error);
      res.status(500).json({
        status: false,
        msg: "Error finding bus",
        error: error.message
      });
    }
  },

  // Get buses
  getbus: async (req, res) => {
    try {
      const buses = await Bus.find();
      res.json({
        status: true,
        count: buses.length,
        data: buses
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        msg: "Error getting buses",
        error: error.message
      });
    }
  },
 
  // update the bus datas
  updateBus: async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBus = await Bus.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedBus) {
      return res.status(404).json({
        status: false,
        msg: "Bus not found"
      });
    }

    res.json({
      status: true,
      msg: "Bus updated successfully",
      data: updatedBus
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      msg: "Error updating bus",
      error: error.message
    });
  }
  },

  deleteBus: async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBus = await Bus.findByIdAndDelete(id);

    if (!deletedBus) {
      return res.status(404).json({
        status: false,
        msg: "Bus not found"
      });
    }

    res.json({
      status: true,
      msg: "Bus deleted successfully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: false,
      msg: "Error deleting bus",
      error: error.message
    });
  }
  },

  searchbus: async (req, res) => {
  try {
    const { from, to } = req.query;

    if (!from || !to)
      return res.status(400).json({ status: false, msg: "From & To required" });

    const buses = await Bus.find({ from, to });

    if (buses.length === 0)
      return res.json({ status: false, msg: "No buses found", data: [] });

    res.json({ status: true, msg: "Buses found", data: buses });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, msg: "Error fetching buses" });
  }
}









};

// const bus = require("../model/Bus.model");

// module.exports = {

// addbus : async (req,res)=>{
//     console.log(req.body);
//     let {busname,from,to,date,departureTime,arrivalTime,duration,busType,price,totalSeats,availableSeats,amenities,status,imageurl} = req.body;

//     try {
//        let details = await bus.create({busname:busname,from:from,to:to,date:date,departureTime:departureTime,arrivalTime:arrivalTime,duration:duration,busType:busType,price:price,totalSeats:totalSeats,availableSeats:availableSeats,amenities:amenities,status:status,imageurl:imageurl});
//        console.log(details);
//         return res.json({
//             status : true,
//             "msg" : "Added the Bus"
//         })
//     } 
//     catch (error) {
//         console.log(error);
//         return res.json({
//             status: false,
//             "msg" : "Error to Add the Bus"
//         })
//     }
    
// },
// findsinglebus : async (req,res)=>{

//         let {id} = req.params

//         await bus.findOne({_id:id})
//         .then((d)=>{
//             res.send(d)
//         })
//         .catch((e)=>{
//             console.log(e);
            
//         })
// },
// getbus : async (req,res)=>{
//      try {
//     const buses = await bus.find(); 
//     res.json({
//       status: true,
//       count: buses.length,
//       data: buses
//     });
//   } catch (error) {
//     res.json({
//       status: false,
//       message: error.message
//     });
//   }
// }



// }