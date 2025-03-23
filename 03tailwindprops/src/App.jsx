import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  let myObj = {
    name: "Manik",
    age: 20
  }
  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-2xl mb-4'>Tailwind Test</h1>
      <Card username="Manik" detail="Drinking Tea" imgAddress="https://media.istockphoto.com/id/1326419180/photo/beautiful-woman-relaxing-and-drinking-hot-tea.jpg?s=612x612&w=0&k=20&c=qrSWG73ojw7pUftLvkQxL6maCWhfQVjuAba96d0vbEU="/>
      <Card/>
    </>
  )
}

export default App
