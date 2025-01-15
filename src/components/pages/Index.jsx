import { useNavigate } from 'react-router-dom';

import PulsatingHeart from '../ui/PulsatingHeart';
import Tooltip from '../ui/Tooltip';
import Button from '../ui/Button';

//Index Landing Page
function Index() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true);

    const handleFadeOut = () => {
        setIsVisible(false);
    };
    const login = () => {

        navigate('/login');
    }
    

    return(
        <>
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-center items-center space-x-3 p-4'>
                <h1 className="text-4xl font-bold">
                    Project Valentine
                </h1>
                <PulsatingHeart/>
            </div>
            <Button text="Click Me" onClick={login}/>
            <div className='flex flex-col justify-self-end items-center pt-4'>
            <Tooltip/>
            </div>
        </div>
        </>
    )
}

export default Index