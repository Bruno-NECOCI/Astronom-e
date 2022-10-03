import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {

    const navigate = useNavigate()

  return (
    <div className='notFound'>
        <h1>Cette page n'existe pas</h1>
        <button onClick={() => navigate("/")}>Retoruner à l'accueil</button>
    </div>
  )
}
