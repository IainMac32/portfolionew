import React, { useRef, useEffect, useState, useCallback } from 'react';
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

import portfolioHome from '../assets/portfolioHome.png';


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
      subtitle: "Team Lead",
      date: "2024 Sep - 2025 Mar",
      linkText: "GitHub",
      linkUrl: "https://github.com/McMasterAI2024-2025/ArtSuggesterAI",   // or your repo URL  
      techStack: [
        { name: "Python", icon: "🐍" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "Convolutional Neural Network", icon: "📷" },
        { name: "React", icon: "⚛️" }
      ],
      bullets: [
        "Our team of 7 created a project that allows users to take pictures of paint, pencil crayons, or markers they have and suggests art they can create with the colours and medium they took a photo of.",
        "The project utilized Python, TensorFlow, PIL for the backend to detect the medium and colours in the photo. For the frontend React.js, and Firebase helped make a user-friendly website.",
        "Led weekly meetings to discuss progress on the front and back end, assign tasks, and ensure deadlines were being met."
      ],
      projectImages: [
        { src: artsuggesterMain, alt: "Art Suggester Team" },
        { src: artsuggester1, alt: "Art Suggester 1" },
        { src: artsuggester2, alt: "Art Suggester 2" },
      ]
    },
    {
      title: "Just The Instructions",
      subtitle: "Software Developer",
      date: "2024 May - 2025 Jul",
      linkText: "GitHub",
      linkUrl: "https://github.com/kristiandiana/JustTheInstructions",   // or your repo URL  
      techStack: [
        { name: "Python", icon: "🐍" },
        { name: "TensorFlow", icon: "🧠" },
        { name: "Convolutional Neural Network", icon: "📷" }
      ],
      bullets: [
        "Developed JustTheInstructions, a Chrome extension that automatically extracts clean, step-by-step instructions from recipe and tutorial pages, removing ads and unnecessary content for a faster user experience.",
        "Collected a dataset of ~1M labeled sentences by scraping 5,000+ instructional websites across 5 categories, enabling training and validation of a custom NLP model with 99.6% test accuracy on 100k sentences.",
        "Delivered a lightweight, fast, and fully local solution that powers instant instruction extraction, earning 60+ five-star ratings on the Chrome Web Store."
      ],
      projectImages: [
        { src: justtheinstructionsMain, alt: "Just The Instructions Main Page" },
        { src: justtheinstructions1, alt: "Just The Instructions 1" },
        { src: justtheinstructions2, alt: "Just The Instructions 2" },
        { src: justtheinstructions3, alt: "Just The Instructions 3" }
      ]
    },
    {
      title: "Second Brain",
      subtitle: "Software Developer",
      date: "2023 Oct - 2024 Mar",
      linkText: "GitHub",
      linkUrl: "https://github.com/McMasterAI/Second-Brain",   // or your repo URL  
      techStack: [
        { name: "Python", icon: "🐍" },
        { name: "Database", icon: "🗄️" },
        { name: "Vectorization", icon: "🧮" },

      ],
      bullets: [
        "Developed a Python based document Q&A tool leveraging Large Language Models, Vector Databases, and Similarity Search APIs.",
        "Contributed to team sessions within a group of 7, focusing on techniques to improve user interaction and response accuracy.",
        "Presented at the Canadian Undergraduate Conference on AI, which led to a collaboration with the Tutor.AI startup."
      ],
      projectImages: [
        { src: secondbrainMain, alt: "SecondBrain Team" },
        { src: secondbrain1, alt: "SecondBrain 1" },
      ]
    },
    {
      title: "SparkSlides",
      subtitle: "Hackathon Project",
      date: "2024 Feb",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  
      techStack: [
        { name: "Python", icon: "🐍" },
        { name: "AI", icon: "🤖" },
        { name: "React.js", icon: "⚛️" },
      ],
      bullets: [
        "Won 1st place in the Equality & Accessibility category at the Google Developer Groups McMaster Hackathon, competing against 175+ participants over a 26-hour event.",
        "Developed SparkSlides, an AI-powered tool that automates slideshow creation by integrating Google Slides, Google Drive, Google Image Search APIs, and OpenAI's WhisperAI and GPT-4.",
        "Delivered a fully formatted presentation generator that supports the United Nations Sustainable Development Goals, producing slides with titles, bullet points, and relevant images from just a topic input."
      ],
      projectImages: [
        { src: sparkslidesMain, alt: "SparkSlides Team" },
        { src: sparkslides1, alt: "SparkSlides 1" },
        { src: sparkslides2, alt: "SparkSlides 2" }
      ]
    },
    {
      title: "Portfolio Website",
      subtitle: "",
      date: "2025 Jun - Present",
      linkText: "GitHub",
      linkUrl: "",   // or your repo URL  
      techStack: [
        { name: "React.js", icon: "⚛️" },
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" }
                ],
      bullets: [
        "Applied React.js, HTML, and CSS to develop a personal portfolio website.",
        "This task involved mastering intricate details and implementing these technologies to create a user-friendly and visually appealing interface. It also showcases a diverse array of React.js techniques that can be transferred to other front-end projects.",
      ],
      projectImages: [
        { src: portfolioHome, alt: "Check out the website!" },
      ]
    },

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

  // Move currentExperience definition BEFORE the useCallback hooks
  const currentExperience = experiences[currentExperienceIndex];

  const handleNextImage = useCallback(() => {
    const totalImages = currentExperience.projectImages.length;
    setSelectedImageIndex((prev) => (prev + 1) % totalImages);
  }, [currentExperience.projectImages.length]);

  const handlePrevImage = useCallback(() => {
    const totalImages = currentExperience.projectImages.length;
    setSelectedImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [currentExperience.projectImages.length]);

  useEffect(() => {
    const handleModalKeyPress = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

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
  }, [showImageModal, selectedImageIndex, handleNextImage, handlePrevImage]);

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