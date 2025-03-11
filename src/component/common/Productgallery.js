import { useState } from 'react';
import { Carousel, Image } from 'react-bootstrap';
import product from '../../assets/images/Product/Carpet-1.jpg'


const images = [
    { src: product, alt: 'Slide 1' },
    { src: product, alt: 'Slide 2' },
    { src: product, alt: 'Slide 3' },
    { src: product, alt: 'Slide 4' }
];

export default function Productgallery() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="carousel-container">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
                {images.map((image, idx) => (
                    <Carousel.Item key={idx}>
                        <Image src={image.src} alt={image.alt} style={{width: "100%;"}}    fluid />
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="thumbnail-container">
                {images.map((image, idx) => (
                    <Image
                        key={idx}
                        src={image.src}
                        alt={image.alt}
                        className={`thumbnail ${idx === index ? 'active' : ''}`}
                        onClick={() => setIndex(idx)}
                        style={{ width: "80px"}}
                    />
                ))}
            </div>
        </div>
    );
}
