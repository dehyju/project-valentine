import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PulsatingHeart from '../ui/PulsatingHeart';
import Tooltip from '../ui/Tooltip';
import Button from '../ui/Button';

//Index Landing Page
function Index() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true); // Start the fade-in animation after page load
        }, 100);
      }, []);

    const login = () => {
        setIsVisible(false);
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    }
    

    return(
        <>
        <div className='grid grid-rows-3 grid-cols-3 gap-0 min-h-screen'> 
            <div className='grid row-start-2 col-start-2 justify-center items-center'>
                <div className={`flex flex-col justify-center items-center space-y-2 transition-all duration-1000 ease-in-out 
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
                style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
                >
                    <div className='flex flex-row items-center space-x-3 p-4'>
                        <h1 className="text-4xl font-bold">
                            Project Valentine
                        </h1>
                        <PulsatingHeart/>
                    </div>
                    <Button text="Click Me" onClick={login}/>
                </div>
            </div>
            <div className='grid row-start-3 col-start-2 justify-center items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <Tooltip/>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Index