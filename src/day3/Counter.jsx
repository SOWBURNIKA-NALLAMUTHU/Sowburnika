import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count : {count}</p>
      <button className="red" onClick={() => setCount(count + 1)}>
        INCREMENT
      </button>
      &nbsp;
      <button className="red" onClick={() => setCount(0)}>
        RESET
      </button>
    </div>
  );
};
export default Counter;
