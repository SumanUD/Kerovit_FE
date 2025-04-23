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
const categoryInfo = {
  name: "basin",
  description: "Whether you’re drawn to the sculptural beauty of Aurum or the simplicity of Klassic, our basins bring a sense of balance to your daily rituals.",
}


const Basin = () => {
  return (
    <>
      <Navbar />

      <Categories aurumImages={aurumImages} klassicImages={klassicImages} categoryInfo={categoryInfo} />

      
      <Footer />
    </>
  );
};

export default Basin;
