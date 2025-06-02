'use client'

import ResponsiveCanvasWrapper from "./Wrapper/ResponsiveCanvasWrapper";

const SecondBg = () => {
    const setup = (p5, canvasParentRef, width, height) => {
        return p5.createCanvas(width, height).parent(canvasParentRef)
    }

    const draw = (p5) => {
        p5.background(220, 0, 200);
        p5.ellipse(50, 50, 70, 70);
        p5.ellipse(150, 50, 70, 70);
    }

    return (
        <ResponsiveCanvasWrapper 
            customSetup={setup}
            customDraw={draw}
        />
    )
}

export default SecondBg;