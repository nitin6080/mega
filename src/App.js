// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FloatingAppContainer from './components/FloatingAppContainer';
import WeatherApp from './features/weather/WeatherApp';
import CalculatorApp from './features/calculator/CalculatorApp';

const App = () => {
    return (
        <Router>
            <FloatingAppContainer>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/weather" element={<WeatherApp />} />
                    <Route path="/calculator" element={<CalculatorApp />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </FloatingAppContainer>
        </Router>
    );
};

export default App;
