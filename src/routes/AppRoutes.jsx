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
import WhereToBuy from "../pages/WhereToBuy"
import AllProduct from "../pages/product/allProducts";
import Aurum from "../pages/product/Aurum";
import AllVarProduct from "../pages/product/allVarProduct";


// import Career from "../pages/More/Career";
// import Resources from "../pages/More/Resources";
// import WhatsNew from "../pages/More/WhatsNew";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/where-to-buy" element={<WhereToBuy />} />
        <Route path="/customer" element={<CustomerCare />} />
        <Route path="/more" element={<More />} />
        <Route path="/single_product" element={<SingleProduct />} />
        <Route path="/product_listing" element={<AllProduct />} />
        <Route path="/aurum" element={<Aurum />} />
        <Route path="/product_var_listing" element={<AllVarProduct />} />
        <Route path="/about" element={<AboutUs />} />


        {/* <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/career" element={<Career />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
