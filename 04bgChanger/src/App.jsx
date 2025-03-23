import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <>
      <div className="w-full h-screen duration-1000" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button 
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              aria-label="Red Color"
            >Red</button>

            <button 
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              aria-label="Green Color"
            >Green</button>

            <button 
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              aria-label="Blue Color"
            >Blue</button>

            <button 
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "yellow", color: "black"  }}
              aria-label="Yellow Color"
            >Yellow</button>
            <button 
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive"}}
              aria-label="Olive Color"
            >Olive</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
