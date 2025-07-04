import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import dictionary from '../../data/api-dictionary';

// const initialProducts = [
//     { id: 1, img: "/product/Collection  & Product pages-28.png", name: "Aenon" },
//     { id: 2, img: "/product/Collection  & Product pages-27.png", name: "Agalia" },
//     { id: 3, img: "/product/Collection  & Product pages-30.png", name: "Alana" },
//     { id: 4, img: "/product/Collection  & Product pages-29.png", name: "Amelia" },
//     { id: 5, img: "/random_product.png", name: "Product 5" },
//     { id: 6, img: "/random_product.png", name: "Product 6" },
// ];
// const moreProducts = [
//     { id: 7, img: "/random_product.png", name: "Product 7" },
//     { id: 8, img: "/random_product.png", name: "Product 8" },
//     { id: 9, img: "/random_product.png", name: "Product 9" },
//     { id: 10, img: "/random_product.png", name: "Product 10" },
//     { id: 11, img: "/random_product.png", name: "Product 11" },
//     { id: 12, img: "/random_product.png", name: "Product 12" },
// ];

export const ProductListing = () => {

    const url = import.meta.env.VITE_API_URL;
    const rangeUrl = import.meta.env.VITE_API_RANGE;      
    
    const {product, series} = useParams();    

    // const [products, setProducts] = useState(initialProducts.slice(0, 4)); // Show first 4 initially
    // const [visibleCount, setVisibleCount] = useState(4); // Start with 4 products  
    // const loadMoreProducts = () => {
    //   const remainingProducts = [...initialProducts.slice(4), ...moreProducts]; // Remaining products after initial 4
    //   const nextProducts = remainingProducts.slice(0, 4); // Load 4 at a time
  
    //   setProducts((prev) => [...prev, ...nextProducts]); // Append to existing products
    //   setVisibleCount((prev) => prev + nextProducts.length);
    // };
  
    const [loadSimulate, setLoadSimulate] = useState(true);
    const setSeries = series === "klassic" ? "2" : "1";

    const [nullRangeProducts, setNullProducts] = useState([]);
    const [uniqueRange, setRange] = useState([]);    
    useEffect(()=>{    
        const fetchData = async () => {
            try {
                const res1 = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });                
                const allProducts = res1.data.products;            
                const filterCollection = allProducts.filter((obj)=> obj.collection == setSeries)                                    
                
                const filterProduct = filterCollection.filter((obj)=> obj.category == dictionary.Category[series][product])                                                                       
                
                const newRange = [...new Map(filterProduct.map(item => [item.range, item])).values()];

                // console.log(newRange)

                if(newRange == 0){
                    setNullProducts(filterProduct)
                }else{                           
                    setRange(newRange);
                }          

            }catch(err){
                console.log(err)
            }finally{
                setLoadSimulate(false)                
            }
        }

        fetchData();
    },[])        

  return (
    <main className={`allProductMain ${series == 'aurum' ? 'background-dark' : 'background-light'}`}>    
        {
            !loadSimulate ? 
            <Fragment>
                <div className="prod_details">
                    <h2>{product.split("_").join(" ").toUpperCase()}</h2>
                    <p>
                        Designed with a skillful unification of creativity and engineering.
                        Kerovit has combined unmatched functional expertise with a promise
                        of excellence, giving customers an alluring experience they desire!
                    </p>
                </div>
                <div className="product_grid">
                    {
                        nullRangeProducts.length > 0 ?
                        <Fragment>
                            {
                                nullRangeProducts.map((item, index)=>(
                                    <div className="product_card" key={index + item.id}>
                                        <Link to={`/collection/${setSeries}/${product}/single/${item.product_code}`}>
                                            <img src={"https://demosite.kerovit.com/storage/AllImages/"+item.thumbnail_picture_url.split('/storage/')[1]+".png"} alt="image" />
                                        </Link>
                                        <p>{item.product_code}</p>
                                    </div>
                                ))
                            }
                        </Fragment> : <Fragment>
                            {uniqueRange.map((item, index) => (
                                <div key={index} className="product_card">
                                    <Link to={`/collection/${series}/${product}/${dictionary.Range[item.range]}`}>
                                        <img src={"https://demosite.kerovit.com/storage/AllImages/"+item.thumbnail_picture_url.split('/storage/')[1]+".png"} alt="image" />
                                        {/* {console.log("https://demosite.kerovit.com/storage/AllImages/"+item.product_image_url.split('/storage/')[1]+".png")} */}
                                    </Link>
                                    <p>{dictionary.Range[item.range].split("_").join(" ")}</p>
                                </div>
                            ))}
                        </Fragment>
                    }
                </div>

                {/* {visibleCount < initialProducts.length + moreProducts.length && (
                    <button className="load-more" onClick={loadMoreProducts}>
                        Load More
                    </button>
                )} */}
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
