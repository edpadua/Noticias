import React, { useContext } from "react";
import { NoticiasContext } from "../../Contextos/NoticiasContext";
import Noticia from "../Noticia";
import styles from './ListaNoticias.module.css';


function ListaNoticias(props) {

    

    const { dado } = useContext(NoticiasContext);
    console.log("artigos", dado);


    
    

    return (
        <div className={styles.container}>
            
            <div className={styles.noticias}>
                {dado
                    ? dado.map((news) => (
                        <Noticia dado={news} key={news.url} />
                    ))
                    : "Loading"}
            </div>
        </div>
    )
}

export default ListaNoticias
