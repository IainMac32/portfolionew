import React, { useRef, useEffect, useState } from 'react';
import '../styles/Experience.css';
import image from '../assets/IainPhoto.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Experience() {
  const boxRef = useRef(null);
  const transitionCircleRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initialize states based on whether we need the transition
  const shouldStartWithTransition = location.state?.startBlack;
  const [showTransitionCircle, setShowTransitionCircle] = useState(shouldStartWithTransition);
  const [circleState, setCircleState] = useState(shouldStartWithTransition ? 'covering' : 'hidden');
  const [showContent, setShowContent] = useState(!shouldStartWithTransition);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 5;
    const rotateX = (0.5 - y / rect.height) * 5;

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;
    box.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const handleNavigateToExperience = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setShowTransitionCircle(true);
    setCircleState('expanding');
    
    // Navigate after expansion animation completes
    setTimeout(() => {
      navigate('/firstontario', { state: { startBlack: true } });
    }, 500); // Match your CSS transition duration
  };

  return (
    <div className="experience-container">
      <div id="animated-background"></div>
      
      {showContent && (
        <>
          <img src={image} alt="Iain" className="left-image" />
          <div
            ref={boxRef}
            className="experience-text-box1"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleNavigateToExperience}
          >
            <h1 className="title">Experience Title</h1>
            <h2 className="subtitle">Secondary Title</h2>
          </div>
        </>
      )}
      
      {showTransitionCircle && (
        <div
          ref={transitionCircleRef}
          className={`transition-circle2 ${circleState}`}
        />
      )}
    </div>
  );
}

export default Experience;