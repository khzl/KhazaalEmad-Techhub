import './App.css'
import { useState,useEffect} from 'react';
import TechHub from './Tech-Hub';

function App() {

 const [color, setColor] = useState('red');

  // Optional: apply background color directly to body
   useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const handleClick = () => {
    setColor(prev => (prev === 'red' ? 'blue' : 'red'));
  };

  console.log(color);
  
  return (
    <>
      <h1>Tech Hub</h1>
      <p>Welcome To Tech Hub</p>
      <button onClick={handleClick}>Change Background Color</button>
    </>
  );
}

export default App
