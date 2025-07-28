import Header from "./Components/Header.jsx"
import Footer from "./Components/Footer.jsx";
import Food from "./Components/Food.jsx";
import Card from "./ComponentCard/Card.jsx";
import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <Header/>
    <Food/>
    <Card/>
    <Footer/>
    </>
  ); 
}

export default App
