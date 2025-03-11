import React, { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import "../assets/css/productlist.css";
import Sizes from "../component/Filtters/Sizes";
import Category from "../component/Filtters/Category";
import Discount from "../component/Filtters/Discount";
import PriceFilter from "../component/Filtters/PriceFilter";
import Color from "../component/Filtters/Color";
import Collection from "../component/Filtters/Collection";
import Capacity from "../component/Filtters/Capacity";
import Material from "../component/Filtters/Material";
import http from '../services/api';
import Addtocartbutton from "../component/Layout/Addtocartbutton";

function Service() {

  const[products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
       http.get("/products")
         .then((res) => {
           if (res.data.success) {
             setProducts(res.data.products);
           }
         })
      .catch((error) => console.error("Error fetching products:", error));  
  };

  return (
    <>
      <section className="collection-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-12 col-sm-12 p-xl-0">
              <div className="border mb-0 m-2 mt-0">
                <Category />
                <Discount />
                <Color/>
                <Collection/>
                <Sizes />
                <Capacity/>
                <Material/>
                <PriceFilter></PriceFilter>
              </div>
            </div>

            <div className="col-xl-10 col-lg-8 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="border mb-3 mfliud">
                    <div className="row align-items-center py-2 m-0">
                      <div className="col col-xl-10 col-lg-4 col-md-5 col-sm-12">
                        <h6 className="mb-0"> Showing 751 items </h6>
                        </div>
                        <div class="col-xl-2 col-lg-8 col-md-7 col-sm-12">
                        <select class="custom-select simple">
                        <option value="1" selected="">Default Sorting</option>
                        <option value="2">Sort by price: Low price</option>
                        <option value="3">Sort by price: Hight price</option>
                        <option value="4">Sort by rating</option>
                        <option value="5">Sort by trending</option>
                        </select>
					          	</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-cols-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
                   {products.map((product, index) => (  
                      <div className="col-md-3 col-sm-6" key={index}>
                      <div className="product-grid">
                        <div className="product-image">
                          <Link to="#" className="image">
                            <img className="img-1" src={product.media} alt="" />
                            <img className="img-2" src={product.media} alt="" />
                          </Link>
                          <ul className="product-links">
                            <li>
                              <Link to="#">
                                <i className="bi bi-heart"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <i className="bi bi-shuffle"></i>
                              </Link>
                            </li>
                            {/* <li> </li> */}
                          </ul>
                          <Addtocartbutton> </Addtocartbutton>
                          {/* <Link to="#" className="product-view">
                            <i className="bi bi-eye-fill"></i> Quick View
                          </Link> */}
                        </div>
                        <div className="product-content">
                          <ul className="rating">
                              <li><i className="bi bi-star-fill"></i></li>
                              <li><i className="bi bi-star-fill"></i></li>
                              <li><i className="bi bi-star-half"></i></li>
                              <li class="disable">&nbsp;( 1 reviews )</li>
                          </ul>
                          <h3 className="title">
                            <Link to="#">{product.name} </Link>
                          </h3>
                          <div className="price">
                            ₹{product.mrp}&nbsp;
                            -<span className="cut-price">₹{product.price}</span>
                          </div>
                          <div className="ShopNow">
                            <Link to="#">
                              <i className="bi bi-cart2"></i> Add To Cart
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>  
                   ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Service;


