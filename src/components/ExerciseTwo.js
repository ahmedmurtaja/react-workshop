import { useState } from "react";

function ExerciseTwo() {
  const [color, setColor] = useState("#f44336");

  const colors = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#4caf50",
  ];

  const handleColorChange = (newColor) => setColor(newColor);

  const colorButtons = colors.map((color) => (
    <span
      key={color}
      className="color"
      style={{ backgroundColor: color }}
      onClick={() => handleColorChange(color)}
    ></span>
  ));

  return (
    <div className="palette-color">
      <div className="palette" style={{ backgroundColor: color }}></div>
      <div className="colors">{colorButtons}</div>
    </div>
  );
}

export default ExerciseTwo;
