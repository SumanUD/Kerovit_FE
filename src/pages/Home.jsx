import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.scss";

const Home = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Header /> */}
      <main className="home">
        <div className="homebanner">

        </div>

        <div className="home_categories">
          <h2>Categories</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, placeat aperiam exercitationem autem error eos soluta dolor cupiditate numquam</p>

          <div className="product_with_name">
            <div className="inside text-center">
              <img src="/random_product.png" alt="" />
              <p>Product Name</p>
            </div>

            <div className="inside text-center">
              <img src="/random_product.png" alt="" />
              <p>Product Name</p>
            </div>

          </div>

          <button type="button">Swipe</button>

        </div>

        <div className="home_collections">

          <h2>Collections</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, placeat aperiam exercitationem autem error eos soluta dolor cupiditate numquam</p>

        </div>

        <div className="home_aurum">

          <h2>aurum</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus</p>

          <img src="/single_product.png" alt="Single Product image" />
          <button type="button">Show more</button>
        </div>

        <div className="home_klassic">
          <h2 className="klassic_heading">KLASSIC</h2>
          <div className="underline"></div>

          <p className="klassic_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          </p>

          <img src="/single_product.png" alt="Single Product image" />
          <button type="button">Show more</button>

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

          <div className="product_with_name">
            <div className="inside">
              <img src="/random_product.png" alt="" />
              <h3>blog 1</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident sed placeat enim eligendi non obcaecati</p>
            </div>

            <div className="inside">
              <img src="/random_product.png" alt="" />
              <h3>blog 2</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident sed placeat enim eligendi non obcaecati</p>
            </div>

          </div>

          <button type="button">Swipe</button>

        </div>
        <div className="home_contact">
          <div className="inside_banner_content">
            <form className="contact_form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="tel" placeholder="Phone" />
              <input type="text" placeholder="City/State" />
              <textarea placeholder="Message"></textarea>
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
