import React, { useContext } from "react";
import { NoticiasContext } from "../../Contextos/NoticiasContext";
import Noticia from "../Noticia";


function ListaNoticias(props) {
    const { dado } = useContext(NoticiasContext);
    console.log("artigos",dado);

    return (
        <div>
            <div className="all__news">
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
