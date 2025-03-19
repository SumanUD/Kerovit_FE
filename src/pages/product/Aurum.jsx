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



const Aurum = () => {

  const products = [
    { id: 1, img: "/single_product.png", name: "Faucets" },
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
          <h2>Aurum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            placeat aperiam exercitationem autem error eos soluta dolor cupiditate
            numquam
          </p>

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

                  <p>{product.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" onClick={handleNextSlide}>Swipe</button>
        </div>

        

      </main>
      </div>

      <Footer />
    </>
  );
};

export default Aurum;
