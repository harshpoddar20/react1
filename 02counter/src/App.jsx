import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setCounter]=useState(15)

// let  counter =15

const addvalue=()=>{
// counter=counter+1

setCounter(counter+1)
if(counter>=20)
  {
    setCounter(20)
  }
}

const removevalue=()=>{
  
  setCounter(counter-1)
  if(counter<=0)
    {
      setCounter(0)
    }
  
}

  return (
    <>
     <h1>Chaii aur react</h1>
     <h2>Counter value {counter}</h2>

     <button
     onClick={addvalue}
     >add value</button>

     <br />

     <button
     onClick={removevalue}
     >remove value</button>

    </>
  )
}

export default App
