import React from "react";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/home";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/login";

const App = () => {
  return (
    <>
      <Login />
      <Navbar />
      <Home />
      <Dashboard />
    </>
  );
};

export default App;
