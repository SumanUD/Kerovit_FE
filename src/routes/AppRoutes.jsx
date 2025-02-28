import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/About";
import Contact from "../pages/Contact";
import Catalogue  from "../pages/Catalogue";
import Collection from "../pages/Collection";
import CustomerCare from "../pages/CustomerCare";
import More from "../pages/More";
import SingleProduct from "../pages/SingleProduct"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/where_to_buy" element={<Contact />} />
        <Route path="/customer" element={<CustomerCare />} />
        <Route path="/more" element={<More />} />
        <Route path="/single_product" element={<SingleProduct />} />


      </Routes>
    </Router>
  );
};

export default App;
