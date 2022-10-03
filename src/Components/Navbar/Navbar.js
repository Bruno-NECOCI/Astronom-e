import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom'

export default function Navbar() {
  const [toogleMenu, setToogleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toogleNav = () => {
    setToogleMenu(!toogleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      {(toogleMenu || largeur > 500) && (
        <ul className="liste">
          <li className="items">
          <Link to ='/'>Accueil</Link>
          </li>
          <li className="items">
          <Link to ='/blog'>Blog</Link>
          </li>
          <li className="items">
          <Link to ='/asteroide'>Infos Astéroïdes</Link>
          </li>
        </ul>
      )}
      <button onClick={toogleNav} className="btn">Menu</button>
    </nav>
  );
}
