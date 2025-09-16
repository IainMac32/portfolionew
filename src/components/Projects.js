import React, { useRef, useEffect, useState } from 'react';
import '../styles/Projects.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import artSuggester from '../assets/ArtSuggester.jpg';
import justTheInstructions from '../assets/JustTheInstructions.jpg';
import secondBrain from '../assets/SecondBrain.jpg';
import sparkSlides from '../assets/SparkSlides.jpg';
import portfolioHome from '../assets/portfolioHome.png';


function Projects() {
    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const boxRef4 = useRef(null);
    const boxRef5 = useRef(null);

    const transitionCircleRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
  
    // Initialize states based on whether we need the transition
    const shouldStartWithTransition = location.state?.startBlack;
    const [showTransitionCircle, setShowTransitionCircle] = useState(shouldStartWithTransition);
    const [circleState, setCircleState] = useState(shouldStartWithTransition ? 'project-covering' : 'project-hidden');
    const [showContent, setShowContent] = useState(!shouldStartWithTransition);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        if (shouldStartWithTransition) {
            // Start with circle covering screen, then shrink to reveal content
            setTimeout(() => {
                setCircleState('project-shrinking');
                setShowContent(true);
                
                // After shrink animation completes, hide the circle
                setTimeout(() => {
                    setShowTransitionCircle(false);
                    setCircleState('project-hidden');
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
        box.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    const handleNavigateToExperience = (pageToGoTo) => () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setShowTransitionCircle(true);
        setCircleState('project-expanding');
        
        // Navigate after expansion animation completes
        setTimeout(() => {
            navigate('/projectsList', { state: { startBlack: true, page: pageToGoTo } });
        }, 1000); // Match your CSS transition duration
    };

    const handleNavigateToHome =  () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setShowTransitionCircle(true);
        setCircleState('project-expanding');
        
        // Navigate after expansion animation completes
        setTimeout(() => {
            navigate('/', { state: { startBlack: true } });
        }, 1000); // Match your CSS transition duration
    };

    return (
        <div className="project-container">
            <div className="project-experience-container">
                <div id="project-animated-background"></div>
                
                {showContent && (
                    <>
                        <div className="project-home-exp-container">
                        <div onClick={handleNavigateToHome} className='project-experience-text-box2'>Home</div>
                        <div className="project-text-boxes-container">
                            <div
                                ref={boxRef1}
                                className="project-experience-text-box1"
                                onMouseMove={handleMouseMove(boxRef1)}
                                onMouseLeave={handleMouseLeave(boxRef1)}
                                onClick={handleNavigateToExperience(0)}
                            >
                                <img src={artSuggester} alt="artSuggester" className="project-button-image" />
                                <h1 className="project-title">Art Suggester AI</h1>
                                <p className="project-description">Full-stack app that recommends art based on art supplies — McMaster AI Society project.</p>
                            </div>
                            <div
                                ref={boxRef2}
                                className="project-experience-text-box1"
                                onMouseMove={handleMouseMove(boxRef2)}
                                onMouseLeave={handleMouseLeave(boxRef2)}
                                onClick={handleNavigateToExperience(1)}
                            >
                                <img src={justTheInstructions} alt="justTheInstructions" className="project-button-image" />
                                <h1 className="project-title">Just The Instructions</h1>
                                <p className="project-description">Google Chrome extension that filters recipe websites.</p>
                            </div>
                            <div
                                ref={boxRef3}
                                className="project-experience-text-box1"
                                onMouseMove={handleMouseMove(boxRef3)}
                                onMouseLeave={handleMouseLeave(boxRef3)}
                                onClick={handleNavigateToExperience(2)}
                            >
                                <img src={secondBrain} alt="secondBrain" className="project-button-image" />
                                <h1 className="project-title">SecondBrain</h1>
                                <p className="project-description">Full-stack app for easy document search and answers — McMaster AI Society project.</p>
                            </div>
                            <div
                                ref={boxRef4}
                                className="project-experience-text-box1"
                                onMouseMove={handleMouseMove(boxRef4)}
                                onMouseLeave={handleMouseLeave(boxRef4)}
                                onClick={handleNavigateToExperience(3)}
                            >
                                <img src={sparkSlides} alt="sparkSlides" className="project-button-image" />
                                <h1 className="project-title">SparkSlides</h1>
                                <p className="project-description">A McMaster Google Hackathon project that automates slide show creation.</p>
                            </div>
                            <div
                                ref={boxRef5}
                                className="project-experience-text-box1"
                                onMouseMove={handleMouseMove(boxRef5)}
                                onMouseLeave={handleMouseLeave(boxRef5)}
                                onClick={handleNavigateToExperience(4)}
                            >
                                <img src={portfolioHome} alt="Porfolio Home" className="project-button-image" />
                                <h1 className="project-title">Portfolio Website</h1>
                                <p className="project-description">My React.js portfolio website.</p>
                            </div>
                        </div>
                        </div>
                    </>
                )}

                {showTransitionCircle && (
                    <div
                        ref={transitionCircleRef}
                        className={`project-transition-circle2 ${circleState}`}
                    />
                )}
            </div>
        </div>
    );
}

export default Projects;