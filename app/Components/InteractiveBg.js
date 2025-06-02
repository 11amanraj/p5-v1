'use client'

import dynamic from 'next/dynamic'
import React, { useEffect, useState, useRef } from 'react'

const Sketch = dynamic(() => import('react-p5'), { ssr: false})
// import Sketch from 'react-p5'

const InteractiveBg = () => {
    const dotSize = 5;
    const spacing = dotSize * 2;
    const minTValue = 40;
    let dots = [];

    const [isMouseMoved, setIsMouseMoved] = useState(true);
    const timeoutRef = useRef(null);

    // useEffect(() => {
    //     const handleMouseMove = () => {
    //         setIsMouseMoved(true)
    //         setTimeout(() => {
    //             setIsMouseMoved(false)
    //         }, 1000000)
    //     }

    //     window.addEventListener('mousemove', handleMouseMove)

    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove)
    //     }
    // })

    
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef)
        for (let i=0; i < 500; i += spacing) {
            for (let j=0; j < 500; j += spacing) {
                let dot = new Dot(i + spacing/2, j + spacing/2, dotSize);
                dots.push(dot);
            }
        }
    }
    
    const draw = (p5) => {
        p5.background(220, 0, 200);
        dots.forEach(dot => {
            dot.update(p5)
            dot.render(p5)
        })
    }
    
    // useEffect(() => {
    //     const handleMouseMove = () => {
    //         setIsMouseMoved(true);
      
    //         // Clear previous timeout
    //         if (timeoutRef.current) {
    //             // timeoutRef.current = 0
    //             clearTimeout(timeoutRef.current);
    //         }
                
      
    //         // Set new timeout to reset after 100ms
    //         timeoutRef.current = setTimeout(() => {
    //           setIsMouseMoved(false);
    //         }, 100);

    //         console.log(timeoutRef.current)
    //       };
      
    //       window.addEventListener('mousemove', handleMouseMove);
      
    //       return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //         if (timeoutRef.current) clearTimeout(timeoutRef.current);
    //       };
    // },[])

    // let isMouseMoved = false;

    // function mouseMoved() {
    //     isMouseMoved = true;
    //     setTimeout(() => {
    //         isMouseMoved = false;
    //     }, 100)
    //     console.log(isMouseMoved);
    // }

    class Dot {
        constructor(x, y, size) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.transparency = minTValue;
        }

        update(p5) {
            let distance = p5.dist(p5.mouseX, p5.mouseY, this.x, this.y)
            if (isMouseMoved && (distance < 50)) {
                this.transparency = 255
            } else {
                this.transparency = p5.max(minTValue, this.transparency - 10)
            }
        }

        render(p5) {
            p5.fill(0, this.transparency);
            p5.ellipse(this.x, this.y, this.size)
        }
    }

  return (
    <div className='w-full h-screen bg-red-700'>
        {/* <div className='w-150 h-150 bg-red-700'> */}
        <Sketch setup={setup} draw={draw}/>
    </div>
  )
}

export default InteractiveBg