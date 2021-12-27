import React, {useEffect, useMemo, useState} from "react";

export default () => {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number])
  const themeStyle = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark])
  
  useEffect(() => {
    console.log('themes changed');
  }, [themeStyle])
  return (
    <>
      <input type='number' value={number} onChange={e => setNumber(parseInt(e.target.value))}/>
      <button onClick={() => setDark(prev => !prev)}>CHANGE THEME</button>
      <div style={themeStyle}>{doubleNumber}</div>
    </>
  );
};

function slowFunction(number) {
  console.log('calling slow function');
  for (let i = 0; i < 1000000000; i++) {
  }
  return number * 2
}
