import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/blog.scss";
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



const BlogPage = () => {

  const blogPosts = [
    { id: 1, img: "/blog3.png", title: "Traditional vs. Wall-Mounted Bathroom Faucets: A Comparative Guide", desc: "Lorem ipsum, dolor sit" },
    { id: 2, img: "/blog3.png", title: "Choosing the Right Faucet Finish for Your Bathroom – A Guide to Chrome, Gold, and Matte Black", desc: "Lorem ipsum, dolor sit" },
    { id: 3, img: "/blog3.png", title: "Blog 3", desc: "Lorem ipsum, dolor sit" },
    { id: 4, img: "/blog3.png", title: "Blog 4", desc: "Lorem ipsum, dolor sit" },
    { id: 5, img: "/blog3.png", title: "Blog 5", desc: "Lorem ipsum, dolor sit" },
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

      <main className="blogPage">
        <div className="banner">

        </div>

        <div className="home_blog">
          <h2 className="blog_title">Latest Posts</h2>
          {/* <img src="home_blog_heading.png" alt="" className="home_blog_heading"/> */}
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
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
