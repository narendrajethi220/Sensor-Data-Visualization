import React from "react";
import "./ImageDisplay.css";

const ImageDisplay = ({ images }) => {
  return (
    <div className="image-container">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="sensor-image"
            src={image}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
