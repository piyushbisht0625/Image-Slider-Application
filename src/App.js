import React, { useState } from 'react';
import './App.css';


const generateRandomImageUrl = () => {
  const randomWidth = Math.floor(Math.random() * (800 - 400 + 1)) + 400; 
  const randomHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  return `https://picsum.photos/${randomWidth}/${randomHeight}`;
};


const images = Array.from({ length: 10 }, () => generateRandomImageUrl());

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="app">
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="image" />
        <div className="arrow left" onClick={prevImage}></div>
        <div className="arrow right" onClick={nextImage}></div>
      </div>
      <div className="small-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`small-image ${index === currentImageIndex ? 'active' : ''}`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
