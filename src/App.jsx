import React from "react";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/home";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Dashboard />
    </>
  );
};

export default App;
