import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import useGetArticles from '../../Hooks/useGetArticles'
import './Article.css'

export default function Article(state) {

  // const [update, setUpdate] = useState(false)
  const [article, setArticle] = useState()  

    const location = useLocation()
    console.log(location);

    const ListArticles = useGetArticles();
    console.log(ListArticles);
  
  useEffect(() =>{
      ListArticles.forEach(art => {
        if(id === art.id){
          setArticle('enculé');
          console.log(article);
        }
      })
    }, [])


    // const updateArticle = () => {
    //   setUpdate(true)
    // }

    // const handleInputs = e => {
      // if(e.target.classList.contains('inp-title')){
      //  const newOjstate = {... article, title: e.target.value}
      //  setArticle(newOjstate)
      // }else if(e.target.classList.contains('inp-body')){
      //  const newOjstate = {... article, body: e.target.value}
      //  setArticle(newOjstate)
      // }
  //  }

    // const newArticle = (id) => {
    //   console.log(id);
    // }

    return (
      <> 
       
          <div className="article-content">
            <h2>{location.state.title}</h2>
            <p>{location.state.contenu}</p>
            
            <div className='btn-content'>
              <button className='btn-supp'>Supprimer</button>
              <button className='btn-update'>Modifier</button>
            </div>
          </div>
        
        {/* <form onSubmit={() => newArticle(location.state.id)} className='formUpdate'>
          <h1>Modifier mon article</h1>
          <label htmlFor="updateTitre">Titre</label>
          <input 
          type="text"
          name="updateTitre"
          defaultValue={location.state.title} 
          onChange={handleInputs}/>
          <label htmlFor="updateContenu">Contenu</label>
          <textarea 
          name="updateContenu" 
          cols="30" rows="10"
          defaultValue={location.state.contenu}></textarea>
          <button type="submit">Valider</button>
        </form> */}

        
      </>
      
    )
}
