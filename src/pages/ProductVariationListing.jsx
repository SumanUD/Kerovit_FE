import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { Fragment } from "react";

const initialProducts = [
    { id: 1, img: "/product/single_var1.png", name: "MODEL NO: ABCD1234" },
    { id: 2, img: "/product/single_var.png", name: "MODEL NO: ABCD1234" },
    { id: 3, img: "/product/single_var.png", name: "MODEL NO: ABCD1234" },
    { id: 4, img: "/product/single_var.png", name: "MODEL NO: ABCD1234" },
    // { id: 5, img: "/product/single_var.png", name: "Product 5" },
    // { id: 6, img: "/product/single_var.png", name: "Product 6" },
];
const moreProducts = [
    { id: 7, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 7" },
    { id: 8, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 8" },
    { id: 9, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 9" },
    { id: 10, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 10" },
    { id: 11, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 11" },
    { id: 12, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 12" },
];


export const ProductVariationListing = () => {

  const {series, product, variation} = useParams();
  const [products, setProducts] = useState(initialProducts);
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMoreProducts = () => {
    const newProducts = moreProducts.slice(0, 6);
    setProducts((prev) => [...prev, ...newProducts]);
    setVisibleCount((prev) => prev + newProducts.length);
  };

  const [loadSimulate, setLoadSimulate] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
        setLoadSimulate(false)
    }, 1500);
  }, [])
        

  return (
    <main className={`allProductMain ${series == 'aurum' ? 'background-dark' : 'background-light'}`}>      

      {
        !loadSimulate ?
        <Fragment>
          <div className="prod_details">
            <h2>{variation.toUpperCase()}</h2>
            <p>Inspired by the calmness of water springs and the majestic cascading waterfalls, our Aenon range of showers beautifully blends the power of flow and the feeling of rejuvenating refreshment.</p>
          </div>
          <div className="product_grid">
            {products.map((item) => (
              <div className="product_card" key={item.id} >
                <Link to={`/collection/${series}/${product}/${variation}/${item.name.match(/MODEL NO: (.+)/)[1].split(' ').join('_')}`} >
                <img src={item.img} alt={item.name} />
                <p>{item.name}</p>
                </Link>
              </div>
                
            ))}
          </div>

          {products.length < initialProducts.length + moreProducts.length && (
            <button className="load-more" onClick={loadMoreProducts}>
              Load More
            </button>
          )}
        </Fragment>: 
        <div className="productListing skeleton-load">
          <div className="loading-heading"></div>
          <div className="loading-line-group">
              <div className="loading-line"></div>
              <div className="loading-line"></div>                    
          </div>
          <div className="grid-loading-container">
              <div className="loading-box"></div>
              <div className="loading-box"></div>
              <div className="loading-box"></div>
              <div className="loading-box"></div>  
          </div>              
      </div>
      }
    </main>
  )
}
