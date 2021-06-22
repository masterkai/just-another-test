import React, {useState} from 'react'

function Input() {
  const [val, setVal] = useState('');
  function handleChange(e){
    setVal(e.target.value)
  }
  return <input type='text' value={val} onChange={handleChange}/>
}

export default Input