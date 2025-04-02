import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/blog.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";

const BlogPage = () => {
  const blogPosts = [
    { id: 1, img: "/blog3.png", title: "Traditional vs. Wall-Mounted Bathroom Faucets: A Comparative Guide", desc: "Lorem ipsum, dolor sit" },
    { id: 2, img: "/blog3.png", title: "Choosing the Right Faucet Finish for Your Bathroom – A Guide to Chrome, Gold, and Matte Black", desc: "Lorem ipsum, dolor sit" },
    { id: 3, img: "/blog3.png", title: "Blog 3", desc: "Lorem ipsum, dolor sit" },
    { id: 4, img: "/blog3.png", title: "Blog 4", desc: "Lorem ipsum, dolor sit" },
    { id: 5, img: "/blog3.png", title: "Blog 5", desc: "Lorem ipsum, dolor sit" },
  ];

  const swiperRefBlog1 = useRef(null);
  const swiperRefBlog2 = useRef(null);

  const handleNextBlogSlide1 = () => {
    if (swiperRefBlog1.current) {
      swiperRefBlog1.current.slideNext();
    }
  };

  const handleNextBlogSlide2 = () => {
    if (swiperRefBlog2.current) {
      swiperRefBlog2.current.slideNext();
    }
  };

  return (
    <>
      <Navbar />

      <main className="blogPage">
        <div className="banner">
          <div className="banner_content">
            <h2 className="banner_title">Blog</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, facilis! Eum dolorum sapiente officia ipsum in consectetur impedit possimus, modi, nisi quas aut voluptate tempore!</p>
          </div>
        </div>

        <div className="latest_post">
          <h2 className="blog_title">Latest Posts</h2>
          <p>Explore our Blog and witness a world where desires take shape.</p>

          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRefBlog1.current = swiper)}
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

          <button type="button" onClick={handleNextBlogSlide1}>
            Swipe <BsArrowRight className="right_arrow" />
          </button>
        </div>

        <div className="latest_post">
          <h2 className="blog_title">Popular Posts</h2>
          <p>Explore our Blog and witness a world where desires take shape.</p>

          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRefBlog2.current = swiper)}
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

          <button type="button" onClick={handleNextBlogSlide2}>
            Swipe <BsArrowRight className="right_arrow" />
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;
