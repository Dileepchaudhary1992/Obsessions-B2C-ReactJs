import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/newluanchs.css";
import { Navigation } from "swiper/modules";

const products = [
  { id: 1, title: "Soap dispenser", price: "₹6000", image: "https://efi-s3-private.s3.ap-south-1.amazonaws.com/b2c-img/EnvogueImages/media/banners/TOP_CATEGORY/af499434-c77b-4f12-bdde-48ac18459fe8-1717677520.jpg" },
  { id: 2, title: "Soap dish", price: "₹5000", image: "https://efi-s3-private.s3.ap-south-1.amazonaws.com/b2c-img/EnvogueImages/media/banners/TOP_CATEGORY/9b663533-cc6a-472d-8d75-a9fe1c3631c2-1717679171.jpg" },
  { id: 3, title: "Bath Set", price: "₹300", image: "https://efi-s3-private.s3.ap-south-1.amazonaws.com/b2c-img/EnvogueImages/media/banners/TOP_CATEGORY/ef56f7c0-5398-447f-89a3-b7a29323df0c-1717677423.jpg" },
  { id: 4, title: "Toilet Brush", price: "₹5000", image: "https://efi-s3-private.s3.ap-south-1.amazonaws.com/b2c-img/EnvogueImages/media/banners/TOP_CATEGORY/f23a0ca5-f46b-4806-9fe0-668d001ded1c-1717677557.jpg" },
  { id: 5, title: "Bath mat", price: "₹4000", image: "https://efi-s3-private.s3.ap-south-1.amazonaws.com/b2c-img/EnvogueImages/media/banners/TOP_CATEGORY/da15b13c-b6d2-4467-adf5-50efb9820279-1717677543.jpg" },
  { id: 6, title: "Outdoor Mate", price: "₹7000", image: "https://efi-s3-private.s3.ap-south-1.amazonaws.com/b2c-img/EnvogueImages/media/banners/TOP_CATEGORY/d72231a3-7240-46bd-ad1d-be358f82b024-1717677583.jpg" }
];

export default function Newluanch() {
  return (

    <div className="Newluanch"> 
    <div className="container">
      <div className="row"> 
       <div className="col-md-12">  
        <div className="titlebox">
         <h1 style={{ textAlign: "center", fontSize: "25px"}}> New Luanch </h1>
         <p style={{ textAlign: "center"}}>  Stay inspired with design’s hottest trends, collection deep-dives, and helpful how-tos. </p>
         </div>
       </div>
      </div>

      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation]}
        className="w-full h-auto"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="text-center mt-3">
            <div className="bg-white rounded-lg shadow-md">
              <div className="product-box"> 
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-lg mb-2" />
              </div>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
