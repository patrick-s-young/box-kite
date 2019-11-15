import React, { useState } from 'react';
import { cuboidData } from './MainContainerData.jsx';
import Cuboid from '../components/Cuboid.jsx';

export default () => {

  const [ cuboidIndex, setCuboidIndex ] = useState(0);
  const [ isExploded, setIsExploded ] = useState(false);

  const clickButtonHandler = (action) => {
    switch(action) {
      case 'next':
        setCuboidIndex(cuboidIndex < cuboidData.cuboids.length - 1 ? cuboidIndex + 1 : 0);
        break;
      case 'previous':
        setCuboidIndex(cuboidIndex > 0 ? cuboidIndex - 1 : cuboidData.cuboids.length - 1);
        break;
      case 'explode':
        setIsExploded(!isExploded);
        break;
      default:
        console.log(`clickButtonHandler called with unrecognized action: '${action}'`);
    }
  }


 

  return (
    <div>

    <Cuboid 
      size={        cuboidData.cuboids[cuboidIndex].size} 
      imagePath={   cuboidData.cuboids[cuboidIndex].imagePath} 
      isExploded={  isExploded}/>

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





