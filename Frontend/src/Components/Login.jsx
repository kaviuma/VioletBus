import React, { useState } from "react";
import AuthStore from "../Store/Auth.store";

export default function Login() {
  const { signin } = AuthStore();
  const [form, setForm] = useState({ email: "", password: "" });
 

  const handleChange = (e) => {
    setForm({ 
        ...form, 
        [e.target.name]: e.target.value 
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
     
    await signin(form);
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center mt-5">
      <div className="card login-card shadow p-4 p-md-5">
        <h2 className="text-center fw-bold mb-4 text-primary">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-semibold">
            Signin
          </button>
        </form>

        
      </div>
    </div>
  );
}
