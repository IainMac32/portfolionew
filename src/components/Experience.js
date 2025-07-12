import React, { useRef, useEffect, useState } from 'react';
import '../styles/Experience.css';
import image from '../assets/IainPhoto.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import firstOntarioLogo from '../assets/firstontarioLogo2.png';
import MacAILogo from '../assets/MacAILogo.png';
import GDGLogo from '../assets/GDGLogo.png';
import StemCampLogo from '../assets/StemCampLogoBackground.jpg';
import TutorAILogo from '../assets/TutorAILogoBackground.jpg';
import DigitalFireLogo from '../assets/digitalFireLogo.jpeg';

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

    const handleNavigateToExperience = (pageToGoTo) => () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setShowTransitionCircle(true);
        setCircleState('expanding');
        
        // Navigate after expansion animation completes
        setTimeout(() => {
            navigate('/firstontario', { state: { startBlack: true, page: pageToGoTo } });
        }, 1000); // Match your CSS transition duration
    };

    const handleNavigateToHome =  () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setShowTransitionCircle(true);
        setCircleState('expanding');
        
        // Navigate after expansion animation completes
        setTimeout(() => {
            navigate('/', { state: { startBlack: true } });
        }, 1000); // Match your CSS transition duration
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
                            onClick={handleNavigateToExperience(0)}
                        >
                            <h1 className="title">FirstOntario Credit Union</h1>
                            <h2 className="subtitle">Junior Security Analyst</h2>
                            <div className="date-logo-container">
                                <h3 className="subsubtitle">2025 Apr - Present</h3>
                                <img src={firstOntarioLogo} alt="FirstOntario Logo" className="fcu-logo" />
                            </div>
                        </div>
                        <div
                            ref={boxRef2}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef2)}
                            onMouseLeave={handleMouseLeave(boxRef2)}
                            onClick={handleNavigateToExperience(1)}
                        >
                            <h1 className="title">McMaster AI Society</h1>
                            <h2 className="subtitle">Project Lead & Software Developer</h2>
                            <div className="date-logo-container">
                                <h3 className="subsubtitle">2023 Oct - Present</h3>
                                <img src={MacAILogo} alt="MacAI Logo" className="small-logo" />
                            </div>
                        </div>
                        <div
                            ref={boxRef3}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef3)}
                            onMouseLeave={handleMouseLeave(boxRef3)}
                            onClick={handleNavigateToExperience(2)}
                        >
                            <h1 className="title">Google Developer Groups</h1>
                            <h2 className="subtitle">Software Developer</h2>
                            <div className="date-logo-container">
                                <h3 className="subsubtitle">2024 Sep - Present</h3>
                                <img src={GDGLogo} alt="GDG Logo" className="small-logo" />
                            </div>
                        </div>
                        <div
                            ref={boxRef4}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef4)}
                            onMouseLeave={handleMouseLeave(boxRef4)}
                            onClick={handleNavigateToExperience(3)}
                        >
                            <h1 className="title">Tutor.AI</h1>
                            <h2 className="subtitle">Software Consultant</h2>
                            <div className="date-logo-container">
                                <h3 className="subsubtitle">2024 Mar - 2024 Aug</h3>
                                <img src={TutorAILogo} alt="TutorAI Logo" className="small-logo" />
                            </div>
                        </div>
                        <div
                            ref={boxRef5}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef5)}
                            onMouseLeave={handleMouseLeave(boxRef5)}
                            onClick={handleNavigateToExperience(4)}
                        >
                            <h1 className="title">STEM Camp & Steamoji</h1>
                            <h2 className="subtitle">Camp Counselor</h2>
                            <div className="date-logo-container">
                                <h3 className="subsubtitle">2024 May - 2024 Aug</h3>
                                <img src={StemCampLogo} alt="StemCamp Logo" className="small-logo" />
                            </div>
                        </div>
                        <div
                            ref={boxRef6}
                            className="experience-text-box1"
                            onMouseMove={handleMouseMove(boxRef6)}
                            onMouseLeave={handleMouseLeave(boxRef6)}
                            onClick={handleNavigateToExperience(5)}
                        >
                            <h1 className="title">Digital Fire</h1>
                            <h2 className="subtitle">IT Co-op Placement</h2>
                            <div className="date-logo-container">
                                <h3 className="subsubtitle">2022 Feb - 2022 Jun</h3>
                                <img src={DigitalFireLogo} alt="Digital Fire Logo" className="small-logo" />
                            </div>
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