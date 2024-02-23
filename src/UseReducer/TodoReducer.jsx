import React, { useReducer, useState } from 'react';
import { CiSquareRemove } from "react-icons/ci";
import './User.css'

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    case 'REMOVE_ITEM':
      return state.filter((item, index) => index !== action.payload);
    default:
      return state;
  }
};


function ItemList() {

  const [items, dispatch] = useReducer(listReducer, []);

  
  const [newItem, setNewItem] = useState('');

  const addItem = () =>{
    if (newItem.trim() !== '') {
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setNewItem('');
    }
  };

  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  return (
    <div className='ReducerName' style={{backgroundColor:"#bdc3c7"}}>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}           

            <button onClick={() => removeItem(index)}>
              Remove <CiSquareRemove style={{ fontSize: '30px', color:"red"}} />
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter new item"
        />
        <button onClick={addItem}>Add Item</button>
      </div>
    </div>
  );
}

export default ItemList;
