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
import { BsArrowRight } from "react-icons/bs";



const Home = () => {

  const products = [
    { id: 1, img: "/random_product.png", name: "Faucets" },
    { id: 2, img: "/shower2.png", name: "Showers" },
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
    { id: 1, img: "/blog3.png", title: "Traditional vs. Wall-Mounted Bathroom Faucets: A Comparative Guide", desc: "Lorem ipsum, dolor sit" },
    { id: 2, img: "/blog2.png", title: "Choosing the Right Faucet Finish for Your Bathroom – A Guide to Chrome, Gold, and Matte Black", desc: "Lorem ipsum, dolor sit" },
    { id: 3, img: "/blog1.png", title: "Blog 3", desc: "Lorem ipsum, dolor sit" },
    { id: 4, img: "/blog2.png", title: "Blog 4", desc: "Lorem ipsum, dolor sit" },
    { id: 5, img: "/blog1.png", title: "Blog 5", desc: "Lorem ipsum, dolor sit" },
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
          <div className="bannerText">
            <h2>bathrooms</h2>

            <span className="h2_second">you <h2>desire</h2></span>
            <div className="bannerdescp">
              <img src="home page-08.png" alt="" className="line_image"/>
              <p>Let your desires come alive with the perfect fusion of form, function and usability with Kerovit. Featuring an eclectic blend of exquisite design, environment-friendly technology and unparalleled quality, Kerovit enhances your bathroom décor and experience.</p>

            </div>
          </div>

          <FaWhatsapp className="whatsapp-icon" />

        </div>

        <div className="home_categories">
          {/* <h2>Categories</h2> */}
          <img src="categories_heading.png" alt="" className="categories_heading"/>
          <p>
          Designed by skillfully unifying creativity and engineering, Kerovit has combined unmatched functional expertise with a promise of excellence, giving customers an exceptional experience that fulfils their heart's desires!
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
                   <Link to="categories1"><img src={product.img} alt={product.name} /></Link>
                  <p>{product.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" onClick={handleNextSlide}>Swipe <BsArrowRight className="right_arrow"/></button>
        </div>

        <div className="home_collections">

          <h2>Collections</h2>
          <p>Offering an impeccable blend of cutting-edge technology and contemporary design, Kerovit brings a diverse collection of faucets, sanitaryware, showers, bathroom furniture, and accessories with top-notch quality standards.</p>

        </div>
        <div className="home_aurum">
          <div className="title-container">
            {/* <h2>aurum</h2> */}
            <img src="aurum_heading.png" alt="" className="aurum_heading"/>
            <img src="/aurum_A.png" alt="A icon" className="aurum-icon" />
          </div>
          <p>Indulge in the luxury of Aurum, our exquisite collection that seamlessly blends elegance with nature's palette of perfection.</p>
          <img src="/single_product.png" alt="Single Product image" />
          <button type="button">
            <Link to="/aurum" className="showMoreBtn">Show More <BsArrowRight className="right_arrow"/></Link>
          </button>
        </div>

        <div className="home_klassic">
          <div className="title-container">
            {/* <h2 className="klassic_heading">KLASSIC</h2> */}
            <img src="klassic_heading.png" alt="" className="klassic_heading"/>
            <img src="/klassic_K.png" alt="K icon" className="klassic-icon" />
          </div>
        
          <p className="klassic_desc">
          Bring home the true definition of timeless luxury with our Klassic collection, which maintains sophistication at its peak with elegant, minimal aesthetics.
          </p>
          <img src="/klassic.png" alt="Single Product image" />
          <button type="button">
            <Link to="/klassic" className="showMoreBtn">Show More <BsArrowRight className="right_arrow"/></Link>
          </button>
        </div>

        <div className="first_banner">
          <div className="inside_banner_content">
            <h2>world of kerovit</h2>
            <p>Featuring great strength, durability, and a higher-quality finish, Kerovit today stands as a definitive expression of modern lifestyles, exquisitely designed to match the desires of the new India.</p>
            <button className="locate">locate a store</button>
          </div>
        </div>
        <div className="second_banner">
          <div className="inside_banner_content">
            <h2>the catalogue</h2>
            <p>Browse our latest catalogue and discover the perfect bathroom solutions for your home.</p>
            {/* <button className="locate">locate a store</button> */}
          </div>
          <div className="catalogue">
            <a href="#">General product catalogue</a>
            <a href="#">General product catalogue</a>
          </div>
        </div>

        <div className="home_aboutus">
          <div className="inside_banner_content">
            {/* <h2>about us</h2> */}
            <img src="aboutus_heading.png" alt="" className="aboutus_heading"/>
            <p>Kerovit, a distinguished brand from the house of Kajaria, was introduced to transform modern bathroom spaces by creating value that exceeds customers' expectations.</p>
            <Link to="/about">
              <button className="read_more">
                read more 
              </button>
              </Link>
          </div>
        </div>

        <div className="home_blog">
          {/* <h2>Blog</h2> */}
          <img src="home_blog_heading.png" alt="" className="home_blog_heading"/>
          <p>Explore our Blog and witness a world where desires take shape.</p>

          {/* Swiper for Blog Section */}
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
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
                  <img src={blog.img} alt={blog.title} className="swiperImg" />
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button type="button" onClick={handleNextBlogSlide}>Swipe<BsArrowRight className="right_arrow"/></button>
        </div>

        <div className="home_contact">
          <div className="inside_banner_content">
            <h2 ><span>submit</span> your query</h2>
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
