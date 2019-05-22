import React, { useState } from "react";

export const DoubleCounter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(5);

  return (
    <button
      onClick={() => {
        setCount(count => count + 1);
        setCount2(count2 => count2 + 5);
      }}
    >
      {count} {count2}
    </button>
  );
};
