import React, { useRef, useEffect, useState } from 'react';
import '../styles/Experience.css';
import image from '../assets/IainPhoto.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import firstOntarioLogo from '../assets/firstontarioLogo2.png';

function Experience() {
    const boxRef1 = useRef(null);
    const boxRef2 = useRef(null);
    const boxRef3 = useRef(null);
    const boxRef4 = useRef(null);
    const boxRef5 = useRef(null);
    const boxRef6 = useRef(null);

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

    const handleNavigateToHome = () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setShowTransitionCircle(true);
        setCircleState('expanding');
        
        // Navigate after expansion animation completes
        setTimeout(() => {
            navigate('/', { state: { startBlack: true } });
        }, 500); // Match your CSS transition duration
    };

    return (
        <div className="experience-container">
            <div id="animated-background"></div>
            
            {showContent && (
                <>
                    <img src={image} alt="Iain" className="left-image-e" />
                    <div className="home-exp-container">
                    <div onClick={handleNavigateToHome} className='experience-text-box2'>Home</div>
                    <div className="text-boxes-container">
                        <div
                            ref={boxRef1}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef1)}
                            onMouseLeave={handleMouseLeave(boxRef1)}
                            onClick={handleNavigateToExperience}
                        >
                            <h1 className="title">FirstOntario Credit Union</h1>
                            <h2 className="subtitle">Junior Security Analyst</h2>
                            <div className="date-logo-container">
                                <h3 className="subsubtitle">2025 Apr - current</h3>
                                <img src={firstOntarioLogo} alt="FirstOntario Logo" className="fcu-logo" />
                            </div>
                        </div>
                        <div
                            ref={boxRef2}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef2)}
                            onMouseLeave={handleMouseLeave(boxRef2)}
                            onClick={handleNavigateToExperience}
                        >
                            <h1 className="title">Experience Title 2</h1>
                            <h2 className="subtitle">Secondary Title 2</h2>
                        </div>
                        <div
                            ref={boxRef3}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef3)}
                            onMouseLeave={handleMouseLeave(boxRef3)}
                            onClick={handleNavigateToExperience}
                        >
                            <h1 className="title">Experience Title 3</h1>
                            <h2 className="subtitle">Secondary Title 3</h2>
                        </div>
                        <div
                            ref={boxRef4}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef4)}
                            onMouseLeave={handleMouseLeave(boxRef4)}
                            onClick={handleNavigateToExperience}
                        >
                            <h1 className="title">Experience Title 3</h1>
                            <h2 className="subtitle">Secondary Title 3</h2>
                        </div>
                        <div
                            ref={boxRef5}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef5)}
                            onMouseLeave={handleMouseLeave(boxRef5)}
                            onClick={handleNavigateToExperience}
                        >
                            <h1 className="title">Experience Title 3</h1>
                            <h2 className="subtitle">Secondary Title 3</h2>
                        </div>
                        <div
                            ref={boxRef6}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef6)}
                            onMouseLeave={handleMouseLeave(boxRef6)}
                            onClick={handleNavigateToExperience}
                        >
                            <h1 className="title">Experience Title 3</h1>
                            <h2 className="subtitle">Secondary Title 3</h2>
                        </div>
                    </div>
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