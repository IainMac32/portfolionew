import React, { useRef, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


import '../styles/HomePage.css';
import image from '../assets/IainPhoto.png';  // Make sure you import your image correctly
import githublogo from '../assets/github.png';
import linkedinlogo from '../assets/linkedin.png';
import resumelogo from '../assets/resume.png';

function HomePage() {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionCircleRef = useRef(null);


  const location = useLocation();


    // Initialize states based on whether we need the transition
    const shouldStartWithTransition = location.state?.startBlack;
    const [showTransitionCircle, setShowTransitionCircle] = useState(shouldStartWithTransition);
    const [circleState, setCircleState] = useState(shouldStartWithTransition ? 'covering' : 'hidden');
    const [showContent, setShowContent] = useState(!shouldStartWithTransition);

    useEffect(() => {
        if (shouldStartWithTransition) {
            // Start with circle covering screen, then shrink to reveal content
            setTimeout(() => {
                setCircleState('shrinking');
                setShowContent(true);
                
                // After shrink animation completes, hide the circle
                setTimeout(() => {
                    setShowTransitionCircle(false);
                    setCircleState('hidden');
                }, 500); // Match your CSS transition duration
            }, 100); // Small delay to ensure initial render
        }
    }, [shouldStartWithTransition]);




  // Generic mouse move handler for buttons
  const handleMouseMove = (e) => {
    const button = e.currentTarget; // Get the button element that triggered the event
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use the same math as Experience.js for subtle tilt
    const rotateY = (x / rect.width - 0.5) * 12;
    const rotateX = (0.5 - y / rect.height) * 12;


    // Apply the 3D transform and slight scale
    button.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  // Generic mouse leave handler for buttons
  const handleMouseLeave = (e) => {
    const button = e.currentTarget; // Get the button element
    // Reset transform on mouse leave
    button.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const handleNavigateToExperience = () => {
    if (isTransitioning) return; // Prevent multiple triggers

    setIsTransitioning(true);
    setShowTransitionCircle(true);
    setCircleState('expanding');
    
    // Navigate after expansion animation completes
    setTimeout(() => {
      navigate('/experience', { state: { startBlack: true } }); // Pass state to Experience
    }, 500); // Match your CSS transition duration
  };

  return (
    <>
      <div className="homepage-container">
        <div id="animated-background"></div>
        {showContent && (
          <>
            <img src={image} alt="Iain" className="left-image-home" />
            <div className="button-group">
              <button
                onClick={handleNavigateToExperience}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                disabled={isTransitioning}
                className="common-button" // Common class for the first three
              >
                &#x1F4BC; Experience
              </button>
              <button
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="common-button" // Common class
              >
                &#x1F9EA; Projects
              </button>
              <button
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="common-button" // Common class
              >
                &#x1F527; Skills
              </button>
              <div className="button-four-row">
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => window.open('https://github.com/IainMac32', '_blank')}
                  className="button-four"
                >
                  <img src={githublogo} alt="Github" />
                </div>
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => window.open('https://www.linkedin.com/in/iain-macdonald-78717720a/?originalSubdomain=ca', '_blank')}
                  className="button-four"
                >
                  <img src={linkedinlogo} alt="LinkedIn" />
                </div>
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => window.open('/IainRes.pdf', '_blank')}
                  className="button-four"
                >
                  <img src={resumelogo} alt="Resume" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      {showTransitionCircle && (
        <div
          ref={transitionCircleRef}
          className={`transition-circle ${circleState}`}
        />
      )}
    </>
  );
}

export default HomePage;