import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthStore from "../Store/Auth.store";
import { Link } from "react-router-dom";

function SignUp() {

   let{SignUp} =  AuthStore()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup Successful!");

 await SignUp(formData);


  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg col-md-6 mx-auto">
        <h2 className="text-center mb-4">Signup</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100">
            Signup
          </button>
          <br /><br />
           <Link to="/login"><button type="submit" className="btn btn-primary w-100">
           Signin
          </button></Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
