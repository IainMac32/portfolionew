import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExeriencePage from './components/Experience';
import FirstontarioPage from './components/Firstontario';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/Projects';
import ProjectsListPage from './components/ProjectsList';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/experience" element={<ExeriencePage />} />
                <Route path="/firstontario" element={<FirstontarioPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projectsList" element={<ProjectsListPage />} />

            </Routes>
        </Router>
    );
}

export default App;