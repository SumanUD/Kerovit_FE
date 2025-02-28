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
        {/* <Route path="/whats-new" element={<WhatsNew />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/career" element={<Career />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
