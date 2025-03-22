import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  // let counter = 5;
  const addValue = () => {
    if(counter<20){
      setCounter(counter + 1)
    }
  }
  const reduceValue = () => {
    if(counter>0){
      setCounter(counter - 1)
    }
  }
  return (
    <>
      <h1>Manik Mahajan</h1>
      <h2>Counter : {counter}</h2>
      <button onClick = {addValue}>Up Value {counter}</button>
      <button onClick = {reduceValue}>Down Value {counter}</button>
    </>
  )
}

export default App
