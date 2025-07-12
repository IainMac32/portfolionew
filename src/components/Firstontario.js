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
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  
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
      linkText: "GitHub",
      linkUrl: "https://github.com/McMasterAI2024-2025/ArtSuggesterAI",   // or your repo URL  
      bullets: [
        "Led a team of 6 to develop an AI-based art recommendation tool, optimizing image recognition techniques within a convolutional neural network trained on a dataset of 4,000+ images across various mediums, achieving an accuracy of 92%.",
        "Oversaw front and back-end progress, improving efficiency through targeted task assignments while encouraging collaboration and communication in weekly meetings, ensuring all deadlines were met at least a week early.",
        "Previously a software developer to a Python-based document Q&A tool using Large Language Models, Vector Databases, and Similarity Search APIs, presenting at the Canadian Undergraduate Conference on AI which led to a collaboration with the Tutor.AI startup."
      ]
    },
    {
      title: "Google Developer Groups",
      subtitle: "Software Developer",
      date: "2024 Sep - Present",
      linkText: "GitHub",
      linkUrl: "https://github.com/DSC-McMaster-U/Ocular-Disease-Identifier",   // or your repo URL  
      bullets: [
        "Contributed to developing an AI Ocular Disease Identifier for eye scans, designed for potential use in medical diagnostics.",
        "Collaborated within a team of 10 to implement machine learning and database integration.",
        "Coordinated through sprints to meet tight deadlines, consistently completing tasks days ahead of schedule."
      ]
    },
    {
      title: "Tutor.AI",
      subtitle: "Software Consultant",
      date: "2024 Mar - 2024 Aug",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  

      bullets: [
        "Reviewed and optimized backend code for a startup’s AI tutor student matching system, speeding up development by 2 weeks.",
        "Analyzed program flow, algorithms, and vectorization techniques providing recommendations to boost efficiency and matching accuracy.",
        "Collaborated closely with project leads in weekly meetings and daily check ins."
      ]
    },
    {
      title: "STEM Camp & Steamoji",
      subtitle: "Camp Counselor",
      date: "2024 May - 2024 Aug",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  

      bullets: [
        "Designed and led STEM activities for ages 5-14, teaching Python, Scratch coding, robotics, and 3D printing through hands-on learning.",
        "Developed leadership, communication, and adaptability by addressing camper needs, and creating an engaging learning environment.",
      ]
    },
    {
      title: "Digital Fire",
      subtitle: "IT Co-op Placement",
      date: "2022 Feb - 2022 Jun",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  

      bullets: [
        "Applied technical skills with precision to successfully set up, configure, and upgrade laptops and desktops, integrating hardwareand software components to ensure optimal system performance and long-term reliability.",
        "Acquired coding proficiency to develop an office inventory system, resulting in improved organization and operational efficiency.",
        "Played a key role in important projects by working on hardware construction, and enhancing overall technology."
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

  const handleMouseMove = (ref) => (e) => {
    const box = ref.current;
    if (!box) return;
    
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  
    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (0.5 - y / rect.height) * 7;
  
    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.01)`;
  };
  
  const handleMouseLeave = (ref) => () => {
    const box = ref.current;
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
    }, 1000);
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
                onMouseMove={handleMouseMove(boxRef)}
                onMouseLeave={handleMouseLeave(boxRef)}>
                <h1 className="fo-title">{currentExperience.title}</h1>
                <h2 className="fo-subtitle">{currentExperience.subtitle}</h2>
                <h2 className="fo-date">
                  {currentExperience.date}
                  {currentExperience.linkUrl !== "" && (
                    <>
                      {" | "}
                      <a href={currentExperience.linkUrl} target="_blank" rel="noopener noreferrer">
                        {currentExperience.linkText}
                      </a>
                    </>
                  )}
                </h2>

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