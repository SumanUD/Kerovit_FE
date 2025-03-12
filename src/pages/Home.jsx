import Navbar from "../components/Navbar";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";


const Home = () => {

  const products = [
    { id: 1, img: "/random_product.png", name: "Faucets" },
    { id: 2, img: "/shower.png", name: "Showers" },
    { id: 3, img: "/basin.png", name: "Basin" },
    { id: 4, img: "/toilet.png", name: "Toilet" },
    { id: 5, img: "/random_product.png", name: "Product 5" },
    { id: 6, img: "/random_product.png", name: "Product 6" },
  ];
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const blogPosts = [
    { id: 1, img: "/random_product.png", title: "Blog 1", desc: "Lorem ipsum, dolor sit" },
    { id: 2, img: "/random_product.png", title: "Blog 2", desc: "Lorem ipsum, dolor sit" },
    { id: 3, img: "/random_product.png", title: "Blog 3", desc: "Lorem ipsum, dolor sit" },
    { id: 4, img: "/random_product.png", title: "Blog 4", desc: "Lorem ipsum, dolor sit" },
    { id: 5, img: "/random_product.png", title: "Blog 5", desc: "Lorem ipsum, dolor sit" },
  ];


  const swiperRefBlog = useRef(null);
  const handleNextBlogSlide = () => {
    if (swiperRefBlog.current) {
      swiperRefBlog.current.slideNext();
    }
  };


  return (
    <>
      <Navbar />
      {/* <Header /> */}
      <main className="home">
        <div className="homebanner">

          <FaWhatsapp className="whatsapp-icon" />

        </div>

        <div className="home_categories">
          <h2>Categories</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            placeat aperiam exercitationem autem error eos soluta dolor cupiditate
            numquam
          </p>

          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={2}
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
                  <img src={product.img} alt={product.name} />
                  <p>{product.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" onClick={handleNextSlide}>Swipe</button>
        </div>

        <div className="home_collections">

          <h2>Collections</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, placeat aperiam exercitationem autem error eos soluta dolor cupiditate numquam</p>

        </div>
        <div className="home_aurum">
          <div className="title-container">
            <h2>aurum</h2>
            <img src="/aurum_A.png" alt="A icon" className="aurum-icon" />
          </div>
          <p>Discover luxury with Aurum<br /> Our most premium collection that blends elegance with nature’s hues.</p>
          <img src="/single_product.png" alt="Single Product image" />
          <button type="button">
            <Link to="/aurum" className="showMoreBtn">Show More</Link>
          </button>
        </div>

        <div className="home_klassic">
          <div className="title-container">
            <h2 className="klassic_heading">KLASSIC</h2>
            <img src="/klassic_K.png" alt="K icon" className="klassic-icon" />
          </div>
          <div className="underline"></div>
          <p className="klassic_desc">
            Discover luxury with Aurum<br /> Our most premium collection that blends elegance with nature’s hues.
          </p>
          <img src="/klassic.png" alt="Single Product image" />
          <button type="button">
            <Link to="/aurum" className="showMoreBtn">Show More</Link>
          </button>
        </div>

        <div className="first_banner">
          <div className="inside_banner_content">
            <h2>world of kerovit</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptas eveniet molestiae repudiandae sapiente accusamus</p>
            <button className="locate">locate a store</button>
          </div>
        </div>


        <div className="second_banner">
          <div className="inside_banner_content">
            <h2>the catalogue</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptas eveniet molestiae repudiandae sapiente accusamus</p>
            {/* <button className="locate">locate a store</button> */}
          </div>
          <div className="catalogue">
            <a href="#">General product catalogue</a>
            <a href="#">General product catalogue</a>
          </div>
        </div>

        <div className="home_aboutus">
          <div className="inside_banner_content">
            <h2>about us</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia voluptas eveniet molestiae repudiandae sapiente accusamus</p>
            <button className="read_more">read more</button>
          </div>
        </div>

        <div className="home_blog">
          <h2>Blog</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, placeat aperiam exercitationem autem error eos soluta dolor cupiditate numquam</p>

          {/* Swiper for Blog Section */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRefBlog.current = swiper)} // Assign Swiper instance
          >
            {blogPosts.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="inside text-left">
                  <img src={blog.img} alt={blog.title} />
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" onClick={handleNextBlogSlide}>Swipe</button>
        </div>

        <div className="home_contact">
          <div className="inside_banner_content">
            <form className="contact_form">
              <input type="text" placeholder="Name  |" />
              <input type="email" placeholder="Email  |" />
              <input type="tel" placeholder="Phone  |" />
              <input type="text" placeholder="City/State  |" />
              <input type="text" placeholder="Message  |" />

              {/* <textarea placeholder="Message"></textarea> */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>



      </main>
      <Footer />
    </>
  );
};

export default Home;
