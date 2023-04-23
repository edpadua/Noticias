import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NoticiasContext = createContext();


export default function NoticiasProvider(props) {
    const [dado, setDado] = useState();
    const apiKey = import.meta.env.VITE_API_KEY;
    const category = 'business'
    
    {/** `https://newsapi.org/v2/top-headlines?country=br&category=${category}&&apiKey=${apiKey}`**/}


    const getTopNoticias = async (url) => {
        const res = await axios.get(url);
        const data = res.data;
        setDado(res.data);
        console.log("results", res.data);
    };

    useEffect(() => {
        
        const topRatedNoticias=`https://newsapi.org/v2/top-headlines?country=br&${category}=business&apiKey=${apiKey}`;
        
        getTopNoticias(topRatedNoticias);
         
      }, []);
    

    return (
        <NoticiasContext.Provider
            value={{ dado }}>
            {props.children}
        </NoticiasContext.Provider>
    )
}