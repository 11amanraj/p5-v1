'use client'

import React from 'react'
import ResponsiveCanvasWrapper from '../Wrapper/ResponsiveCanvasWrapper'

const First = () => {
    const dotSize = 5;
    const spacing = dotSize * 2;
    const minTValue = 40;
    let dots = [];

    const setup = (p5, canvasParentRef, width, height) => {
        p5.createCanvas(width, height).parent(canvasParentRef)
        for (let i=0; i < width; i += spacing) {
            for (let j=0; j < height; j += spacing) {
                let dot = new Dot(i + spacing/2, j + spacing/2, dotSize);
                dots.push(dot);
            }
        }
        // return p5.createCanvas(width, height).parent(canvasParentRef)
    }

    const draw = (p5) => {
        p5.background(150);
        dots.forEach(dot => {
            dot.update(p5)
            dot.render(p5)
        })
    }

    class Dot {
        constructor(x, y, size) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.transparency = minTValue;
        }

        update(p5) {
            let distance = p5.dist(p5.mouseX, p5.mouseY, this.x, this.y)
            if (distance < 50) {
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
    <section>
        <ResponsiveCanvasWrapper customSetup={setup} customDraw={draw}/>
        <div>
            Is it Working?
        </div>
    </section>
  )
}

export default First