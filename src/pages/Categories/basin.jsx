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
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum velit enim quibusdam iusto. Quod, sed quasi officiis aperiam vitae cupiditate vel cumque rerum eligendi voluptas nemo? Eius, natus commodi!",
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
