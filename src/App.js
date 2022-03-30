import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import Contact from "./Components/ContactPage/Contact";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home/Home";
import React from "react";

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/AllProducts" element={<AllProducts />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </React.Fragment>
    </Router>
  );
}

export default App;
