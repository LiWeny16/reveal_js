import React from "react";
import { GComponents } from 'bizcharts';
const { Canvas, Ellipse, Rect } = GComponents;


function Demo() {
  return (
    <Canvas width={800} height={400} id="test">
      <Ellipse attrs={{
          x: 300,
          y: 200,
          rx: 30,
          ry: 50,
          fill: '#1890FF',
          stroke: '#F04864',
          lineWidth: 4,
          radius: 8,
        }} />
    </Canvas>
  );
}

export default Demo;
