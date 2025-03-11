import React from "react";
import "../../../styles/Carousel.scss";

const brands = [
  { name: "Apple", logo: "https://kontakt.az/media/ves/brand/Electrolux-5bf72fe8.webp" },
  { name: "LG", logo: "https://kontakt.az/media/ves/brand/Canon_nyu-863761d1.webp" },
  { name: "Xiaomi", logo: "https://kontakt.az/media/ves/brand/Lenovo-753198bf.webp" },
  { name: "Hoffmann", logo: "https://kontakt.az/media/ves/brand/wmf-2b14b07d.webp" },
  { name: "Toshiba", logo: "https://kontakt.az/media/ves/brand/Lg-aee4b428.webp" },
  { name: "Bosch", logo: "https://kontakt.az/media/ves/brand/Xiaominewlogo-2123f785.webp" },
  { name: "Oppo", logo: "https://kontakt.az/media/ves/brand/Oppo-f1126554.webp" },
  { name: "Dyson", logo: "https://kontakt.az/media/ves/brand/Electrolux-5bf72fe8.webp" },
  { name: "Schafer", logo: "https://kontakt.az/media/ves/brand/Canon_nyu-863761d1.webp" },
  { name: "Huawei", logo: "https://kontakt.az/media/ves/brand/Lenovo-753198bf.webp" },
];

const InfiniteSlider = () => {
  return (
    <>
      <div className="slider-container">
        <div className="slider">
          {[...brands, ...brands].map((brand, index) => (
            <div className="slide" key={index}>
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InfiniteSlider;
