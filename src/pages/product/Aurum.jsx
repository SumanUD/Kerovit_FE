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



const Aurum = () => {

  const products = [
    { id: 1, img: "/product/single_product.png", name: "Faucets" },
    { id: 2, img: "/single_product.png", name: "Showers" },
    { id: 3, img: "/single_product.png", name: "Basin" },
    { id: 4, img: "/single_product.png", name: "Toilet" },
    { id: 5, img: "/single_product.png", name: "Bathroom Furniture" },
    { id: 6, img: "/single_product.png", name: "Accessories" },
  ];
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(); // Move to the next slide
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-content">

      <main className="aurum">

        <div className="aurum_slider">
          <h2>faucet</h2>
          <p>Designed with skillfull unification of creativity and engineering. Kerovit has combined un-matched functional expertise with a promise of excellence giving the customers an alluring experience they desire!</p>

          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="inside text-center">
                <Link to="/product_listing">
                    <img src={product.img} alt={product.name} />
                </Link>

                  {/* <p>{product.name}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" onClick={handleNextSlide}>Swipe <BsArrowRight className="right_arrow"/></button>
        </div>

        

      </main>
      </div>

      <Footer />
    </>
  );
};

export default Aurum;
