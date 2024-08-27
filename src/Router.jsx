import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import OurCompany from "./pages/OurCompany";
import Footer from "./components/Footer";

function Router() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<OurCompany />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
