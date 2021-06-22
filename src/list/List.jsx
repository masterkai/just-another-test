import React, {useState} from "react";
// import Input from "./input";

export default function List() {
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);

  const onAddClick = () => {
    setIndex(index + 1)
    setItems(prev => [...prev, {index: index}]);
  };
  const onRemoveClick = (index) => {
    console.log(index);
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
