import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardArticle  from '../../Components/CardArticle/CardArticle'
import CreateArticle from '../../Components/CreateArticle/CreateArticle'
import './blog.css'
import { getArticles } from '../../redux/actions/articles.action'



export default function Blog() {

  const articles = useSelector(state => state.articleReducer)

  const dispatch = useDispatch()
  
  useEffect(() => {
      dispatch(getArticles())
  },[])

  return (
    <>
      <h1>Mon tableau de bord</h1>
      <CreateArticle />
      <div className='container-cards'>
        {articles.length > 0 && (
        articles
          .sort ((a,b) => b.Date - a.Date) 
          .map(article => {
        return (
          <CardArticle key={article.Id} article={article} />
          )}))}
        
      </div>

    </>
  )
}
