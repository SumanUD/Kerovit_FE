import Navbar from "../../components/Navbar";
// import Header from "../components/Header";
import Footer from "../../components/Footer";
import Categories from "../../components/Categories";
import "../../styles/categories1.scss";



const aurumImages = [
    "/product/1.jpg",
    "/product/2.jpg",
    "/product/3.jpg",
];

const klassicImages = [
    "/product/4.jpg",
    "/product/5.jpg",
    // "/product/1.jpg",
];


const Categories1 = () => {
  return (
    <>
      <Navbar />

      <Categories aurumImages={aurumImages} klassicImages={klassicImages} />

      
      <Footer />
    </>
  );
};

export default Categories1;
