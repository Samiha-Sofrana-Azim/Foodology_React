import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const notify = (message) => {
  // toast.success('successful')
  // toast.warning('Danger')
};

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmpassword,
    };
    axios
      .post("http://127.0.0.1:8000/auth/register", data)
      .then((res) => {
        toast.success("Please Check Your Mail for Verification!");
      })
      .catch((res) => {
        toast.warning("Something went error!!!!");
      });
  };

  return (
    <div class="bg">
      <form className="regform" onSubmit={handleSubmit}>
        <h1 class="headreg">Registration</h1>

        <label>Name</label>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />

        <label>Email</label>

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />

        <label>Password</label>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <label>Confirm Password</label>

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />

        {/* <button type="submit">Submit</button>   */}
        <button type="submit" onClick={notify}>
          Submit
        </button>
        <ToastContainer position="top-center" />
        <div class="term">
          By creating an account you agree to our{" "}
          <a href="https://en.wikipedia.org/wiki/Terms_of_service">
            Terms & Privacy
          </a>
          .
        </div>
        <div class="container signin">
          <div>
            Already have an account?{" "}
            <a href="http://localhost:3000/login">Sign in</a>.
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
