import HeartSVG from '../../assets/red-heart-icon.svg'

const PulsatingHeart = () => {
    return (
        <>
        <img src={HeartSVG} alt='Icon' className='h-[1em] pulsating-heart'></img>
        </>
  );
};

export default PulsatingHeart;