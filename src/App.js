
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopMenu from './components/TopMenu';

function App() {
    return (
        <Router>
            <div>
                <TopMenu />
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/about" element={<div>About Page</div>} />
                    <Route path="/services" element={<div>Services Page</div>} />
                    <Route path="/contact" element={<div>Contact Page</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
