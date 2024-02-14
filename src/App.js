import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import ImageDisplay from "./components/ImageDisplay";

const App = () => {
  const imageBaseUrl = "https://source.unsplash.com/random/";

  const generateImageUrls = (type) => {
    //Image Url yha se generate hoga or imageUrls array mein push krenge jise hum as a property image function mein bhej rhe he.

    const imageUrls = [];
    for (let i = 0; i < 4; i++) {
      imageUrls.push(`${imageBaseUrl}/400x400/?${type}-${i + 1}`);
    }
    return imageUrls;
  };

  const [selectedType, setSelectedType] = useState(1);
  const [images, setImages] = useState(generateImageUrls(1));

  useEffect(() => {
    // Fetch initial data when the component mounts

    fetchDataFromBackend(selectedType);
  }, [selectedType]); // Empty dependency array means this effect runs once after the initial render

  const handleSelectType = (type) => {
    // Handle type selection here
    const newImages = generateImageUrls(type);
    setImages(newImages);
    fetchDataFromBackend(type);
    setSelectedType(type);
  };

  const fetchDataFromBackend = (type) => {
    // Placeholder function to simulate fetching data from the backend

    console.log(`Fetching data for Type ${type} from the backend...`);
  };

  return (
    <div>
      <Navbar onSelectType={handleSelectType} />
      <h2 className="image-header">
        Images For Type <span className="type">{selectedType}</span>
      </h2>
      <ImageDisplay images={images} />
    </div>
  );
};

export default App;
