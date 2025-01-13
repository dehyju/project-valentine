import React, { useState, useEffect } from 'react';

const Tooltip = () => {
    const [showTooltip, setShowTooltip] = useState(false);
  
    useEffect(() => {
      // Function to show the tooltip at random intervals
      const interval = setInterval(() => {
        setShowTooltip(true);
  
        // Hide tooltip after 1 second
        setTimeout(() => {
          setShowTooltip(false);
        }, 2000); // Tooltip disappears after 1 second
  
      }, Math.floor(Math.random() * (5000 - 4000 + 1)) + 4000); // Random interval between 3 and 5 seconds
  
      // Clean up interval when component is unmounted
      return () => clearInterval(interval);
    }, []);
  
    return (
        <>
        {/* Tooltip */}
        {showTooltip && (
            <div className="absolute animate-pulse-in transform -translate-x-1/2 px-4 py-2 bg-gray-700 text-white text-sm rounded-md shadow-lg">
                You make my heart beat faster... 
            </div>
        )}
        </>
    );
  };
  
  export default Tooltip;