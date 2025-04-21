import React, { useState } from "react";
import "./App.css";
let nextId = 0;

function App() {
  const [name, setName] = useState("");
  const [items, setItems] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
      />
      <button
        onClick={() => {
          setItems([...items, { id: nextId++, name: name }]);
        }}
      >
        Add
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
