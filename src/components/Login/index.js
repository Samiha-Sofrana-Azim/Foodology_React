import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = (message) => {
  // toast.success('successful')
  // toast.warning('Danger')
};
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    axios
      .post("http://127.0.0.1:8000/auth/login", data)
      .then((res) => {
        if (res.data.status === true) {
          localStorage.setItem("status", res.data.data.user.status);
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + res.data.data.access_token;
          localStorage.setItem("token", res.data.data.access_token);
        }
        if (localStorage.getItem("token")) {
          history.push("/dashboard");
        }
      })
      .catch((res) => {
        // alert("Something went error!!!");
        toast.warning("Something went error!!!!");
      });
  };

  return (
    <div class="bgg">
      <div class="socon">
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
        </a>

        <a href="#" class="google btn">
          <i class="fa fa-google fa-fw"></i> Login with Google+
        </a>
      </div>

      <form className="logform" onSubmit={handleSubmit}>
        <p class="manu">Or Log in manually:</p>
        <label>Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* <button type="submit">Submit</button> */}
        <button type="submit" onClick={notify}>
          Submit
        </button>
        <ToastContainer position="top-center" />
        <div>
          {" "}
          <span class="psw">
            <a href="http://localhost:3000/forgotpassword">Forgot password?</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
