import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import OurCompany from "./pages/OurCompany";
import Footer from "./components/Footer";
import Nbfc from "./pages/Nbfc";

function Router() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<OurCompany />} />
        <Route path="/nbfc" element={<Nbfc />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
