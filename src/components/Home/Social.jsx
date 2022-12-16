import React from 'react'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'


const Social = () => {


  
const [theme, setTheme] =useState("dark-theme");  
const toggleTheme = () => 
{
  theme === 'dark-theme' ? setTheme('light-theme') : setTheme('dark-theme');
};

useEffect(()=>  {
  document.body.className = theme
}, [theme]);


  return (
   <motion.div

    whileInView={{ opacity: [0, 1] }}
   transition={{ duration: 0.9 }}
   
   className="home__social">
    <a href="https://twitter.com/home" className="home__social-icon" target=""><i class="uil uil-twitter"></i></a>
    <a href="https://github.com/SailikSarkar" className="home__social-icon" target=""><i class="uil uil-github"></i></a>
    <a href="#" className="home__social-icon" target="">
    <i class="uil  uil-brightness"  onClick={ () =>  toggleTheme(theme)}></i>
    </a>

   </motion.div>
  )
}

export default Social