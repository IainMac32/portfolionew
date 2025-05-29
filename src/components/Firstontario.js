import React, { useRef, useEffect, useState } from 'react';
import '../styles/Firstontario.css';
import image from '../assets/IainPhoto.png';
import { useLocation } from 'react-router-dom';

function Firstontario() {
  const boxRef = useRef(null);
  const transitionCircleRef = useRef(null);
  const location = useLocation();
  // Initialize states based on whether we need the transition
  const shouldStartWithTransition = location.state?.startBlack;
  const [isRevealing, setIsRevealing] = useState(shouldStartWithTransition);
  const [shouldShrink, setShouldShrink] = useState(false);
  const [showContent, setShowContent] = useState(!shouldStartWithTransition); // Hide content if transition needed

  useEffect(() => {
    if (shouldStartWithTransition) {
      // Very small delay to ensure the circle renders first
      setTimeout(() => {
        setShouldShrink(true); // Trigger the shrink animation
        setShowContent(true); // Show content when circle is gone

        
        // After the shrink animation, show content and remove the circle
        setTimeout(() => {
          setIsRevealing(false);
          setShouldShrink(false); // Reset for next time
        }, 500); // Match your animation duration
      }, 10); // Minimal delay
    }
  }, []); // Remove location.state dependency since we handle it in initialization

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 5; // Subtle tilt
    const rotateX = (0.5 - y / rect.height) * 5; // Subtle tilt

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;
    box.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div className="experience-container">
      <div id="animated-background"></div>
      
      {/* Content is conditionally rendered based on showContent state */}
      {showContent && (
        <>
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
        </>
      )}
      
      {isRevealing && (
        <div
          ref={transitionCircleRef}
          className={`transition-circle1 ${shouldShrink ? 'shrink' : ''}`}
        ></div>
      )}
    </div>
  );
}

export default Firstontario;