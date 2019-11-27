import React, { useState, useEffect } from 'react';
import { cuboidData } from './MainContainerData.jsx';
import Cuboid from '../components/Cuboid.jsx';
import { useSpring, animated } from 'react-spring';



export default () => {

  const [ cuboidIndex, setCuboidIndex ] = useState(0);

  const [ isExploded, setIsExploded ] = useState(false);

  const [ boxSpring, setBoxSpring ] = useSpring(() => ({scale: 0.4}));

  const [ boxSpringToggle, setBoxSpringToggle ] = useState(true);

  const clickButtonHandler = (action) => {
    switch(action) {
      case 'next':
        setCuboidIndex(cuboidIndex < cuboidData.cuboids.length - 1 ? cuboidIndex + 1 : 0);
        break;
      case 'previous':
        setCuboidIndex(cuboidIndex > 0 ? cuboidIndex - 1 : cuboidData.cuboids.length - 1);
        break;
      case 'scale':
        setBoxSpringToggle(!boxSpringToggle);
        break;
      case 'explode':
        setIsExploded(!isExploded);
        break;
      default:
        console.log(`clickButtonHandler called with unrecognized action: '${action}'`);
    }
  }

  useEffect(() => {
    if (boxSpringToggle === false) {
      setBoxSpring({from: {scale: 1.0}, to: {scale: 0.4}});
    } else {
      setBoxSpring({from: {scale: 0.4}, to: {scale: 1.0}});
    }
  }, [boxSpringToggle]);

 
  return (
    <div>

    <animated.div 
      style={{      transform: boxSpring.scale.interpolate(scale => `scale3d(${scale},${scale},${scale})`)}}>

    <Cuboid 
      size={        cuboidData.cuboids[cuboidIndex].size} 
      imagePath={   cuboidData.cuboids[cuboidIndex].imagePath} 
      isExploded={  isExploded}/></animated.div>

    <button 
      onClick={     () => clickButtonHandler('previous')}
      className=    "menu-button">
                    {`<< PREV`}
                    </button>

    <button 
      onClick={     () => clickButtonHandler('next')}
      className=    "menu-button">
                    {`NEXT >>`}
                    </button>

    <button 
      onClick={     () => clickButtonHandler('explode')}
      className=    "menu-button">
                    {`EXPLODE`}
                    </button>

    <button 
      onClick={     () => clickButtonHandler('scale')}
      className=    "menu-button">
                    {`ZOOM ${boxSpringToggle ? 'OUT' : 'IN'}`}
                    </button>

    </div>
  );
}





