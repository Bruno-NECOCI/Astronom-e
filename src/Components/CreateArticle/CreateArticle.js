import React, {useState} from 'react'
import './CreateArticle.css'
import { useDispatch } from 'react-redux'
import { addArticle, getArticles } from '../../redux/actions/articles.action'


export default function CreateArticle() {

  const [article, setArticle] = useState({
    Titre:"",
    Contenu: ""
  })
  const dispatch = useDispatch()

  const createArticle = async (e) => {
    e.preventDefault();

    await dispatch(addArticle({...article, Date: Date.now()}))
   
    setArticle({
      Titre : "",
      Contenu: ""
    })

    dispatch(getArticles())

  }

  const handleInputs = e => {
     if(e.target.classList.contains('inp-title')){
      const newObjstate = {... article, Titre: e.target.value}
      setArticle(newObjstate)
     }else if(e.target.classList.contains('inp-body')){
      const newOjstate = {... article, Contenu: e.target.value}
      setArticle(newOjstate)
     }
  }

  return (
    <>
    <form onSubmit={createArticle}className='container-form'>

        <label htmlFor="title">Titre</label>
        <input 
        onChange={handleInputs}
        value={article.Titre}
        type="text" 
        id="title" 
        placeholder='Le titre...' 
        className='inp-title'/>
        
        <label htmlFor="article">Votre article</label>
        <textarea 
        onChange={handleInputs}
        value={article.Contenu}
        id="article" 
        placeholder='Le contenu...'
        className='inp-body'></textarea>

        <button>Envoyer l'article</button>
    </form>

    </>
  )
}
