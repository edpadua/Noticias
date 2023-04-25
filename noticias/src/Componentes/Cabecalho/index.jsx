import React from 'react'
import styles from './Cabecalho.module.css';
import { FaNewspaper } from 'react-icons/fa';

function Cabecalho() {

    

    


    return (
        <header className={styles.cabecalho}>

            <nav className={styles.navbar}>
                <div className={styles.navbar_container}>
                    <FaNewspaper style={{ fontSize: '30px' }} />
                </div>

            </nav>
        </header>
    )
}

export default Cabecalho
