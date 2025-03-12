import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../assets/css/heroslider.css";
import http from '../../Services/api';

const HeroBanner = () => {
    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSliders();
    }, []);

    const fetchSliders = async () => {
        try {
            const res = await http.get("/banners?type=HOME_BANNER");
            if (res.data && Array.isArray(res.data.data)) {
                setSliders(res.data.data);
            } else {
                setError("No banners available.");
            }
        } catch (error) {
            console.error("Error fetching Sliders:", error);
            setError("Failed to load banners.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="Herobanner">
            {loading ? (
                <p>Loading banners...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation
                    loop={true}
                    speed={800}
                    effect="fade"
                    className="w-full max-w-3xl"
                >
                    {sliders.map((banner) => (
                        <SwiperSlide key={banner.id}>
                            <img
                                src={banner.uploads || "fallback-image.jpg"}
                                onError={(e) => e.target.src = "fallback-image.jpg"}
                                alt={banner.name}
                                className="w-full h-auto rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
        </div>
    );
};

export default HeroBanner;
