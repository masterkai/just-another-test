import React, {useEffect, useRef, useState} from "react";

export default function Button() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef()


  const onClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      buttonRef.current.textContent = count
    }, 1000)
    return () => clearTimeout(timeOut)
  }, [count])

  return <button ref={buttonRef} onClick={onClick}>0</button>;
}
