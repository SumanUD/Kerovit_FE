import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

const initialProducts = [
    { id: 1, img: "/product/Collection  & Product pages-28.png", name: "Aenon" },
    { id: 2, img: "/product/Collection  & Product pages-27.png", name: "Agalia" },
    { id: 3, img: "/product/Collection  & Product pages-30.png", name: "Alana" },
    { id: 4, img: "/product/Collection  & Product pages-29.png", name: "Amelia" },
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

export const ProductListing = () => {

    const {product, series} = useParams()

    const [products, setProducts] = useState(initialProducts.slice(0, 4)); // Show first 4 initially
    const [visibleCount, setVisibleCount] = useState(4); // Start with 4 products  
    const loadMoreProducts = () => {
      const remainingProducts = [...initialProducts.slice(4), ...moreProducts]; // Remaining products after initial 4
      const nextProducts = remainingProducts.slice(0, 4); // Load 4 at a time
  
      setProducts((prev) => [...prev, ...nextProducts]); // Append to existing products
      setVisibleCount((prev) => prev + nextProducts.length);
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
                    <h2>{product.toUpperCase()}</h2>
                    <p>
                        Designed with a skillful unification of creativity and engineering.
                        Kerovit has combined unmatched functional expertise with a promise
                        of excellence, giving customers an alluring experience they desire!
                    </p>
                </div>
                <div className="product_grid">
                    {products.map((item) => (
                        <div key={item.id} className="product_card">
                            <Link to={`/collection/${series}/${product}/${item.name.split(' ').join('_').toLowerCase()}`}>
                                <img src={item.img} alt={item.name} />
                            </Link>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>

                {visibleCount < initialProducts.length + moreProducts.length && (
                    <button className="load-more" onClick={loadMoreProducts}>
                        Load More
                    </button>
                )}
            </Fragment> : 
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
