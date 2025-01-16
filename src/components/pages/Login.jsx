import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PulsatingHeart from '../ui/PulsatingHeart';
import Button from '../ui/Button';

function Login() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        setTimeout(() => {
            setIsVisible(true); // Start the fade-in animation after page load
        }, 100);
        }, []);

    const index = () => {
        setIsVisible(false);
        setTimeout(() => {
            navigate('/');
        }, 1000);
    }

    const responseState = {
        STANDARD: "standard",
        EMPTY: "empty",
        INVALID: "invalid"
    };
    //Login Email Address
    const [loginName, setLoginName] = useState("");
    const [loginNameState, setLoginNameState] = useState(responseState.STANDARD)

    const login = () => {
        setLoginNameState(responseState.STANDARD)

        const resultName=validateName(loginName,setLoginNameState)
        if(!resultName){
            return false    
        }
    }

    const validateName = (x, setState) => {
        // Her name
        const name = 'Nikki So';

        if (!x){
            setLoginNameState(responseState.EMPTY)
            return false
        }
        // Checks if input meets name
        if (x !== name) {
            setLoginNameState(responseState.INVALID)
            return false
        }
        // Proceed if name is correct
        setLoginNameState(responseState.STANDARD)
        return true
    }


    return(
        <>
        <div className={`grid grid-rows-3 grid-cols-3 gap-0 min-h-screen transition-all duration-1000 ease-in-out 
                ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
                `}
                style={{ transform: "translateZ(0)", willChange: "opacity, transform" }}
                > 
            <div className='grid col-start-2 justify-center items-start'>
                <div className='flex flex-row items-center space-x-3 p-4'>
                    <h1 className="text-4xl font-bold">
                        Project Valentine
                    </h1>
                    <PulsatingHeart/>
                </div>
            </div>
            <div className='grid row-start-2 col-start-2 justify-center'>
                <div className='flex flex-col justify-center items-center space-y-2'>
                    <form className='flex flex-col justify-center items-center space-y-2'>
                        <h2 className='text-xl'>
                            Enter Your Fullname
                        </h2>
                        <input className={`${loginNameState === responseState.STANDARD ? 'border-black' : 'border-red-500'}
                        max-w-[500px] w-[100%] bg-inherit border-2 border-login-entry rounded-md p-2 mx-auto shadow-login-entry text-black`}
                        type="text"
                        placeholder="Your Name"
                        value={loginName}
                        onChange={(e) => setLoginName(e.target.value)}>
                        </input>
                    
                        <span className="text-sm text-red-500 text-center w-full max-w-[500px] h-[1.25rem]">
                            {loginNameState === responseState.STANDARD && ' '}
                            {loginNameState === responseState.EMPTY && 'Please enter your fullname'}
                            {loginNameState === responseState.INVALID && "This only accepts Stephen's girlfriend."}
                        </span>
                    </form>
                    <Button text={'Login'} onClick={login}/>
                </div>
                
                
            </div>
            <div className='grid row-end col-start-2'>
                <div className='flex flex-col justify-center items-center'>
                    <Button text="Back" onClick={index}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login