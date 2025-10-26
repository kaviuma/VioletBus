// Get available seats for a bus
getAvailableSeats: async (req, res) => {
  try {
    const { id } = req.params; // bus id
    const bus = await Bus.findById(id);
    if (!bus) {
    return res.json({ 
            status: false,
            msg: "Bus not found"
    });
    }

    // Create array of all seats
    const allSeats = Array.from({ length: bus.totalSeats }, (_, i) => i + 1);

    // Remove booked seats
    const availableSeats = allSeats.filter(seat => !bus.bookedSeats.includes(seat));

    res.json({ status: true, data: availableSeats });
  } 
  catch (error) {
    res.status(500).json({ status: false, msg: error.message });
  }
}
