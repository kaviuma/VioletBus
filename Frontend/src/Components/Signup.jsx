import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthStore from "../Store/Auth.store";
import { Link } from "react-router-dom";

function SignUp() {
  const { SignUp } = AuthStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    await SignUp(formData);
    setFormData({ name:"", email:"", password:"" });
  };

  return (
    <div className="signup-page d-flex align-items-center   justify-content-center mt-4">
      <div className="col-12 col-md-8 col-lg-4 mx-aut   o"> 
        <div className="card p-4 signup-card shadow p-md-5 ">
          <h2 className="text-center mb-4 fw-bold" style={{color:"purple"}}>Signup</h2>
          <form onSubmit={handleSubmit}>
         
            <div className="mb-3">
              <label className="form-label fw-semibold" style={{color:"purple"}}>Name</label>
              <input type="text" name="name" className="form-control " placeholder="Enter your name" value={formData.name} onChange={handleChange} require />
            </div> 
            <div className="mb-3">
              <label className="form-label fw-semibold" style={{color:"purple"}}>Email</label>
              <input type="email" name="email" className="form-control " placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
               <label className="form-label fw-semibold" style={{color:"purple"}}>Password</label>
              <input type="password" name="password" className="form-control" placeholder="Enter password" value={formData.password} onChange={handleChange} required />
            </div>

            <button type="submit" style={{padding:"10px", backgroundColor:"purple",border:"none",borderRadius:"5px",color:"white"}}>
              Signup
            </button>

            <button style={{padding:"10px", backgroundColor:"purple",border:"none",borderRadius:"5px",float:"right"}}>
              <Link to="/login" className="text-decoration-none text-light">  Login </Link>
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;