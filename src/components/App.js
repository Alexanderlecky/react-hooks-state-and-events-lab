import React, { useState } from 'react';
import ShoppingList from './ShoppingList';
import '../index.css';

const items = [
  { id: 1, name: "Apples", category: "Produce" },
  { id: 2, name: "Milk", category: "Dairy" },
  { id: 3, name: "Cookies", category: "Dessert" }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeToggle}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
