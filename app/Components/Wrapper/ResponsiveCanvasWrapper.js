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
        customSetup(p5, canvasParentRef, dimensions.width, dimensions.height)
    };
    
    const draw = (p5) => {
        customDraw(p5)
    };

    const windowResized = (p5) => {
        p5.resizeCanvas(dimensions.width, dimensions.height);
    }

  return (
    <div ref={containerRef} className='w-full h-screen realtive'>
        <div className='absolute inset-0 z-0'>
            {dimensions.width > 0 && (
            <Sketch setup={setup} draw={draw} windowResized={windowResized} />
            )}
        </div>
    </div>
  )
}

export default ResponsiveCanvasWrapper