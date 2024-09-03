import { useState, useCallback } from "react";
import "../App.css";

const Throttling= () => {
  const [clickCount, setClickCount] = useState(0);

  const throttle = (func, delay) => {
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        func(...args);
        lastTime = now;
      }
    };
  };

  const handleClick = useCallback( 
    throttle(() => {
   setClickCount((prevCount) => prevCount + 1);
    }, 2000),
    []
  );

  return (
    <div style={{textAlign: "center" , marginTop:"20px"}}>
      <button onClick={handleClick}>Click me</button>
      <p>Button clicked {clickCount} times.</p>
    </div>
  );
};

export default Throttling;


