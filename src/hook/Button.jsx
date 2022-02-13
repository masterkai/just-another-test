import React, {useState} from "react";

export default function Button() {
  const [count, setCount] = useState(0);


  const onClick = () => {
    setTimeout(() => setCount(prevCount => prevCount + 1), 1000)
  };


  return <button onClick={onClick}>{count}</button>;
}
