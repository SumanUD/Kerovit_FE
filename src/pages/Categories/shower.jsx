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
  name: "shower",
  description: "Whether you need an energizing start or a calming wind-down, our vast range of Aurum and Klassic collections has it all to match your space.",
}


const Shower = () => {
  return (
    <>
      <Navbar />

      <Categories aurumImages={aurumImages} klassicImages={klassicImages} categoryInfo={categoryInfo} />

      
      <Footer />
    </>
  );
};

export default Shower;
