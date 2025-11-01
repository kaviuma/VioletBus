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
      const res = await axios.post("https://violetbus.onrender.com/api/addbus", busData);
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
      const res = await axios.get("https://violetbus.onrender.com/api/getbus");
      console.log(res);
      alert("Success")
    } 
    catch (err) {
      set({loading: false});
    }
  },

  getBusById: async (id) => {
  
    try {
      const res = await axios.get(`https://violetbus.onrender.com/api/getbusbyid/${id}`);
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
      const res = await axios.get(`https://violetbus.onrender.com/api/search?from=${from}&to=${to}`);

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
  },

  addBooking: async (bookingData) => {
  set({ loading: true, error: null });
  try {
    const res = await axios.post("https://violetbus.onrender.com/booking/addbook", bookingData);
    set({ loading: false });
    return res.data; // 
  } catch (err) {
    set({ error: "Booking failed", loading: false });
  }
},

fetchSingleBus: async (id) => {
  const res = await axios.get(`https://violetbus.onrender.com/api/getbus/${id}`);
  set({ singleBus: res.data.data });
},

getAllBookings: async () => {
   
    try {
      const res = await axios.get("https://violetbus.onrender.com/booking/getbook");
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
      const res = await axios.get(`https://violetbus.onrender.com/booking/getbookingbyid/${id}` );
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
    await axios.delete(`https://violetbus.onrender.com/booking/delete/${id}`, {
      data: { reason } 
    });

    alert("Booking cancelled successfully!");

    const res = await axios.get("https://violetbus.onrender.com/booking/getbook");
    const bookingsData = Array.isArray(res.data.data) ? res.data.data : [];
    set({ bookings: bookingsData });

  } 
  catch (err) {
    console.error("Error cancelling booking:", err);
    alert("Failed to cancel booking. Try again.");
  }
}


}));
