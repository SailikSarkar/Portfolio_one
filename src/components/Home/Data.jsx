import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'

const Data = () => {




  return (
    <motion.div 
    
    whileInView={{ y: [100, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
    
    className="home_data">
    <h1 className="home_title">Sailik Sarkar
    </h1>
                <h3 className="home_subtitle">Web Developer</h3>
                <p className="home_description">I am a web developer based in Kolkata, and i am very passionate and dedicated to my work ...</p>
                <a href="#contact" className="button button-flex ">
                    Say Hello <i class="uil uil-message"></i>
                </a>
                <a href="#about" className="button button-flex ">
                    About me <i class="uil uil-question-circle"></i>
                </a>
    </motion.div>
  )
}

export default Data