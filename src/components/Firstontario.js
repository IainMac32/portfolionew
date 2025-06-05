import React, { useRef, useEffect, useState } from 'react';
import '../styles/Firstontario.css';
import image from '../assets/IainPhoto.png';
import { useLocation } from 'react-router-dom';

function Firstontario() {
  const boxRef = useRef(null);
  const transitionCircleRef = useRef(null);
  const location = useLocation();
  
  // Experience data
  const experiences = [
    {
      title: "Security Operations Center Analyst",
      subtitle: "Threat Detection & Response",
      bullets: [
        "Monitored security events and alerts using SIEM tools",
        "Investigated and responded to security incidents",
        "Performed threat hunting and malware analysis"
      ]
    },
    {
      title: "Vulnerability Assessment Specialist",
      subtitle: "Risk Assessment & Mitigation",
      bullets: [
        "Conducted comprehensive vulnerability scans",
        "Analyzed security weaknesses in systems and applications",
        "Developed remediation strategies and reports"
      ]
    },
    {
      title: "Compliance & Audit Support",
      subtitle: "Regulatory Compliance",
      bullets: [
        "Assisted with regulatory compliance audits",
        "Maintained security documentation and policies",
        "Ensured adherence to industry standards"
      ]
    },
    {
      title: "Security Awareness Training",
      subtitle: "Employee Education",
      bullets: [
        "Developed and delivered security awareness programs",
        "Created educational materials and presentations",
        "Conducted phishing simulation exercises"
      ]
    }
  ];

  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Initialize states based on whether we need the transition
  const shouldStartWithTransition = location.state?.startBlack;
  const [isRevealing, setIsRevealing] = useState(shouldStartWithTransition);
  const [shouldShrink, setShouldShrink] = useState(false);
  const [showContent, setShowContent] = useState(!shouldStartWithTransition);

  useEffect(() => {
    if (shouldStartWithTransition) {
      setTimeout(() => {
        setShouldShrink(true);
        setShowContent(true);
        
        setTimeout(() => {
          setIsRevealing(false);
          setShouldShrink(false);
        }, 500);
      }, 10);
    }
  }, [shouldStartWithTransition]); // Add shouldStartWithTransition to dependency array

  const handleMouseMove = (e) => {
    const box = boxRef.current;
    if (!box) return;
    
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 5;
    const rotateX = (0.5 - y / rect.height) * 5;

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };

  const handleMouseLeave = () => {
    const box = boxRef.current;
    if (!box) return;
    box.style.transform = 'rotateX(0deg) rotateY(0deg)';
  };

  const handlePrevExperience = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // After fade out completes, change content and fade in
    setTimeout(() => {
      setCurrentExperienceIndex(prev => 
        prev === 0 ? experiences.length - 1 : prev - 1
      );
      
      // Allow fade in to start
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Match CSS fade out duration
  };

  const handleNextExperience = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    // After fade out completes, change content and fade in
    setTimeout(() => {
      setCurrentExperienceIndex(prev => 
        prev === experiences.length - 1 ? 0 : prev + 1
      );
      
      // Allow fade in to start
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300); // Match CSS fade out duration
  };

  const handleArrowMouseMove = (e) => {
    const arrow = e.currentTarget;
    const rect = arrow.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = (0.5 - y / rect.height) * 8;

    arrow.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`;
  };

  const handleArrowMouseLeave = (e) => {
    const arrow = e.currentTarget;
    arrow.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const currentExperience = experiences[currentExperienceIndex];

  return (
    <div className="experience-container">
      <div id="animated-background"></div>
      
      {showContent && (
        <>
          <img src={image} alt="Iain" className="left-image" />
          
          <div className="experience-carousel-container">
            {/* Left Arrow */}
            <div 
              className="carousel-arrow left-arrow"
              onClick={handlePrevExperience}
              onMouseMove={handleArrowMouseMove}
              onMouseLeave={handleArrowMouseLeave}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </div>

            {/* Experience Box */}
            <div
              ref={boxRef}
              className={`experience-text-box ${isTransitioning ? 'fading-out' : 'fading-in'}`}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <h1 className="title">{currentExperience.title}</h1>
              <h2 className="subtitle">{currentExperience.subtitle}</h2>
              <ul className="bullet-points">
                {currentExperience.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </ul>
              
              {/* Experience indicator dots */}
              <div className="experience-indicators">
                {experiences.map((_, index) => (
                  <div
                    key={index}
                    className={`indicator-dot ${index === currentExperienceIndex ? 'active' : ''}`}
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

            {/* Right Arrow */}
            <div 
              className="carousel-arrow right-arrow"
              onClick={handleNextExperience}
              onMouseMove={handleArrowMouseMove}
              onMouseLeave={handleArrowMouseLeave}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </div>
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