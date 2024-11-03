import React, { useState } from "react";

const CounterButton = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1); // Using functional update
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1); // Using functional update
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-800 p-5 rounded-md shadow-md">
      <h1 className="text-2xl text-white mb-4">Counter</h1>
      <div className="flex items-center">
        <button
          onClick={increment}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200"
        >
          +
        </button>
        <p className="mx-4 text-3xl text-white">{count}</p>
        <button
          onClick={decrement}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CounterButton;
