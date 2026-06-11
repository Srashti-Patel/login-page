import React  from "react";
import { Link } from "react-router-dom";
import signupValidation from "./signupValidation";
import { useState } from "react";

function Signup() {

      const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
      });
      const [error, setError] = useState({});
      const handleInput = (event) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login validation here
        setError(signupValidation(values));
      };


  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name:</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Name"
                name="name"
                className="form-control rounded-0"
                onChange={handleInput}
              />
              {error.name && <p className="text-danger">{error.name}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="email">
                <strong>Email:</strong>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                className="form-control rounded-0"
                onChange={handleInput}
              />
              {error.email && <p className="text-danger">{error.email}</p>}
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                <strong>Password:</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                className="form-control rounded-0"
                onChange={handleInput}
              />
              {error.password && <p className="text-danger">{error.password}</p>}
            </div>
            <button className="btn btn-success w-100 rounded-0">
              <strong>Sign Up</strong>
            </button>
            <p>You are agree to out terms and conditions</p>
            <Link
              to="/"
              className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
