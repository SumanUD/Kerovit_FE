import { useState } from "react";
import Footer from "../../components/Footer";
import "../../styles/allProducts.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";


const AllProduct = () => {
  const initialProducts = [
    { id: 1, img: "/random_product.png", name: "Aenon" },
    { id: 2, img: "/random_product.png", name: "Agalia" },
    { id: 3, img: "/random_product.png", name: "Alana" },
    { id: 4, img: "/random_product.png", name: "Amelia" },
    { id: 5, img: "/random_product.png", name: "Product 5" },
    { id: 6, img: "/random_product.png", name: "Product 6" },
  ];

  const moreProducts = [
    { id: 7, img: "/random_product.png", name: "Product 7" },
    { id: 8, img: "/random_product.png", name: "Product 8" },
    { id: 9, img: "/random_product.png", name: "Product 9" },
    { id: 10, img: "/random_product.png", name: "Product 10" },
    { id: 11, img: "/random_product.png", name: "Product 11" },
    { id: 12, img: "/random_product.png", name: "Product 12" },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially

  const loadMoreProducts = () => {
    const newProducts = moreProducts.slice(0, 6); // Load 6 at a time
    setProducts((prev) => [...prev, ...newProducts]); // Append to existing products
    setVisibleCount((prev) => prev + newProducts.length);
  };

  return (
    <>
    <Navbar />
      <main className="allProductMain">
        <div className="prod_details">
          <h2>FAUCET</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        {/* Product Grid */}
        <div className="product_grid">
          {products.map((product) => (
            <div key={product.id} className="product_card">
              <Link to="/product_var_listing">
                  <img src={product.img} alt={product.name} />
              </Link>

              <p>{product.name}</p>
            </div>
          ))}
        </div>

        {/* Load More Button (Visible Only If More Products Exist) */}
        {products.length < initialProducts.length + moreProducts.length && (
          <button className="load-more" onClick={loadMoreProducts}>
            Load More
          </button>
        )}
      </main>

      <Footer />
    </>
  );
};

export default AllProduct;
