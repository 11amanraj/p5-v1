'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), { ssr: false})

const ResponsiveCanvasWrapper = ({
    customDraw,
    customSetup
}) => {
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
        p5.createCanvas(dimensions.width, dimensions.height).parent(canvasParentRef);
        if (customSetup) customSetup(p5, dimensions);
    };
    
    const draw = (p5) => {
        if (customDraw) customDraw(p5, dimensions);
    };

    const windowResized = (p5) => {
        p5.resizeCanvas(dimensions.width, dimensions.height);
    }


  return (
    <div ref={containerRef} className='w-full h-screen'>
        {dimensions.width > 0 && (
        <Sketch setup={setup} draw={draw} windowResized={windowResized} />
      )}
    </div>
  )
}

export default ResponsiveCanvasWrapper