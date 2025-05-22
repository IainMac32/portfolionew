import React from 'react';
import '../styles/HomePage.css';
import image from '../assets/IainPhoto.png';  // Make sure you import your image correctly

function HomePage() {
  return (
    <div className="homepage-container">
      <img src={image} alt="My Image" className="left-image" />
      <div className="button-group">
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 4</button>
      </div>
    </div>
  );
}

export default HomePage;
