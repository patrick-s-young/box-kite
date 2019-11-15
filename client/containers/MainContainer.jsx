import React, { useState, useEffect } from 'react';
import { cuboidData } from './MainContainerData.jsx';
import Cuboid from '../components/Cuboid.jsx';
import { useSpring, animated, interpolate } from 'react-spring';


export default () => {

  const [ cuboidIndex, setCuboidIndex ] = useState(0);

  const [ isExploded, setIsExploded ] = useState(false);

  const [ boxSpring, setBoxSpring ] = useSpring(() => ({scale: 0.3}));

  const [ boxSpringToggle, setBoxSpringToggle ] = useState(false);

  const clickButtonHandler = (action) => {
    switch(action) {
      case 'next':
        setCuboidIndex(cuboidIndex < cuboidData.cuboids.length - 1 ? cuboidIndex + 1 : 0);
        break;
      case 'previous':
        setCuboidIndex(cuboidIndex > 0 ? cuboidIndex - 1 : cuboidData.cuboids.length - 1);
        break;
      case 'scale':
        // 
        console.log(`in clickButtonHandler with action = ${action}`);
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
      setBoxSpring({from: {scale: 1.0}, to: {scale: 0.3}});
    } else {
      setBoxSpring({from: {scale: 0.3}, to: {scale: 1.0}});
    }
  }, [boxSpringToggle]);

 

  return (
    <div>

    <animated.div 
      onClick={     () => clickButtonHandler('scale')}
      style={{      transform: boxSpring.scale.interpolate(scale => `scale3d(${scale},${scale},${scale})`)

                    }}>

    <Cuboid 
      size={        cuboidData.cuboids[cuboidIndex].size} 
      imagePath={   cuboidData.cuboids[cuboidIndex].imagePath} 
      isExploded={  isExploded}/></animated.div>

    <button 
      onClick={     () => clickButtonHandler('previous')}
      style={{      height: "100px", 
                    width: "100px", 
                    opacity: 0.5}}>
                    {`PREV <<`}
                    </button>

    <button 
      onClick={     () => clickButtonHandler('next')}
      style={{      height: "100px", width: "100px", opacity: 0.5}}>
                    {`NEXT >>`}
                    </button>

    <button 
      onClick={     () => clickButtonHandler('explode')}
      style={{      height: "100px", width: "100px", opacity: 0.5}}>
                    {`EXPLODE`}
                    </button>
    </div>
  );
}





