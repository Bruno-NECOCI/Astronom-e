import './App.css';
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Containers-pages/Home/Home.js'
import Navbar from './Components/Navbar/Navbar'
import NotFound from './Containers-pages/NotFound/NotFound'; 
import Blog from './Containers-pages/blog/blog';
import Article from './Containers-pages/Article/Article'
import Asteroide from './Containers-pages/Data/data';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/article/:id"  element={<Article />}/>
      <Route path="/asteroide" element={<Asteroide/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>

    </>
  );
}

export default App;
