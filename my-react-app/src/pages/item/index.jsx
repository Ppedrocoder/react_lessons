import React from 'react'
import { useParams } from 'react-router-dom'
import * as services from '../../services/APIservice'

const index = () => {
  const { nome } = useParams();
  services.getPokemon(nome)
   .then((data) => {
     console.log(data);
   });

  return (
    <>
      <h1>{nome}</h1>
    </>
  )
}

export default index