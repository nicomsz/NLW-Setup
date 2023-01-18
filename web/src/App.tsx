import { useState } from 'react'
import Habit from './components/habit'
import './styles/global.css'



function App() {
  

  return (
    <div >
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      <Habit completed={3} />
      
    </div>
  )
}

export default App
