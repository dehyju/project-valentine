import React, { useState, useEffect } from 'react';

const Tooltip = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    const animation = () => {
      return new Promise((resolve) => {
        setShowTooltip(true);
          setTimeout(() => {
            setShowTooltip(false);
            resolve(); // Resolve the promise once the function is done
          }, 4000); // Simulate async work (1 second delay)
      });
    };

    const interval = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(); // Resolve the promise once the function is done
        }, 4000); // Simulate async work (1.5 second delay)
      });
    };
    
    useEffect(() => {
      // Function to show the tooltip at random intervals
      /*const interval = setInterval(() => {
        setShowTooltip(true);
  
        // Hide tooltip after 1 second
        setTimeout(() => {
          setShowTooltip(false);
        }, 4000); // Tooltip disappears after 1 second
  
      }, Math.floor(Math.random() * (9000 - 8000 + 1)) + 8000); // Random interval between 3 and 5 seconds
  
      // Clean up interval when component is unmounted
      return () => clearInterval(interval);*/
      const executeLoop = async () => {
        while (true) {
          // Wait for function1 to finish before calling function2
          await animation();
          
          // Wait for function2 to finish before going back to function1
          await interval();
        }
      };
      executeLoop();
    }, []);
  
    return (
        <>
        {/* Tooltip */}
        {showTooltip && (
            <div className="absolute animate-pulse-in transform -translate-x-1/2 px-4 py-2 bg-gray-700 text-white text-sm rounded-md shadow-lg"
            style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}>
                There's something I need to ask you 
            </div>
        )}
        </>
    );
  };
  
  export default Tooltip;