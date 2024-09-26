import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15);
  // let counter =1;
  const addValue=()=>{
    counter=counter+1;
    setCounter(counter);
  }
  const subValue=()=>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>Chai Aur React {counter}</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={subValue}>Sub value {counter}</button>
    </>
  )
}

export default App
