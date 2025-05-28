import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExeriencePage from './components/Experience';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/experience" element={<ExeriencePage />} />
            </Routes>
        </Router>
    );
}

export default App;