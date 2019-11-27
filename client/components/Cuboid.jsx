import React, { useEffect, useState } from 'react';

export default ({size, imagePath, isExploded}) => {
        const [explodedMultiple, setExplodedMultipe] = useState(1.0);

        useEffect(() => {
                setExplodedMultipe(isExploded ? 1.2: 1.0);
        }, [isExploded]);

    return (
        <div    id=        'cuboid_container' 
                style={{    width: size.width + 'px', 
                            height: size.height + 'px', 
                            left: (window.innerWidth / 2) - (size.width / 2),
                            top: '20vh'}}>

        <div    id=         'cuboid_anchor' 
                className=  'animated'>
          
        <img    src={       imagePath.front} 
                style={{    position: 'absolute'}}></img>
  
        <img    src={       imagePath.back} 
                style={{    position: 'absolute', 
                            transform: `translateZ(${-size.depth}px) rotateY(180deg)`}}></img>
  
        <img    src={       imagePath.top} 
                style={{    position: 'absolute', 
                            transformOrigin: 'bottom left',
                            transform: `translate(0px, ${-size.depth * explodedMultiple}px) rotateX(90deg)`}}></img>
  
        <img    src={       imagePath.bottom} 
                style={{    position: 'absolute', 
                            transformOrigin: 'top left',
                            transform: `translate(0px, ${size.height * explodedMultiple}px) rotateX(-90deg)`}}></img>
  
        <img    src={       imagePath.left} 
                style={{    position: 'absolute', 
                            transformOrigin: 'top left',
                            transform: `translate(${size.width * explodedMultiple}px, 0px) rotateY(90deg)`}}></img>
  
        <img    src={       imagePath.right} 
                style={{    position: 'absolute', 
                            transformOrigin: 'top right',
                            transform: `translate(${-size.depth * explodedMultiple}px, 0px) rotateY(-90deg)`}}></img>
  
        </div> 
        </div> 
    )
  }