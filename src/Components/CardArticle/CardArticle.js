import React from 'react'
import './CardArticle.css'
import {Link} from 'react-router-dom'
import convertTimestamp from '../../Helpers/formatDate'

export default function CardArticle({article}) {
  
  return (
    <div className='cardArticle'>
        <h2>{article.Titre}</h2>
        <p>{article.Contenu}</p>
        <p>Publié le {convertTimestamp(article.Date)}</p>
        <Link to={`/article/${article.Id}`}>Lire L'article</Link>
    </div>
  )
}
