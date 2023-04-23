import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import ListaNoticias from './Componentes/ListaNoticias'
import NoticiasProvider from './Contextos/NoticiasContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Cabecalho />
      <NoticiasProvider>
       
        <ListaNoticias />
      </NoticiasProvider>
    </>
  )
}

export default App
