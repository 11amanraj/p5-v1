'use client'

import React from 'react'
import Sketch from 'react-p5'

const Drawing = () => {
    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 500).parent(canvasParentRef)
    }

    const draw = (p5) => {
        p5.background(220, 0, 200);
        p5.ellipse(50, 50, 70, 70);
        p5.ellipse(150, 50, 70, 70);
    }

  return (
    <div className='w-150 h-150 bg-red-700'>
        <Sketch setup={setup} draw={draw}/>
    </div>
  )
}

export default Drawing