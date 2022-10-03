import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteArticle, getArticleDetails } from '../../redux/actions/articles.action'
import './Delete.css'

export default function Delete ({idArticle}){

const dispatch = useDispatch()

const handleDelete = () => {
    dispatch(deleteArticle(idArticle))
    
}

  return (
    <>
    <button className='btn-supp' onClick={() => handleDelete() }>Supprimer</button>
    </>
  )
}


