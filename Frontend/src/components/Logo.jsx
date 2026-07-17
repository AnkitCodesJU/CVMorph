import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Main document body */}
        <path 
          d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" 
          stroke="#c9d1d9" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* The Origami Fold */}
        <path 
          d="M14 2V8H20" 
          stroke="#58a6ff" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        {/* Abstract Morphing lines */}
        <path 
          d="M8 13H16M8 17H12" 
          stroke="#238636" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-2xl font-bold tracking-tight text-white">
        CVMorph
      </span>
    </div>
  );
};

export default Logo;
