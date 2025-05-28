import React, { useRef } from 'react';
import '../styles/Experience.css';
import image from '../assets/IainPhoto.png';

function Experience() {
  const boxRef = useRef(null);

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 8; // Subtle tilt
    const rotateX = (0.5 - y / rect.height) * 8; // Subtle tilt

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;
    box.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <>
      
      <div className="experience-container">
      <div id="animated-background"></div>
        <img src={image} alt="Iain" className="left-image" />
        <div
          ref={boxRef}
          className="experience-text-box"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h1 className="title">Experience Title</h1>
          <h2 className="subtitle">Secondary Title</h2>
          <ul className="bullet-points">
            <li>First key point about the experience</li>
            <li>Second key point about the experience</li>
            <li>Third key point about the experience</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Experience;