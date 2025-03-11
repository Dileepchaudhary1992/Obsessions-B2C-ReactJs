import React from "react";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Productdetial = () => {
  const images = [
    "https://via.placeholder.com/600x400",
    "https://via.placeholder.com/600x400/ff7f7f",
    "https://via.placeholder.com/600x400/77ff7f",
    "https://via.placeholder.com/600x400/7f7fff",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-full max-w-lg mx-auto">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="p-2">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Product Image",
                  isFluidWidth: true,
                  src,
                },
                largeImage: {
                  src,
                  width: 1200,
                  height: 800,
                },
                enlargedImageContainerStyle: { background: "#fff", zIndex: 9 },
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Productdetial;
