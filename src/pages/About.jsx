import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/about.scss";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const manufPlant = [
  { id: 1, img: "/aboutus/faucet_plant.png", name: "FAUCET Plant", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
  { id: 2, img: "/aboutus/faucet_plant.png", name: "Showers", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
  { id: 3, img: "/aboutus/faucet_plant.png", name: "Basin", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
  { id: 4, img: "/aboutus/faucet_plant.png", name: "Toilet", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
  { id: 5, img: "/aboutus/faucet_plant.png", name: "plant 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
  { id: 6, img: "/aboutus/faucet_plant.png", name: "plant 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
];


const certificates = [
  { id: 1, img: "aboutus/certificate1.png" },
  { id: 2, img: "aboutus/certificate2.png" },
  { id: 3, img: "aboutus/certificate3.png" },
  { id: 4, img: "aboutus/certificate4.png" },
  { id: 5, img: "aboutus/certificate1.png" },
  { id: 6, img: "aboutus/certificate2.png" },
  { id: 7, img: "aboutus/certificate3.png" },
  { id: 8, img: "aboutus/certificate4.png" },
]

const About = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperCertificateInstance, setSwiperCertificateInstance] = useState(null);


  const handleNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleNextCertificateSlide = () => {
    if (swiperCertificateInstance) {
      swiperCertificateInstance.slideNext();
    }
  };


  return (
    <main className="aboutus_main">
      <Navbar />

      <div className="homebanner">
        <div className="bannerText">
          <h2>bathrooms</h2>
          <span className="h2_second">
            you <h2>desire</h2>
          </span>
          <div className="bannerdescp">
            <img src="home page-08.png" alt="" className="line_image" />
            <p>
              Let your desires come alive with the perfect fusion of form, function, and usability with Kerovit.
            </p>
          </div>
        </div>
        <FaWhatsapp className="whatsapp-icon" />
      </div>

      <div className="belowbanner">
        <h2>from the house of kajaria kerovit is a definitive expression of contemporary design.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aspernatur distinctio accusantium incidunt, amet iure magnam dolores iste ut itaque architecto labore nostrum, autem hic et, necessitatibus quo corrupti eum!
        </p>
        <button className="read_more">read more</button>
      </div>

      <div className="directorMessage">
        <img src="/aboutus/director.png" alt="" />
        <div className="belowImageContent">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ea atque minima expedita eius magni obcaecati. Blanditiis recusandae in reiciendis id consequuntur! Corporis repellat iure omnis expedita est quas vitae.
          </p>
          <button className="read_more">read more</button>
        </div>
      </div>

      <div className="manufacturingPlant">
        <h2 className="mpTitle">manufacturing plant</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={setSwiperInstance}
        >
          {manufPlant.map((plant) => (
            <SwiperSlide key={plant.id}>
              <div className="inside">
                <img src={plant.img} alt={plant.name} />
                <h2>{plant.name}</h2>
                <p>{plant.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


        <button className="prev-btn"><MdKeyboardArrowLeft /></button>
        <button className="next-btn"><MdKeyboardArrowRight /></button>


        <button type="button" className="swipeButton" onClick={handleNextSlide}>Swipe <BsArrowRight className="right_arrow" /></button>
      </div>

      <div className="certifications">
        <h2 className="mpTitle">Certifications</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={4}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".next-btn-cert", prevEl: ".prev-btn-cert" }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          onSwiper={setSwiperCertificateInstance}
        >
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.id}>
              <div className="inside">
                <img src={certificate.img} alt="Certificate" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="prev-btn-cert"><MdKeyboardArrowLeft /></button>
        <button className="next-btn-cert"><MdKeyboardArrowRight /></button>

        <button type="button" className="swipeButton" onClick={handleNextCertificateSlide}>
          Swipe <BsArrowRight className="right_arrow" />
        </button>
      </div>

      <Footer />
    </main>
  );
};

export default About;
