import './App.css';
import { useState } from "react";

function App() {
  const[backgroundColor, setBackgroundColor ]= useState('white');
  
  const handleToggle = () => {
    const newColor = backgroundColor === 'white' ? 'blue' : 'white';
    setBackgroundColor(newColor);
  }
    
  return (
       <div style={{ backgroundColor, minHeight: '100vh' }}>
          <button onClick={handleToggle}>Toggle Background Color</button>
       </div>
  );
}

export default App;
