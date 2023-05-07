import { useState } from "react";

const ExerciseOne = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <span>{counter}</span>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>
        +
      </button>
      <button onClick={() => setCounter((prevCounter) => (prevCounter = 0))}>
        Reset
      </button>
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>
        -
      </button>
    </div>
  );
};

export default ExerciseOne;
