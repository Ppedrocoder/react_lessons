import { useState } from 'react'
import './App.css'

function App() {
  const [numero, setNumero] = useState<number>(0)
  
  function acrescimo(){
    setNumero(numero+1) 
  }
  function decrescimo(){
    setNumero(numero - 1)
  }
  return (
    <>
      <h1>Hello {numero}</h1>
      <div>
          <button onClick={acrescimo}>Clique boy</button>
          <button onClick={decrescimo}>Clique não boy</button>
      </div>
    </>
  )
}

export default App
