import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {

    return (
        <Router>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact-page" component={ContactPage} />
            <Route exact path="/projects-page" component={ProjectsPage} />
        </Router>
    );
}

export default App;