import React from 'react'
import styles from './Noticia.module.css';

function Noticia({ dado }) {
    return (
        <div>
            <div className="news">
                <h1 className="news__title">{dado.title}</h1>
                <p className="news__desc">{dado.description}</p>
                <span className="news__author">{dado.author}</span> <br />
                <span className="news__published">{dado.publishedAt}</span>
                <span className="news__source">{dado.source.name}</span>
            </div>
        </div>
    )
}

export default Noticia
