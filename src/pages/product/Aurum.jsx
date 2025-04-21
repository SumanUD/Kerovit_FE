import Navbar from "../../components/Navbar";
// import Header from "../components/Header";
import Footer from "../../components/Footer";
import "../../styles/aurum.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";



const Aurum = () => {

  const products = [
    { id: 1, img: "/product/single_product.png", name: "Faucet", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit omnis id dolorem est illo officia doloremque, voluptates quo cupiditate minima recusandae! Tempora, iure totam. Doloremque consectetur aspernatur quibusdam aliquid." },
    { id: 2, img: "/aurum_shower.png", name: "Shower", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit omnis id dolorem est illo officia doloremque, voluptates quo cupiditate minima recusandae! Tempora, iure totam. Doloremque consectetur aspernatur quibusdam aliquid." },
    { id: 3, img: "/aurum_basin.png", name: "Basin",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit omnis id dolorem est illo officia doloremque, voluptates quo cupiditate minima recusandae! Tempora, iure totam. Doloremque consectetur aspernatur quibusdam aliquid." },
    { id: 4, img: "/aurum_toilet.png", name: "Toilet",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit omnis id dolorem est illo officia doloremque, voluptates quo cupiditate minima recusandae! Tempora, iure totam. Doloremque consectetur aspernatur quibusdam aliquid." },
    { id: 5, img: "/aurum_bath_fur.png", name: "Bathroom Furniture",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit omnis id dolorem est illo officia doloremque, voluptates quo cupiditate minima recusandae! Tempora, iure totam. Doloremque consectetur aspernatur quibusdam aliquid." },
    { id: 6, img: "/aurum_accessories.png", name: "Accessories",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus impedit omnis id dolorem est illo officia doloremque, voluptates quo cupiditate minima recusandae! Tempora, iure totam. Doloremque consectetur aspernatur quibusdam aliquid." },
  ];
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };
  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <>
      <Navbar />

      
      <div className="main-content">

      <main className="aurum">

        <div className="aurum_slider">
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 2 },
            }}
  
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
        

            {products.map((product) => (
              <SwiperSlide key={product.id}>
                
                <div className="inside">

                  <Link to="/product_listing" className="inside_contents">
                    <img src={product.img} alt={product.name} />
                    <div className="inside_text_content">
                      <h2>{product.name}</h2>
                      <p>{product.description}</p>
                    </div>
                  </Link>
                    {/* <p>{product.name}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper_nav_buttons">
            <button type="button" onClick={handlePrevSlide}>Swipe <BsArrowLeft className="left_arrow"/></button>
            <button type="button" onClick={handleNextSlide}>Swipe <BsArrowRight className="right_arrow"/></button>
          </div>
        </div>

        

      </main>
      </div>

      <Footer />
    </>
  );
};

export default Aurum;
