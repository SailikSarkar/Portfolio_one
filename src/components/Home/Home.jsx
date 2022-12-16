import React from 'react'
import './Home.css'
import Social from './Social'
import Data from './Data'
import ScrollDown from './ScrollDown'
import {motion} from 'framer-motion'
import useLocalStorage from 'use-local-storage'

const Home = () => {


  return (
 

    <motion.section  
    
    
    initial={{
      y:-500,
      opacity:0,
      scale:0.5,
    }}
    animate={{
     
      y:0,
      opacity:1,
      scale:1,
    }}
    transition={{
      delay: 0,
      duration: 1,
    }}
    
    className="home section" id="home"   >
    <div className='home__container container grid'>
        <div className="home__content grid">

            <Social/>

            <motion.div 
                whileInView={{ y: [100, 0], opacity: [0, 1] }}
                transition={{ duration: 1 }}
   
   className="home_img"></motion.div>

            <Data/>


        </div>
        <ScrollDown/>
    </div>
    </motion.section>
  )
}

export default Home