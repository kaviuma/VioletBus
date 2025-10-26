import { create } from "zustand";
import axios from "axios";

export const BusBookingStore = create((set) => ({
  
  buses: [],
  singleBus: null,
  loading: false,
  error: null,
  bookings: [],
  singleBooking: null,

 
  addBus: async (busData) => {
    try {
      const res = await axios.post("http://localhost:5000/api/addbus", busData);
    console.log(res);
    
      return res.json({
        "msg" : "Successfully Added the BUs"
      })
    } catch (err) {
        console.log("Failed to add bus");
        set({loading: false,
      });
    }
  },

  getAllBuses: async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/getbus");
      console.log(res);
      alert("Success")
    } 
    catch (err) {
      set({loading: false});
    }
  },

  getBusById: async (id) => {
  
    try {
      const res = await axios.get(`http://localhost:5000/api/getbusbyid/${id}`);
      set({ singleBus: res.data, loading: false });
    } catch (err) {
      set({
        error:"Failed to get bus",
        loading: false,
      });
    }
  },

  searchBuses: async (from, to) => {
    if (!from || !to) {
      alert("Please enter both From and To places");
      return;
    }

    set({ loading: true, error: null });

    try {
      const res = await axios.get(`http://localhost:5000/api/search?from=${from}&to=${to}`);

      if (res.data.status && res.data.data.length > 0) {
        set({ buses: res.data.data });
      } else {
        set({ buses: [] });
        alert("No buses found for this route");
      }
    } catch (err) {
      console.error(err);
      set({ error: "Error searching buses" });
    } 
    // finally {
    //   set({ loading: false });
    // }
  },
//  booking
  // addBooking: async (bookingData) => {
  //   try {
  //     const res = await axios.post("http://localhost:5000/booking/addbook",bookingData);
  //    console.log(res);
  //     return res.json ({
  //       "msg" : "Success"
  //     })
  //   } 
  //   catch (err) {
  //     set({error:"Booking failed",loading: false});
  //   }
  // },

  addBooking: async (bookingData) => {
  set({ loading: true, error: null });
  try {
    const res = await axios.post("http://localhost:5000/booking/addbook", bookingData);
    set({ loading: false });
    return res.data; // ✅ return the data from backend
  } catch (err) {
    set({ error: "Booking failed", loading: false });
  }
},


  getAllBookings: async () => {
   
    try {
      const res = await axios.get("http://localhost:5000/booking/getbook");
      const bookingsData = Array.isArray(res.data.data) ? res.data.data : [];
       set({ bookings: bookingsData, loading: false });
      console.log(res);
      
    } 
    catch (err) {
    console.log(err);
    
    }
  },

  getBookingById: async (id) => {
   
    try {
      const res = await axios.get(`http://localhost:5000/booking/getbookingbyid/${id}` );
      set({ singleBooking: res.data.data || res.data, loading: false });
    } catch (err) {
      set({
        error: "Failed to fetch booking",
        loading: false,
      });
    }
  },

deleteBooking: async (id, reason) => {
  try {
    // Send request to correct URL
    await axios.delete(`http://localhost:5000/booking/delete/${id}`, {
      data: { reason } // pass reason to backend
    });

    alert("Booking cancelled successfully!");

    // Refresh bookings
    const res = await axios.get("http://localhost:5000/booking/getbook");
    const bookingsData = Array.isArray(res.data.data) ? res.data.data : [];
    set({ bookings: bookingsData });

  } catch (err) {
    console.error("Error cancelling booking:", err);
    alert("Failed to cancel booking. Try again.");
  }
}


}));
