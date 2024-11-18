import React from "react";

const Slider = ({ images }) => (
  <div className="slider">
    {images.map((image, index) => (
      <img
        key={index}
        src={image.src}
        alt={image.alt}
        style={{ animationDelay: `${index * 4}s` }}
      />
    ))}
  </div>
);

export default Slider;
