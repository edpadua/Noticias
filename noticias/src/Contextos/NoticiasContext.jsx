import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NoticiasContext = createContext();


export default function NoticiasProvider({ children }) {
    const [dado, setDado] = useState();
    const apiKey = import.meta.env.VITE_API_KEY;
    const category='general';
    
    


    const getTopNoticias = async (url) => {
        const res = await axios.get(url);
        const articles = res.data.articles;
        setDado(articles);
        console.log("results", articles);
    };

    useEffect(() => {
        
        const topRatedNoticias=`https://newsapi.org/v2/top-headlines?country=us&${category}&apiKey=${apiKey}`;
       
        getTopNoticias(topRatedNoticias);
         
      }, []);
    

    return (
        <NoticiasContext.Provider
            value={{ dado }}>
            {children}
        </NoticiasContext.Provider>
    )
}