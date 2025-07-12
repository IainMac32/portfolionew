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

// Skill details data
const skillDetails = {
    "Python": {
        title: "Python",
        description: "Proficient in Python for backend development, data analysis, and machine learning. Experienced with frameworks like Django and Flask, as well as libraries for data science and automation.",
        projects: ["Web scraping automation", "Data analysis dashboards", "REST API development", "Machine learning models"]
    },
    "Flask": {
        title: "Flask",
        description: "Skilled in building lightweight web applications and APIs using Flask. Experience with routing, templating, database integration, and deployment.",
        projects: ["RESTful API services", "Web application backends", "Microservices architecture", "Database integration"]
    },
    "Java": {
        title: "Java",
        description: "Strong foundation in Java for enterprise applications, object-oriented programming, and software development. Familiar with Spring framework and Maven.",
        projects: ["Enterprise web applications", "Desktop applications", "Database connectivity", "API integrations"]
    },
    "C": {
        title: "C",
        description: "Solid understanding of C programming for system-level programming and algorithms. Experience with memory management, pointers, and data structures.",
        projects: ["System programming", "Algorithm implementations", "Data structure libraries", "Performance optimization"]
    },
    "TensorFlow": {
        title: "TensorFlow",
        description: "Experience building and training machine learning models using TensorFlow. Familiar with neural networks, deep learning, and model deployment.",
        projects: ["Image classification models", "Natural language processing", "Predictive analytics", "Model optimization"]
    },
    "NumPy": {
        title: "NumPy",
        description: "Proficient in NumPy for numerical computing and data manipulation. Extensive use in data analysis, scientific computing, and machine learning preprocessing.",
        projects: ["Data preprocessing pipelines", "Statistical analysis", "Mathematical computations", "Array operations"]
    },
    "SQL": {
        title: "SQL",
        description: "Strong database skills with SQL for data querying, database design, and optimization. Experience with PostgreSQL, MySQL, and complex query optimization.",
        projects: ["Database design", "Query optimization", "Data warehousing", "Reporting systems"]
    },
    "MongoDB": {
        title: "MongoDB",
        description: "Experience with MongoDB for NoSQL database solutions. Skilled in document-based data modeling, aggregation pipelines, and performance optimization.",
        projects: ["Document storage systems", "Real-time analytics", "Scalable web applications", "Data aggregation"]
    },
    "Reactjs": {
        title: "React.js",
        description: "Experienced in building modern, responsive web applications using React. Proficient with hooks, state management, and component architecture.",
        projects: ["Single-page applications", "Interactive dashboards", "Component libraries", "State management solutions"]
    },
    "CSS/HTML": {
        title: "CSS/HTML",
        description: "Strong foundation in HTML5 and CSS3 for creating responsive, accessible web interfaces. Experience with modern CSS features and responsive design.",
        projects: ["Responsive web designs", "CSS animations", "Accessible interfaces", "Cross-browser compatibility"]
    },
    "JavaScript": {
        title: "JavaScript",
        description: "Proficient in modern JavaScript (ES6+) for both frontend and backend development. Experience with asynchronous programming, DOM manipulation, and modern frameworks.",
        projects: ["Interactive web applications", "API integrations", "DOM manipulation", "Async programming"]
    }
};

function SkillsPage() {
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
                                            <li key={idx}>{project}</li>
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