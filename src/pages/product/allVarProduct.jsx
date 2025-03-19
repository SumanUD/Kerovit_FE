import { useState } from "react";
import Footer from "../../components/Footer";
import "../../styles/allProducts.scss";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AllVarProduct = () => {
  const initialProducts = [
    { id: 1, img: "single_var_product.png", name: "Aenon" },
    { id: 2, img: "single_var_product.png", name: "Agalia" },
    { id: 3, img: "single_var_product.png", name: "Alana" },
    { id: 4, img: "single_var_product.png", name: "Amelia" },
    { id: 5, img: "single_var_product.png", name: "Product 5" },
    { id: 6, img: "single_var_product.png", name: "Product 6" },
  ];

  const moreProducts = [
    { id: 7, img: "single_var_product.png", name: "Product 7" },
    { id: 8, img: "single_var_product.png", name: "Product 8" },
    { id: 9, img: "single_var_product.png", name: "Product 9" },
    { id: 10, img: "single_var_product.png", name: "Product 10" },
    { id: 11, img: "single_var_product.png", name: "Product 11" },
    { id: 12, img: "single_var_product.png", name: "Product 12" },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMoreProducts = () => {
    const newProducts = moreProducts.slice(0, 6);
    setProducts((prev) => [...prev, ...newProducts]);
    setVisibleCount((prev) => prev + newProducts.length);
  };

  return (
    <>
    <Navbar />
      <main className="allProductMain">
        <div className="prod_details">
          <h2>CATEGORY NAME</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        <div className="product_grid">
          {products.map((product) => (
            <Link to={`/single_product`} key={product.id} className="product_card">
              <img src={product.img} alt={product.name} />
              <p>{product.name}</p>
            </Link>
          ))}
        </div>

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

export default AllVarProduct;
