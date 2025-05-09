import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import AboutUs from "../pages/About";
// import Contact from "../pages/Contact";
import Catalogue from "../pages/Catalogue";
import Collection from "../pages/Collection";
import CustomerCare from "../pages/CustomerCare";
import More from "../pages/More";
import SingleProduct from "../pages/SingleProduct";
import WhereToBuy from "../pages/WhereToBuy";
import AllProduct from "../pages/product/allProducts";
import Aurum from "../pages/product/Aurum";
import AllVarProduct from "../pages/product/allVarProduct";
import BlogPage from "../pages/Blog";
import LatestPost from "../pages/LatestPosts";
import Categories1 from "../pages/Categories/categories1";
import Klassic from "../pages/product/Klassic";
import Shower from "../pages/Categories/shower";
import Accessories from "../pages/Categories/accessories";
import Basin from "../pages/Categories/basin";
import BathroomFurniture from "../pages/Categories/bathroom_furniture";
import Toilet from "../pages/Categories/toilet";
import LocateOurStore from "../pages/LocateOurStore";
import Career from "../pages/Career";
import Warranty from "../pages/warranty";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
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
        <Route path="/klassic" element={<Klassic />} />
        <Route path="/product_var_listing" element={<AllVarProduct />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/latestPost" element={<LatestPost />} />
        <Route path="/faucet" element={<Categories1 />} />
        <Route path="/shower" element={<Shower />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/basin" element={<Basin />} />
        <Route path="/bathroomFurniture" element={<BathroomFurniture />} />
        <Route path="/toilet" element={<Toilet />} />
        <Route path="/locate-our-store" element={<LocateOurStore />} />
        <Route path="/career" element={<Career />} />
        <Route path="/warranty" element={<Warranty />} />
      </Routes>
    </Router>
  );
};

export default App;
