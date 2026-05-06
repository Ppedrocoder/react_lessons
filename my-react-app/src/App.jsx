import React from 'react'
import Button from '@mui/material/Button'

const App = () => {
  const react = React
  const name = 'React'
  var contador = 0
  function increment() {
    contador++
  }
  return (
    <div class="w-full h-full">
      <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h1 class="text-2xl font-bold">Hello, {name}!</h1>
      </div>
      <div class="mt-4 text-center">
        <p>Contador: {contador}</p>
      <div class="mt-4 text-center">
          </div>
            <Button variant="contained" onClick={increment()}>
                Incrementar
            </Button>
          </div>
      </div>
      
  )
}

export default App