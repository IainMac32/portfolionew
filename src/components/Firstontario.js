import React, { useRef, useEffect, useState } from 'react';
import '../styles/Firstontario.css';
import image from '../assets/IainPhoto.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Firstontario() {
  const boxRef = useRef(null);
  const transitionCircleRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Experience data
  const experiences = [
    {
      title: "FirstOntario Credit Union",
      subtitle: "Junior Security Analyst",
      date: "2025 Apr - Present",
      bullets: [
        "Point 1",
        "Point 2",
        "Point 3"
      ]
    },
    {
      title: "McMaster AI Society",
      subtitle: "Project Lead & Software Developer",
      date: "2023 Oct - Present",
      bullets: [
        "Point 1",
        "Point 2",
        "Point 3"
      ]
    },
    {
      title: "Google Developer Groups",
      subtitle: "Software Developer",
      date: "2024 Sep - Present",
      bullets: [
        "Point 1",
        "Point 2",
        "Point 3"
      ]
    },
    {
      title: "Tutor.AI",
      subtitle: "Software Consultant",
      date: "2024 Mar - 2024 Aug",
      bullets: [
        "Point 1",
        "Point 2",
        "Point 3"
      ]
    },
    {
      title: "STEM Camp & Steamoji",
      subtitle: "Camp Counselor",
      date: "2024 May - 2024 Aug",
      bullets: [
        "Point 1",
        "Point 2",
        "Point 3"
      ]
    },
    {
      title: "Digital Fire",
      subtitle: "IT Co-op Placement",
      date: "2022 Feb - 2022 Jun",
      bullets: [
        "Point 1",
        "Point 2",
        "Point 3"
      ]
    }
  ];

  const startPage = location.state?.page || 0;
  const shouldStartWithTransition = location.state?.startBlack;

  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(startPage);
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
    if (!box) return;
    
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 5;
    const rotateX = (0.5 - y / rect.height) * 5;

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;
    if (!box) return;
    box.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const handlePrevExperience = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentExperienceIndex(prev => 
        prev === 0 ? experiences.length - 1 : prev - 1
      );
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleNextExperience = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentExperienceIndex(prev => 
        prev === experiences.length - 1 ? 0 : prev + 1
      );
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  const handleNavigateToHome = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setShowTransitionCircle(true);
    setCircleState('expanding');
    
    // Navigate after expansion animation completes
    setTimeout(() => {
      navigate('/', { state: { startBlack: true } });
    }, 500);
  };

  const currentExperience = experiences[currentExperienceIndex];

  return (
    <div className="fo-experience-container fo-component">
      <div className="fo-animated-background"></div>
      
      {/* Transition Circle - render conditionally */}
      {showTransitionCircle && (
        <div
          ref={transitionCircleRef}
          className={`fo-transition-circle fo-transition-circle--${circleState}`}
        ></div>
      )}
      
      {showContent && (
        <>
          <img src={image} alt="Iain" className="fo-left-image" />
          <div className="fo-experience-carousel-container">
            
            {/* Left Arrow */}
            <div 
              className="fo-carousel-arrow fo-carousel-arrow--left"
              onClick={handlePrevExperience}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </div>

            <div className="experience-home-container">
              <div onClick={handleNavigateToHome} className='home-button-experiences'>
                Home
              </div>
              <div
                ref={boxRef}
                className={`fo-experience-text-box ${isTransitioning ? 'fo-experience-text-box--fading-out' : 'fo-experience-text-box--fading-in'}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <h1 className="fo-title">{currentExperience.title}</h1>
                <h2 className="fo-subtitle">{currentExperience.subtitle}</h2>
                <h2 className="fo-date">{currentExperience.date}</h2>
                <ul className="fo-bullet-points">
                  {currentExperience.bullets.map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
                
                {/* Experience indicator dots */}
                <div className="fo-experience-indicators">
                  {experiences.map((_, index) => (
                    <div
                      key={index}
                      className={`fo-indicator-dot ${index === currentExperienceIndex ? 'fo-indicator-dot--active' : ''}`}
                      onClick={() => {
                        if (isTransitioning || index === currentExperienceIndex) return;
                        
                        setIsTransitioning(true);
                        setTimeout(() => {
                          setCurrentExperienceIndex(index);
                          setTimeout(() => {
                            setIsTransitioning(false);
                          }, 50);
                        }, 300);
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right Arrow */}
            <div 
              className="fo-carousel-arrow fo-carousel-arrow--right"
              onClick={handleNextExperience}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Firstontario;