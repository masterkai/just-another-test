import React, {useState} from "react";
// import Input from "./input";

export default function List() {
  const [items, setItems] = useState([]);

  const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  const onAddClick = () => {
    setItems(prev => [...prev, {index: uid()}]);
  };
  const onRemoveClick = (index) => {
    const newItems = items.filter(item => item.index !== index)
    setItems(newItems);
  };

  return (
    <>
      <button id="add" onClick={onAddClick}>
        +
      </button>
      <ul>
        {items.length > 0 && items.map((item) => (
          <li key={item.index}>
            {/*<Input/>*/}
            <input type='text' />
            <button onClick={() => onRemoveClick(item.index)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
}
