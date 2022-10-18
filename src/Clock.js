import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  const timerId = useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);

    return function cleanUp(){
      clearInterval(timerId)
    };
    
  }, []);
  

  return <div>{time.toString()}</div>;
}

export default Clock;
