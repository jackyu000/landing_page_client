// Assuming you're importing Home in another file, e.g., App.js
import React from 'react';
import Home from './Components/Home'; // Make sure the path is correct
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

