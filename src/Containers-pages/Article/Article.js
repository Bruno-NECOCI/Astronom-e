import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import convertTimestamp from '../../Helpers/formatDate'
import './Article.css'
import Delete from '../../Components/Delete/Delete'
import { useDispatch, useSelector } from 'react-redux'
import { editArticle, getArticleDetails } from '../../redux/actions/articles.action'


export default function Article() {
  
  const article = useSelector(state => state.articleReducer)
  const [edit, setEdit] = useState(false)
  const [newArticle, setNewArticle] = useState()
  const dispatch = useDispatch()

  console.log(article);
  
  //récupération de l'id de l'url
  const idArticle = useParams()

    const handleInputs = e => {
      if(e.target.name === 'updateTitre'){
        if(newArticle === undefined) {
          const newObjstate = {...article, Titre: e.target.value, Date: Date.now()}
          setNewArticle(newObjstate)
        }else if(newArticle !== undefined){
          const newObjstate = {...newArticle, Titre: e.target.value, Date: Date.now()}
          setNewArticle(newObjstate)
        }
      }else if(e.target.name === 'updateContenu'){
        if(newArticle === undefined) {
          const newObjstate = {...article, Contenu: e.target.value, Date: Date.now()}
          setNewArticle(newObjstate)
        }else if(newArticle !== undefined){
          const newObjstate = {...newArticle, Contenu: e.target.value, Date: Date.now()}
          setNewArticle(newObjstate)
        }
      }
   }

    const updateArticle = () => {
        dispatch(
          editArticle({
          id: idArticle.id,
          Titre : newArticle.Titre,
          Contenu : newArticle.Contenu,
          Date: Date.now()
        }))
      setEdit(false)
    }

    useEffect(() => {
      dispatch(getArticleDetails(idArticle.id))
    }, [])


    return (
      
      <> 
      
       {article && !edit
        ?(  <div className="article-content">
            <h2>{article.Titre}</h2>
            <p>{article.Contenu}</p>
            <p>{convertTimestamp(article.Date)}</p>
            
            <div className='btn-content'>
              <Delete idArticle={idArticle.id}/>
              <button className='btn-update' onClick={() => setEdit(true)}>Modifier</button>
            </div>
          </div>
          
       ): edit ? (

        <div className='formUpdate'>
          
          <h1>Modifier mon article</h1>
          <input 
          type="text"
          name="updateTitre"
          autoFocus
          defaultValue={article.Titre} 
          onChange={handleInputs}/>
          <textarea 
          name="updateContenu" 
          cols="30" rows="10"
          defaultValue={article.Contenu}
          onChange={handleInputs}></textarea>
          
          <div className="btn-container">
          <button className='btnBack' onClick={() => setEdit(false)}>Retour</button>
          <button className='btnValid' onClick={() => updateArticle()}>Valider</button>
          </div>

        </div>

       ):
      <div className="article-content">
        <h2>Il n'y a pas d'article correspondant à cet Id</h2>
        
        <div className='btn-content'>
          <Link to='/blog'>retour</Link>
        </div>

      </div>}
        
      </>
      
    )
}
