import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
const notify = (message) => {
  // toast.success('successful')
  // toast.warning('Danger')
};

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email };
    axios
      .post("http://127.0.0.1:8000/auth/forgot-password", data)
      .then((res) => {
        toast.success("Please Check Your mail to change password");
      })
      .catch((res) => {
        toast.warn("Something went error!!!");
      });
  };

  return (
    <div class="bggg">
      <form className="passform" onSubmit={handleSubmit}>
        <h1 class="headfo">Forgot Password</h1>

        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* 

        <button type="submit">Submit</button> */}
        <button type="submit" onClick={notify}>
          Submit
        </button>
        <ToastContainer position="top-center" />
      </form>
    </div>
  );
};

export default ForgotPassword;
