'use client'

import React from 'react'
import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), { ssr: false})

const SecondBg = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef)
    }

    const draw = (p5) => {
        p5.background(220, 0, 200);
        p5.ellipse(50, 50, 70, 70);
        p5.ellipse(150, 50, 70, 70);
    }

  return (
    <div className="bg-green-300 w-full h-screen">
        <Sketch setup={setup} draw={draw}/>
    </div>
  )
}

export default SecondBg