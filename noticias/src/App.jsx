import { useState } from 'react'

import './App.css'
import Cabecalho from './Componentes/Cabecalho'
import ListaNoticias from './Componentes/ListaNoticias'
import NoticiasProvider from './Contextos/NoticiasContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NoticiasProvider>
      <Cabecalho/>
      <ListaNoticias/>
      </NoticiasProvider>
    </>
  )
}

export default App
