import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Buses from "./Pages/Buses";
import SignUp from "./Components/Signup";
import BusSearch from "./Pages/Search";
import ViewBookings from "./Pages/ViewBooking";
import About from "./Pages/AboutAs";
import Terms from "./Pages/Terms";
import BookingPage from "./Pages/Booking";
import HelpSupport from "./Pages/Help";

function App() {
 
  return (
    <>
    
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup"element={<SignUp/>}/>
        <Route path="/login"element={<Login/>}/>
        <Route path="/buses" element={<Buses/>}/>
        <Route path="/search"element={<BusSearch/>}/>
         <Route path="/booking"element={<BookingPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/terms" element={<Terms/>}/>
        <Route path="/help" element={<HelpSupport/>}/>

        <Route path="/viewbooking"element={<ViewBookings/>}/>
        </Routes>
     
     </BrowserRouter>
     
    </>
  )
}

export default App
