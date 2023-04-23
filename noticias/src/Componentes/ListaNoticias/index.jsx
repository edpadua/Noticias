import React, { useContext } from "react";
import { NoticiasContext } from "../../Contextos/NoticiasContext";
import Noticia from "../Noticia";


function ListaNoticias(props) {
    const { data } = useContext(NoticiasContext);
    console.log(data);

    return (
        <div>
            <div className="all__news">
                {data
                    ? data.articles.map((news) => (
                        <Noticia data={news} key={news.url} />
                    ))
                    : "Loading"}
            </div>
        </div>
    )
}

export default ListaNoticias
