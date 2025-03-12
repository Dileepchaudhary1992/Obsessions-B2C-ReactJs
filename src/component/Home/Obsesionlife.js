import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import http from "../../Services/api";

export default function Obsesionlife() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
     fetchProducts();
   }, []);
 
 const fetchProducts=() => { 
       http.get("/products?category_id=13")
          .then((res) => {
            if (res.data.success) {
              setProducts(res.data.products);
            }
          })
          .catch((error) => console.error("Error fetching products:", error));  
 };
 
  return (

  <div className="Newluanch" style={{  padding: " 20px 0 20px 0"}}> 
    <div className="container">
      <div className="row"> 
       <div className="col-md-12">  
        <div className="titlebox">
         <h1 style={{ textAlign: "center", fontSize: "25px"}}> Obsessions in Real Life </h1>
         <p style={{ textAlign: "center"}}>  Stay inspired with design’s hottest trends, collection deep-dives, and helpful how-tos. </p>
         </div>
       </div>
      </div>

      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        modules={[ Navigation]}
        className="w-full h-auto"
       >
        {products.map((product) => (

          <SwiperSlide key={product.id} className="text-center mt-3"> 
            <div className="bg-white rounded-lg shadow-md">
                <div className="product-box">
                 <img src={product.media} alt={product.title} className="w-full h-40 object-cover rounded-lg" />
                 <div className="shopnew"> <a href="#" className="shopnew"> SHOP NOW  </a></div>
                </div>

              {/* <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
    </div>
  );
}
