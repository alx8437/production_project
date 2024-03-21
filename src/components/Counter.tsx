import {useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((state) => state + 1)
  }

  return (
    <>
      <div>
        {count}
      </div>
      <button onClick={increment}>+</button>
    </>
  );
};

