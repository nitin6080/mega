// src/components/FloatingAppContainer.jsx
import React from 'react';

const FloatingAppContainer = ({ children }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap">
            {children}
        </div>
    );
};

export default FloatingAppContainer;
