import Navbar from "../../components/Navbar";
// import Header from "../components/Header";
import Footer from "../../components/Footer";
import Categories from "../../components/Categories";
import "../../styles/categories1.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const categorieList = [
  {
    aurumImages:[
      "/product/1.jpg",
      "/product/2.jpg",
      "/product/3.jpg",
    ],
    klassicImages:[
      "/product/4.jpg",
      "/product/5.jpg",      
    ],
    categoryInfo:{
      name: "accessories",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum velit enim quibusdam iusto. Quod, sed quasi officiis aperiam vitae cupiditate vel cumque rerum eligendi voluptas nemo? Eius, natus commodi!",
    }
  },
  {
    aurumImages:[
      "/product/1.jpg",
      "/product/2.jpg",
      "/product/3.jpg",
    ],
    
    klassicImages:[
      "/product/4.jpg",
      "/product/5.jpg",    
    ],  
    categoryInfo:{
      name: "faucet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum velit enim quibusdam iusto. Quod, sed quasi officiis aperiam vitae cupiditate vel cumque rerum eligendi voluptas nemo? Eius, natus commodi!",
    }
  },
  {
    aurumImages:[
      "/product/1.jpg",
      "/product/2.jpg",
      "/product/3.jpg",
    ],    
    klassicImages:[
      "/product/4.jpg",
      "/product/5.jpg",      
    ],    
    categoryInfo:{
      name: "shower",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum velit enim quibusdam iusto. Quod, sed quasi officiis aperiam vitae cupiditate vel cumque rerum eligendi voluptas nemo? Eius, natus commodi!",
    }
  },
  {
    aurumImages:[
      "/product/1.jpg",
      "/product/2.jpg",
      "/product/3.jpg",
    ],
    klassicImages:[
      "/product/4.jpg",
      "/product/5.jpg",      
    ],
    categoryInfo:{
      name: "basin",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum velit enim quibusdam iusto. Quod, sed quasi officiis aperiam vitae cupiditate vel cumque rerum eligendi voluptas nemo? Eius, natus commodi!",
    }
  },
  {
    aurumImages:[
      "/product/1.jpg",
      "/product/2.jpg",
      "/product/3.jpg",
    ],    
    klassicImages:[
      "/product/4.jpg",
      "/product/5.jpg",      
    ],    
    categoryInfo:{
      name: "toilet",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum velit enim quibusdam iusto. Quod, sed quasi officiis aperiam vitae cupiditate vel cumque rerum eligendi voluptas nemo? Eius, natus commodi!",
    }  
  },
  {
    aurumImages:[
      "/product/1.jpg",
      "/product/2.jpg",
      "/product/3.jpg",
    ],    
    klassicImages:[
      "/product/4.jpg",
      "/product/5.jpg",      
    ],    
    categoryInfo:{
      name: "Bathroom Furniture",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum velit enim quibusdam iusto. Quod, sed quasi officiis aperiam vitae cupiditate vel cumque rerum eligendi voluptas nemo? Eius, natus commodi!",
    }
  },  
]
const Accessories = () => {
  return (
    <>
      <Navbar />        
        <div className="category-page">
          <div className="swiper-container">
            <Swiper
              spaceBetween={0}
              slidesPerView={3}
              centeredSlides={true}
              roundLengths={true}
              loop={true}
              // loopAdditionalSlides={30}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                0:  { slidesPerView: 1 },
                740: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
              }}
              modules={[Navigation]}
            >
              {categorieList.map((item, index) => (
                <SwiperSlide key={index}>
                  <Categories
                    aurumImages={item.aurumImages}
                    klassicImages={item.klassicImages}
                    categoryInfo={item.categoryInfo}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation buttons */}
            <div className="swiper-button-prev">
              <FaChevronLeft/>
            </div>
            <div className="swiper-button-next">
              <FaChevronRight/>
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default Accessories;
