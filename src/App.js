import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

import ForgotPassword from "./components/ForgotPassword";
import NavBar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import CreatePost from "./components/CreatePost";
import UpdatePost from "./components/UpdatePost";
import Details from "./components/Details";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <div className="app">
          <NavBar />
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/createpost">
            <CreatePost />
          </Route>

          <Route exact path="/updatepost/:id">
            <UpdatePost />
          </Route>
          <Route exact path="/details/:id">
            <Details />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>

          <Footer />
        </div>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
