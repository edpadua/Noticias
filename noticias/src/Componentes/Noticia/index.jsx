import React from 'react'
import styles from './Noticia.module.css';

function Noticia({ dado }) {
    if (dado.urlToImage != null)
        return (

            <>
                <div className={styles.noticia}>



                    <img className="noticia-imagem" src={dado.urlToImage} alt={dado.title} />
                    <div className={styles.noticia_titulo}>
                        <a className={styles.noticia_link} href={dado.url}><h2 >{dado.title}</h2></a>
                    </div>

                    <p className="noticia-descricao">{dado.description}</p>

                </div>
            </>

        )
}

export default Noticia
