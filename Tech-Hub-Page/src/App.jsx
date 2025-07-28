import { useState } from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Food from './Components/Food'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Khazaal</h1>
        <h1>Khazaal</h1>
        <Header/>
        <Food>Orange</Food>
      </div>
    </>
  )
}

export default App
