import React from 'react'
import './About.css'
import Aboutimage from '../../assets/about-image.png'
import CV from '../../assets/CV.pdf'
import Info from  './Info'
import {motion} from 'framer-motion'

const About = () => {
  return (
   <motion.section   
   
   whileInView={{ y: [100, 0], opacity: [0, 1] }}
   transition={{ duration: 1.0 }}
   
   className="about section" id="about">
    <h2 className='section__title'>About Me</h2>
    <span className='section__subtitle'>My Details</span>

    <motion.div 
    
                
                className='about__container container grid'>
        <img src={Aboutimage} alt="" className="about__img" />
        <div className='about__data'>
            <Info/>

            <p className="about__description">I work on builds and maintenance for a variety of client sites for my job during the day, and at night you can also find me doing some freelance work on the side taking on my clients' sites (made in a variety of site builders/platforms), giving them a design-focused revamp, and adding some custom features and functionality to make them shine!</p>

            <a download='' href={CV} className="button button--flex">Download CV  <i class="uil uil-file-download"></i></a>

        </div>
    </motion.div>
   </motion.section>
  )
}

export default About
