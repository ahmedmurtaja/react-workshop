import { useState } from "react";

function ExerciseOne() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => setCounter(prevCounter => prevCounter + 1);
  const handleReset = () => setCounter(0);
  const handleDecrement = () => setCounter(prevCounter => prevCounter - 1);

  return (
    <div className="counter">
      <span>{counter}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default ExerciseOne;
