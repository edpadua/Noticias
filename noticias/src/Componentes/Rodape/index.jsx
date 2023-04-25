import React from 'react'

import styles from './Rodape.module.css';
import { FaNewspaper } from 'react-icons/fa';

function Rodape() {
  return (
    <footer>
    <div className={styles.logo_rodape}>
      <FaNewspaper style={{ fontSize: '60px', color:'#ffffff'}}/>
      <p className={styles.texto_todape}>News</p>
    </div>
   </footer>
  )
}

export default Rodape
