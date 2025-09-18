import React, { useRef, useEffect, useState } from 'react';
import '../styles/Firstontario.css';

import AIimage from '../assets/AIIainPhoto.PNG';
import FCUimage from '../assets/FCUIainPhoto.PNG';
import Googleimage from '../assets/GoogleIainPhoto.PNG';
import PCimage from '../assets/PCIainPhoto.png';
import Campimage from '../assets/CampIainPhoto2.png';
import Tutorimage from '../assets/TutorIainPhoto2.png';

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
      img: FCUimage,
      title: "FirstOntario Credit Union",
      subtitle: "Junior Security Analyst",
      date: "2025 Apr - 2026 Apr",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  
      bullets: [
        "Resolved 500+ security-related tickets, reducing turnaround time for business-as-usual tasks by 60%.",
        "Built and maintained security dashboards and supported projects to uphold the company’s ISO certification.",
        "Integrated REST APIs to develop dashboards that tracked key security metrics, improving company-wide visibility and risk management.",
        "Streamlined the quarterly employee access attestation process, reducing workload by 80% and saving 30+ hours per quarter."
      ]
    },
    {
      img: AIimage,
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
      img: Googleimage,
      title: "Google Developer Groups",
      subtitle: "Software Developer",
      date: "2024 Sep - Present",
      linkText: "GitHub",
      linkUrl: "https://github.com/DSC-McMaster-U/Ocular-Disease-Identifier",   // or your repo URL  
      bullets: [
        "The team of 10 worked on an Ocular Disease Identifier that uses AI to detect disease in fundus images.",
        "The project utilizes Python, TensorFlow, and PIL for the backend and React.js for the frontend.",
        "Communicated during weekly meetings to discuss progress and completed 2 - 3 week sprints to meet deadlines."
      ]
    },
    {
      img: Tutorimage,
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
      img: Campimage,
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
      img: PCimage,
      title: "Digital Fire",
      subtitle: "IT Co-op Placement",
      date: "2022 Feb - 2022 Jun",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  

      bullets: [
        "Configured and upgraded laptops and computers, improving efficiency for hardware and software integration. ",
        "Developed a custom inventory system, cutting storage update times from ~3 minutes to ~45 seconds, boosting office productivity.",
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
  console.log('currentExperience.img:', currentExperience.img);
  console.log('Campimage:', Campimage);
  console.log('Are they equal?', currentExperience.img === Campimage);
  
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
        
          <img 
            src={currentExperience.img} 
            alt="Iain" 
            className={currentExperience.img === Campimage ? "fo-left-image-small" : "fo-left-image"} 
          />
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