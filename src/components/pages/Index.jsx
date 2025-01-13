import PulsatingHeart from '../ui/PulsatingHeart'
import Tooltip from '../ui/Tooltip'
import Button from '../ui/Button'

function Index() {

    return(
        <>
        <div className='min-h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-center items-center space-x-3 p-4'>
                <h1 className="text-4xl font-bold">
                    Project Valentine
                </h1>
                <PulsatingHeart/>
            </div>
            <Button text="Click Me"/>
            <div className='flex flex-col justify-self-end items-center pt-4'>
            <Tooltip/>
            </div>
        </div>
        
        
        
        </>

    )
}

export default Index