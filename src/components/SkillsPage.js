import React, { useRef, useEffect, useState } from 'react';
import '../styles/Skills.css';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import PythonLogo from '../assets/python.png';
import FlaskLogo from '../assets/flaskLogo.png';
import JavaLogo from '../assets/java.png';
import CLogo from '../assets/C.png';

import TensorFlowLogo from '../assets/TensorFlowLogo.png';
import NumPyLogo from '../assets/numpyLogo.png';
import SQL from '../assets/sqlLogo.webp';
import MongoDBLogo from '../assets/mongodbLogo.png';

import ReactJS from '../assets/react.png';
import CssHtmlLogo from '../assets/cssLogo.png';
import JSLogo from '../assets/javascript.png';

const back_end_images = [PythonLogo, FlaskLogo, JavaLogo, CLogo];
const libraries_images = [TensorFlowLogo, NumPyLogo, SQL, MongoDBLogo];
const front_end_images = [ReactJS, CssHtmlLogo, JSLogo];

// Project name to index mapping
const projectIndexMap = {
    "Art Suggester AI": 0,
    "Just The Instructions": 1,
    "SecondBrain": 2,
    "SparkSlides": 3,
    "Personal Portfolio": 4
};

// Skill details data
const skillDetails = {
    "Python": {
        title: "Python - 6 years",
        description: "Python is likely my strongest coding language, as I have been using it since I was about 14 and continue to use it within AI. Some libraries that I am continuously using for my AI projects are: TensorFlow, PIL, Pandas, NumPy, and Matplotlib.",
        projects: ["Art Suggester AI", "Ocular Disease Identifier", "Just The Instructions", "SecondBrain", "SparkSlides"]
    },
    "Flask": {
        title: "Flask - 3 years",
        description: "Skilled in building lightweight web applications and APIs using Flask. Experience with routing, templating, database integration, and deployment.",
        projects: ["Art Suggester AI", "Ocular Disease Identifier", "SecondBrain", "SparkSlides"]
    },
    "Java": {
        title: "Java - 2 years",
        description: "Strong foundation in Java for object-oriented programming, and data structures and algorithms.",
        projects: ["Data Structures and Algorithms Class"]
    },
    "C": {
        title: "C - 1 year",
        description: "Solid understanding of C programming for system-level programming and algorithms. Experience with memory management and pointers.",
        projects: ["Development Basics Class"]
    },
    "TensorFlow": {
        title: "TensorFlow - 2 years",
        description: "Experience building and training machine learning models using TensorFlow. Familiar with neural networks and deep learning.",
        projects: ["Art Suggester AI", "Ocular Disease Identifier", "Just The Instructions"]
    },
    "NumPy": {
        title: "NumPy - 2 years",
        description: "Proficient in NumPy for data manipulation. Extensive use in machine learning preprocessing.",
        projects: ["Art Suggester AI"]
    },
    "SQL": {
        title: "SQL - 1 year",
        description: "Strong database skills with SQL for data querying, database design, and optimization. Experience with MySQL",
        projects: ["Databases Class"]
    },
    "MongoDB": {
        title: "MongoDB - 2 years",
        description: "Experience with MongoDB for NoSQL database solutions. Skilled in performance optimization.",
        projects: ["Art Suggester AI", "Ocular Disease Identifier"]
    },
    "Reactjs": {
        title: "React.js - 2 years",
        description: "Experienced in building modern, responsive web applications using React.",
        projects: ["Art Suggester AI","Personal Portfolio"]
    },
    "CSS/HTML": {
        title: "CSS/HTML - 2 years",
        description: "Strong foundation in HTML and CSS for creating responsive, accessible web interfaces.",
        projects: ["Art Suggester AI","Personal Portfolio"]
    },
    "JavaScript": {
        title: "JavaScript - 2 years",
        description: "Proficient in modern JavaScript for both frontend and backend development.",
        projects: ["Art Suggester AI","Personal Portfolio"]
    }
};

function SkillsPage() {

    const transitionCircleRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();
  
    // Initialize states based on whether we need the transition
    const shouldStartWithTransition = location.state?.startBlack;
    const [showTransitionCircle, setShowTransitionCircle] = useState(shouldStartWithTransition);
    const [circleState, setCircleState] = useState(shouldStartWithTransition ? 'covering' : 'hidden');
    const [showContent, setShowContent] = useState(!shouldStartWithTransition);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // New state for skill selection
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedSkillSection, setSelectedSkillSection] = useState(null);
    
    // Ref for the skill details element
    const skillDetailsRef = useRef(null);
    
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

    // Effect to handle dynamic positioning of skill details
    useEffect(() => {
        if (selectedSkill && selectedSkillSection === 'Front-end' && skillDetailsRef.current) {
            // Small delay to ensure DOM is updated
            setTimeout(() => {
                const detailsElement = skillDetailsRef.current;
                const detailsHeight = detailsElement.offsetHeight;
                
                // Position above the skill box with 10px padding
                const topPosition = -(detailsHeight + 15);
                detailsElement.style.top = `${topPosition}px`;
            }, 10);
        }
    }, [selectedSkill, selectedSkillSection]);

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

    const handleNavigateToProject = (pageToGoTo) => () => {
        if (isTransitioning) return;
        
        setIsTransitioning(true);
        setShowTransitionCircle(true);
        setCircleState('project-expanding');
        
        // Navigate after expansion animation completes
        setTimeout(() => {
            navigate('/projectsList', { state: { startBlack: true, page: pageToGoTo } });
        }, 1000); // Match your CSS transition duration
    };

    const handleSkillClick = (skillName, sectionName) => {
        if (selectedSkill === skillName) {
            // If clicking the same skill, deselect it
            setSelectedSkill(null);
            setSelectedSkillSection(null);
        } else {
            // Select the new skill
            setSelectedSkill(skillName);
            setSelectedSkillSection(sectionName);
        }
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

    // Helper function to determine if a project is clickable
    const isProjectClickable = (projectName) => {
        return projectIndexMap.hasOwnProperty(projectName);
    };

    const renderSkillSection = (sectionTitle, skillNames, images) => (
        <div className="skill-section">
            <h2 className="section-header"><span>{sectionTitle}</span></h2>
            <div className="skill-grid">
                {skillNames.map((skillName, index) => (
                    <div key={index} className="skill-item">
                        <div 
                            className={`skill-box ${selectedSkill === skillName ? 'selected' : ''}`}
                            onClick={() => handleSkillClick(skillName, sectionTitle)}
                        >
                            <img src={images[index]} alt={skillName} />
                            {skillName}
                        </div>
                        {selectedSkill === skillName && (
                            <div 
                                className="skill-details"
                                ref={selectedSkillSection === 'Front-end' ? skillDetailsRef : null}
                            >
                                <h3>{skillDetails[skillName].title}</h3>
                                <p>{skillDetails[skillName].description}</p>
                                <div className="projects-section">
                                    <h4>Related Projects:</h4>
                                    <ul>
                                        {skillDetails[skillName].projects.map((project, idx) => (
                                            <li key={idx}>
                                                {isProjectClickable(project) ? (
                                                    <span 
                                                        className="clickable-project"
                                                        onClick={handleNavigateToProject(projectIndexMap[project])}
                                                    >
                                                        {project}
                                                    </span>
                                                ) : (
                                                    project
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="experience-container">
            <button
                onClick={handleNavigateToHome}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="home-button-top-left"
            >
                Home
            </button>
            <div id="animated-background"></div>
            
            {showContent && (
                <>
                    <div className="skills-wrapper">
                        <h1 className="skills-title"><span>Select a Skill to View Related Projects!</span></h1>

                        {renderSkillSection("Back-end", ["Python", "Flask", "Java", "C"], back_end_images)}
                        {renderSkillSection("Libraries and Databases", ["TensorFlow", "NumPy", "SQL", "MongoDB"], libraries_images)}
                        {renderSkillSection("Front-end", ["Reactjs", "CSS/HTML", "JavaScript"], front_end_images)}
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

export default SkillsPage;