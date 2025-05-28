import React from 'react'; // No need for useRef if not managing specific refs directly
import { useNavigate } from 'react-router-dom';

import '../styles/HomePage.css';
import image from '../assets/IainPhoto.png';  // Make sure you import your image correctly

function HomePage() {
  const navigate = useNavigate();

  // Generic mouse move handler for buttons
  const handleMouseMove = (e) => {
    const button = e.currentTarget; // Get the button element that triggered the event
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use the same math as Experience.js for subtle tilt
    const rotateY = (x / rect.width - 0.5) * 20;
    const rotateX = (0.5 - y / rect.height) * 20;

    // Apply the 3D transform and slight scale
    button.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  // Generic mouse leave handler for buttons
  const handleMouseLeave = (e) => {
    const button = e.currentTarget; // Get the button element
    // Reset transform on mouse leave
    button.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <>
      <div id="animated-background"></div>
      <div className="homepage-container">
        <img src={image} alt="Iain" className="left-image" />
        <div className="button-group">
          <button
            onClick={() => navigate('/experience')}
            onMouseMove={handleMouseMove} // Attach mouse move event
            onMouseLeave={handleMouseLeave} // Attach mouse leave event
          >
            Button 1
          </button>
          <button
            onMouseMove={handleMouseMove} // Attach mouse move event
            onMouseLeave={handleMouseLeave} // Attach mouse leave event
          >
            Button 2
          </button>
          <button
            onMouseMove={handleMouseMove} // Attach mouse move event
            onMouseLeave={handleMouseLeave} // Attach mouse leave event
          >
            Button 3
          </button>
          <button
            onMouseMove={handleMouseMove} // Attach mouse move event
            onMouseLeave={handleMouseLeave} // Attach mouse leave event
          >
            Button 4
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePage;