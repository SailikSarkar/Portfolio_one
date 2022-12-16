import React from 'react'
import Frontend from './Frontend'
import Backend from './Backend'
import {motion} from 'framer-motion'
import './Skills.css'

const Skills = () => {
  return (
    <motion.section 
    
    whileInView={{ y: [100, 0], opacity: [0, 1] }}
    transition={{ duration: 1.0 }}
    
    className="skills section" id="skills">
    <h2 className='section__title'>Skills</h2>
    <span className='section__subtitle'>My ability to do something well</span>

    <div className='skills__container container grid'>
        {/* <img src={skillsimage} alt="" className="skills__img" /> */}
        <div className='skills__data'>
            <Frontend/>

            {/* <p className="skills__description">I work on builds and maintenance for a variety of client sites for my job during the day, and at night you can also find me doing some freelance work on the side taking on my clients' sites (made in a variety of site builders/platforms), giving them a design-focused revamp, and adding some custom features and functionality to make them shine!</p>

            <a download='' href={CV} className="button button--flex">Download CV  <i class="uil uil-file-download"></i></a> */}

        </div>
    </div>
   </motion.section>
  )
}

export default Skills