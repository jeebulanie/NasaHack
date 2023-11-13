import React from "react";
import MainRoutes from "./routing/MainRoutes";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import axios from "axios";

const App = () => {
  return (
    <>
      <Navbar />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
