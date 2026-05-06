import React from 'react'
import Button from '@mui/material/Button'

const App = () => {
  const react = React
  const name = 'React'
  var contador = 0
  return (
    <div class="has-text-centered">
      <h1 class="text-2xl font-bold">Hello, {name}!</h1>
      <p>Contador: {contador}</p>
      <Button variant="contained" onClick={() => contador++}>
        Incrementar
      </Button>
    </div>
  )
}

export default App