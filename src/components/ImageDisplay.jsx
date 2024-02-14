import React from "react";
import "./ImageDisplay.css";

const ImageDisplay = ({ sensorimages }) => {
  return (
    <div className="image-container">
      {sensorimages.map((sensorimage, index) => (
        <div key={index}>
          <img
            className="sensor-image"
            src={sensorimage}
            alt={`sensorimage ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
