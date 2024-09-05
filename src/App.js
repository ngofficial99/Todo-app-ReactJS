import React, { useState } from "react";
import "./App.css"; 

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);


  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo.trim()]);
      setTodo(""); 
    }
  };


  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };


  const handleClearTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <h2>By Nishant Gupta</h2>
      <div className="input-container">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index} className="todo-item">
            {item}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {todos.length > 0 && (
        <button className="clear-button" onClick={handleClearTodos}>
          Clear All
        </button>
      )}
    </div>
  );
}

export default App;
