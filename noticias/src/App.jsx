import React, { createContext, useEffect, useState } from "react";

import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import ListaNoticias from './Componentes/ListaNoticias'
import NoticiasProvider from './Contextos/NoticiasContext'
import Rodape from "./Componentes/Rodape";

function App() {
  const [count, setCount] = useState(0)

  
  const [load, setLoad] = useState(true);

  

  
  

  

  return (
    <>
      <Cabecalho />
      <div className="conteudo_pagina">
        <NoticiasProvider >
         <ListaNoticias />
        </NoticiasProvider>
        <Rodape />
      </div>
    </>
  )
}

export default App
