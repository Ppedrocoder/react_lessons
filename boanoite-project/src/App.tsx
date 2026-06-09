import { useEffect, useState } from "react";
import "./App.css";
import Botao from "./components/Botao/botao";

function App() {
  const [numero, setNumero] = useState(0)
  const [clicado, setClicado] = useState(false)
  const acrescimo = () => {
    setNumero(numero+1);
  }
  const decrescimo = () => {
    setNumero(numero-1);
  }
  const foiClicado = () => {
    if(clicado == false){
      setClicado(true)
    }
    else{
      setClicado(false)
    }
  }
  useEffect(() => {console.log("Número alterado para:", numero)}, [numero]);
  return (
    <>
    <div className="grid grid-cols-1 w-full h-full">
      <h1 className="text-3xl font-bold mx-auto">
        <span className="palavras">Hello</span> {numero<0 ? <span className="numerosred">{numero}!</span> : <span className="numerosgreen">{numero}!</span>}
      </h1>
      <div className="flex gap-4 mx-auto">
          <Botao
          label="Clique não boy" 
          action={decrescimo}
          className="br-button secondary"
          />
          <Botao
          label="Surpresa"
          action={foiClicado}
          className="br-button"
          />
          <Botao
          label="Clique boy" 
          action={acrescimo}
          className="br-button primary"
          />
      </div>
      {
        clicado ? <div className="mx-auto flex flex-col"><p className="mx-auto p-4">Oi, boa noite!</p><img src="https://www.estadao.com.br/resizer/v2/BASVUB3TGJFFNES7OGH4WRCAXA.jpg?quality=80&auth=380341fa8d002d160058db11e42a26d7ca3023f68b0af144b617d8736701aaad&width=380" alt="Surpresa" /></div> : ''
      }
    </div>
    </>
  );
}

export default App;
