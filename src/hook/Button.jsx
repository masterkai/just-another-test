import React, {useEffect, useRef, useState} from "react";
import _ from "lodash"

export default function Button() {
  const [count, setCount] = useState(0);
  const buttonRef = useRef()


  const onClick = () => {
    setTimeout(() =>
      setCount(count + 1)
      // _.debounce(() => setCount(count + 1), 1000)
    , 1000)
  };


  return <button ref={buttonRef} onClick={onClick}>{count}</button>;
}
