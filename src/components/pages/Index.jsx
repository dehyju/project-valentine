import PulsatingHeart from '../ui/PulsatingHeart'
import Tooltip from '../ui/Tooltip'

function Index() {

    return(
        <>
        <div className='flex flex-row justify-center items-center space-x-3 p-4'>
            <h1 className="text-4xl font-bold">
                Project Valentine
            </h1>
            <div>
                <PulsatingHeart/>
                <Tooltip/>
            </div>
        </div>
        </>

    )
}

export default Index