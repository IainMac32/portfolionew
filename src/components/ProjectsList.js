import React, { useRef, useEffect, useState } from 'react';
import '../styles/ProjectsList.css';

import artsuggesterMain from '../assets/ArtSuggester.jpg';
import artsuggester1 from '../assets/artsuggester1.jpeg';
import artsuggester2 from '../assets/artsuggester2.jpeg';

import justtheinstructionsMain from '../assets/JustTheInstructions.jpg'
import justtheinstructions1 from '../assets/justtheinstructions1.jpg';
import justtheinstructions2 from '../assets/justtheinstructions2.jpg';
import justtheinstructions3 from '../assets/justtheinstructions3.jpg';

import secondbrainMain from '../assets/SecondBrain.jpg'
import secondbrain1 from '../assets/secondbrain1.png';

import sparkslidesMain from '../assets/SparkSlides.jpg'
import sparkslides1 from '../assets/sparksslides1.jpeg';
import sparkslides2 from '../assets/sparkslides2.jpeg';


import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ProjectsList() {
  const boxRef = useRef(null);
  const transitionCircleRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  // Experience data with added tech stack and project images
  const experiences = [
    {
      title: "Art Suggester AI",
      subtitle: "Junior Security Analyst",
      date: "2025 Apr - Present",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  
      techStack: [
        { name: "Python", icon: "🐍" },
        { name: "Cybersecurity", icon: "🔒" },
        { name: "Network Analysis", icon: "🌐" }
      ],
      bullets: [
        "Point 1",
        "Point 2",
        "Point 3"
      ],
      projectImages: [
        { src: artsuggesterMain, alt: "Art Suggester Main" },
        { src: artsuggester1, alt: "Art Suggester 1" },
        { src: artsuggester2, alt: "Art Suggester 1" },
      ]
    },
    {
      title: "Just The Instructions",
      subtitle: "Project Lead & Software Developer",
      date: "2023 Oct - Present",
      linkText: "GitHub",
      linkUrl: "https://github.com/McMasterAI2024-2025/ArtSuggesterAI",   // or your repo URL  
      techStack: [
        { name: "Python", icon: "🐍" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "CNN", icon: "🔮" },
        { name: "React", icon: "⚛️" }
      ],
      bullets: [
        "Led a team of 6 to develop an AI-based art recommendation tool, optimizing image recognition techniques within a convolutional neural network trained on a dataset of 4,000+ images across various mediums, achieving an accuracy of 92%.",
        "Oversaw front and back-end progress, improving efficiency through targeted task assignments while encouraging collaboration and communication in weekly meetings, ensuring all deadlines were met at least a week early.",
        "Previously a software developer to a Python-based document Q&A tool using Large Language Models, Vector Databases, and Similarity Search APIs, presenting at the Canadian Undergraduate Conference on AI which led to a collaboration with the Tutor.AI startup."
      ],
      projectImages: [
        { src: justtheinstructionsMain, alt: "Just The Instructions Main" },
        { src: justtheinstructions1, alt: "Just The Instructions 1" },
        { src: justtheinstructions2, alt: "Just The Instructions 2" },
        { src: justtheinstructions3, alt: "Just The Instructions 3" }
      ]
    },
    {
      title: "Second Brain",
      subtitle: "Software Developer",
      date: "2024 Sep - Present",
      linkText: "GitHub",
      linkUrl: "https://github.com/DSC-McMaster-U/Ocular-Disease-Identifier",   // or your repo URL  
      techStack: [
        { name: "Python", icon: "🐍" },
        { name: "Machine Learning", icon: "🤖" },
        { name: "OpenCV", icon: "👁️" },
        { name: "Database", icon: "🗄️" }
      ],
      bullets: [
        "Contributed to developing an AI Ocular Disease Identifier for eye scans, designed for potential use in medical diagnostics.",
        "Collaborated within a team of 10 to implement machine learning and database integration.",
        "Coordinated through sprints to meet tight deadlines, consistently completing tasks days ahead of schedule."
      ],
      projectImages: [
        { src: secondbrainMain, alt: "SecondBrain Main" },
        { src: secondbrain1, alt: "SecondBrain 1" },
      ]
    },
    {
      title: "SparkSlides",
      subtitle: "Software Consultant",
      date: "2024 Mar - 2024 Aug",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  
      techStack: [
        { name: "Python", icon: "🐍" },
        { name: "AI", icon: "🤖" },
        { name: "Backend", icon: "⚙️" },
        { name: "Optimization", icon: "📈" }
      ],
      bullets: [
        "Reviewed and optimized backend code for a startup's AI tutor student matching system, speeding up development by 2 weeks.",
        "Analyzed program flow, algorithms, and vectorization techniques providing recommendations to boost efficiency and matching accuracy.",
        "Collaborated closely with project leads in weekly meetings and daily check ins."
      ],
      projectImages: [
        { src: sparkslidesMain, alt: "SparkSlides Main" },
        { src: sparkslides1, alt: "SparkSlides 1" },
        { src: sparkslides2, alt: "SparkSlides 2" }
      ]
    },
    {
      title: "Portfolio Website",
      subtitle: "Camp Counselor",
      date: "2024 May - 2024 Aug",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  
      techStack: [
        { name: "Python", icon: "🐍" },
        { name: "Scratch", icon: "🧩" },
        { name: "Robotics", icon: "🤖" },
        { name: "3D Printing", icon: "🖨️" }
      ],
      bullets: [
        "Designed and led STEM activities for ages 5-14, teaching Python, Scratch coding, robotics, and 3D printing through hands-on learning.",
        "Developed leadership, communication, and adaptability by addressing camper needs, and creating an engaging learning environment.",
      ],
      projectImages: [
        { src: "/api/placeholder/300/200", alt: "STEM Activities" },
        { src: "/api/placeholder/300/200", alt: "Student Projects" }
      ]
    },
    {
      title: "Digital Fire",
      subtitle: "IT Co-op Placement",
      date: "2022 Feb - 2022 Jun",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  
      techStack: [
        { name: "Hardware", icon: "🔧" },
        { name: "Software", icon: "💿" },
        { name: "Inventory System", icon: "📦" },
        { name: "IT Support", icon: "🖥️" }
      ],
      bullets: [
        "Applied technical skills with precision to successfully set up, configure, and upgrade laptops and desktops, integrating hardware and software components to ensure optimal system performance and long-term reliability.",
        "Acquired coding proficiency to develop an office inventory system, resulting in improved organization and operational efficiency.",
        "Played a key role in important projects by working on hardware construction, and enhancing overall technology."
      ],
      projectImages: [
        { src: "/api/placeholder/300/200", alt: "Hardware Setup" },
        { src: "/api/placeholder/300/200", alt: "Inventory System Interface" }
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
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showImageModal, setShowImageModal] = useState(false);

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

  const handleImageClick = (imageIndex) => {
    setSelectedImageIndex(imageIndex);
    setShowImageModal(true);
  };

  const handleCloseModal = () => {
    setShowImageModal(false);
    setSelectedImageIndex(null);
  };

  const handleNextImage = () => {
    const totalImages = currentExperience.projectImages.length;
    setSelectedImageIndex((prev) => (prev + 1) % totalImages);
  };

  const handlePrevImage = () => {
    const totalImages = currentExperience.projectImages.length;
    setSelectedImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleModalKeyPress = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    } else if (e.key === 'ArrowRight') {
      handleNextImage();
    } else if (e.key === 'ArrowLeft') {
      handlePrevImage();
    }
  };

  useEffect(() => {
    if (showImageModal) {
      document.addEventListener('keydown', handleModalKeyPress);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleModalKeyPress);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleModalKeyPress);
      document.body.style.overflow = 'auto';
    };
  }, [showImageModal, selectedImageIndex]);

  const currentExperience = experiences[currentExperienceIndex];

  return (
    <div className="ProjectsList-experience-container ProjectsList-component">
      <div className="ProjectsList-animated-background"></div>
      
      {/* Transition Circle - render conditionally */}
      {showTransitionCircle && (
        <div
          ref={transitionCircleRef}
          className={`ProjectsList-transition-circle ProjectsList-transition-circle--${circleState}`}
        ></div>
      )}
      
      {showContent && (
        <>
          <div className="ProjectsList-experience-carousel-container">
            
            {/* Left Arrow */}
            <div 
              className="ProjectsList-carousel-arrow ProjectsList-carousel-arrow--left"
              onClick={handlePrevExperience}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </div>

            <div className="ProjectsList-experience-home-container">
              <div onClick={handleNavigateToHome} className='ProjectsList-home-button-experiences'>
                Home
              </div>
              <div
                ref={boxRef}
                className={`ProjectsList-experience-text-box ${isTransitioning ? 'ProjectsList-experience-text-box--fading-out' : 'ProjectsList-experience-text-box--fading-in'}`}
                onMouseMove={handleMouseMove(boxRef)}
                onMouseLeave={handleMouseLeave(boxRef)}>
                
                {/* Three Column Layout */}
                <div className="ProjectsList-three-column-layout">
                  
                  {/* Left Column - Title, Date, Tech Stack */}
                  <div className="ProjectsList-left-column">
                    <h1 className="ProjectsList-title">{currentExperience.title}</h1>
                    <h2 className="ProjectsList-subtitle">{currentExperience.subtitle}</h2>
                    <div className="ProjectsList-date-link">
                      {currentExperience.date}
                      {currentExperience.linkUrl !== "" && (
                        <>
                          <br />
                          <a href={currentExperience.linkUrl} target="_blank" rel="noopener noreferrer" className="ProjectsList-github-link">
                            {currentExperience.linkText}
                          </a>
                        </>
                      )}
                    </div>
                    
                    <div className="ProjectsList-tech-stack">
                      <h3 className="ProjectsList-tech-title">Technologies Used</h3>
                      <div className="ProjectsList-tech-grid">
                        {currentExperience.techStack.map((tech, index) => (
                          <div key={index} className="ProjectsList-tech-item">
                            <span className="ProjectsList-tech-icon">{tech.icon}</span>
                            <span className="ProjectsList-tech-name">{tech.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle Column - Bullet Points */}
                  <div className="ProjectsList-middle-column">
                    <h3 className="ProjectsList-details-title">Project Details</h3>
                    <ul className="ProjectsList-bullet-points">
                      {currentExperience.bullets.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column - Project Images */}
                  <div className="ProjectsList-right-column">
                    <h3 className="ProjectsList-images-title">Project Images</h3>
                    <div className="ProjectsList-project-images">
                      {currentExperience.projectImages.map((image, index) => (
                        <div key={index} className="ProjectsList-image-container">
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="ProjectsList-project-image"
                            onClick={() => handleImageClick(index)}
                          />
                          <p className="ProjectsList-image-caption">{image.alt}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Experience indicator dots */}
                <div className="ProjectsList-experience-indicators">
                  {experiences.map((_, index) => (
                    <div
                      key={index}
                      className={`ProjectsList-indicator-dot ${index === currentExperienceIndex ? 'ProjectsList-indicator-dot--active' : ''}`}
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
              className="ProjectsList-carousel-arrow ProjectsList-carousel-arrow--right"
              onClick={handleNextExperience}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </div>
          </div>
          
          {/* Image Modal */}
          {showImageModal && selectedImageIndex !== null && (
            <div className="ProjectsList-image-modal" onClick={handleCloseModal}>
              <div className="ProjectsList-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="ProjectsList-modal-close" onClick={handleCloseModal}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
                
                {currentExperience.projectImages.length > 1 && (
                  <button className="ProjectsList-modal-nav ProjectsList-modal-nav--left" onClick={handlePrevImage}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="15,18 9,12 15,6"></polyline>
                    </svg>
                  </button>
                )}
                
                <div className="ProjectsList-modal-image-container">
                  <img 
                    src={currentExperience.projectImages[selectedImageIndex].src}
                    alt={currentExperience.projectImages[selectedImageIndex].alt}
                    className="ProjectsList-modal-image"
                  />
                  <div className="ProjectsList-modal-caption">
                    <h3>{currentExperience.projectImages[selectedImageIndex].alt}</h3>
                    <p>{selectedImageIndex + 1} of {currentExperience.projectImages.length}</p>
                  </div>
                </div>
                
                {currentExperience.projectImages.length > 1 && (
                  <button className="ProjectsList-modal-nav ProjectsList-modal-nav--right" onClick={handleNextImage}>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6"></polyline>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default ProjectsList;