import React, { useState } from 'react';
import './list.css'

const Contact = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue !== '') {
      const newTodo = {
        id: todos.length + 1,
        index: todos.length + 1,
        item: inputValue,
        createdAt: new Date().toLocaleString()
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleAddTodoTop = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: todos.length + 1,
        index: todos.length + 1,
        item: inputValue,
        createdAt: new Date().toLocaleString()
      };
      setTodos([newTodo, ...todos]);
      setInputValue('');
    }
  };

  const handleSortByTime = () => {
    const sortedTodos = [...todos].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setTodos(sortedTodos);
  };

  const handleSortAscending = () => {
    const sortedTodos = [...todos].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    setTodos(sortedTodos);
  };

  return (
    <div className="todo-container">
      <h1>List and Keys</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add todo"
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-button">Add Bottom</button>
        <button onClick={handleAddTodoTop} className="add-button">Add Top</button>
        <button onClick={handleSortByTime} className="add-button">Sort by Time</button>
        <button onClick={handleSortAscending} className="add-button">Sort Ascending</button>
      </div>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{`${todo.index}. ${todo.item} - Created at: ${todo.createdAt}`}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Contact;
