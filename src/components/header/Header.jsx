import React, { useState } from 'react'
import './Header.scss'

const Header = () => {
    const [Toggle, ShowMenu] = useState(false);
    
  return (
    <header className="header">
        <nav className="nav container">
        <a href="index.html" className="nav_logo">Sailik</a>



         <div className={ Toggle ? "nav__menu show-menu" : "nav__menu" }>
            <ul className="nav__list ">
                <li className="nav__item">
                <a href="#home" className="nav__link active-link">
                    <i className="uil uil-estate nav_icon"></i>Home
                </a>
                </li>

                <li className="nav__item">
                <a href="#about" className="nav__link">
                    <i className="uil uil-user nav_icon"></i>About
                </a>
                </li>

                <li className="nav__item">
                <a href="#skills" className="nav__link">
                    <i className="uil uil-file-alt nav_icon"></i>Skills
                </a>
                </li>


                <li className="nav__item">
                <a href="#service" className="nav__link">
                    <i className="uil uil-briefcase-alt nav_icon"></i>Service
                </a>
                </li>

                <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                    <i className="uil uil-mountains-sun nav_icon"></i>Portfolio
                </a>
                </li>


                <li className="nav__item">
                <a href="#contact" className="nav__link ">
                    <i className="uil uil-message nav_icon"></i>Contact
                </a>
                </li>
         </ul>

         <i class="uil uil-times nav_close " onClick={() => ShowMenu (!Toggle)}></i>
         
         </div>
         <div className="nav__toggle" onClick={() => ShowMenu (!Toggle)}>
           <i class="uil uil-apps"></i>
         </div>
         </nav>
    </header>
  )
}

export default Header