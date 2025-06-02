'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), { ssr: false})

const SecondBg = () => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({width: 0, height: 0});

    useEffect(() => {
        const resize = () => {
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current;
                setDimensions({ width: clientWidth, height: clientHeight });
            }
            };
        
        resize(); // Initial size
        window.addEventListener('resize', resize);
        return () => window.removeEventListener('resize', resize);
    }, [])

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(dimensions.width, dimensions.height).parent(canvasParentRef)
        // p5.createCanvas(500, 500).parent(canvasParentRef)
    }

    const windowResized = (p5) => {
        p5.resizeCanvas(dimensions.width, dimensions.height);
        console.log(p5.width, p5.height)
    }

    const draw = (p5) => {
        p5.background(220, 0, 200);
        p5.ellipse(50, 50, 70, 70);
        p5.ellipse(150, 50, 70, 70);
    }


  return (
    <div ref={containerRef} className="bg-green-300 w-full h-screen">
        <Sketch 
            setup={setup} 
            draw={draw} 
            windowResized={windowResized}
        />
    </div>
  )
}

export default SecondBg