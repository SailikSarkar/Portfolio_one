import React from 'react'
import './workz.scss'
import  { useState } from 'react'
import {motion} from 'framer-motion'
import './Card_comp'
import Card_comp from './Card_comp'
import Card_comp_mob from './Card_comp_mob'
import Card__comp_web from './Card__comp_web'
import Card_comp_ui from './Card_comp_ui'

const Workz = () => {

    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);

    }
  return (

    
    <motion.section  
    whileInView={{ y: [100, 0], opacity: [0, 1] }}
    transition={{ duration: 1.0 }}
    
    className="skills section" id="portfolio">
    <h2 className='section__title'>Workz</h2>
    <span className='section__subtitle'>Some of my own projects </span>






    <div className='qualification__container container'>
  <div className='qualification__tab'>
    <div 
    
    className={toggleState === 1 ? "ui__box qualification__btn button--flex qualification__active" : "qualification__btn ui__box button--flex "}

    onClick ={() => toggleTab(1)}
    
    >
      <i className='uil uil-graduation-cap  qualification__icon'></i>{" "}
       <p className='ui__title1'>Web</p>
    </div>

    <div
      
      className={toggleState === 2 ? "ui__box qualification__btn button--flex qualification__active" : "qualification__btn ui__box button--flex "}
      onClick ={() => toggleTab(2)}
    
    
    >
      <i className='uil uil-briefcase-alt qualification__icon'></i>{" "}
      <p className='ui__title1'>Mobile</p>
    </div>


    <div
      
      className={toggleState === 3 ? "ui__box qualification__btn button--flex qualification__active" : "ui__box qualification__btn button--flex "}
      onClick ={() => toggleTab(3)}
    
    
    ><i class='bx bxs-cookie qualification__icon' ></i>
      {" "}
      <p className='ui__title1'>UI/UX</p>
    </div>



    <div
      
      className={toggleState === 4 ? " ui__box qualification__btn button--flex qualification__active" : "qualification__btn ui__box button--flex "}
      onClick ={() => toggleTab(4)}
    
    
    >
      <i className='uil uil-briefcase-alt qualification__icon'></i>{" "}
       <p className='ui__title1'>All</p>
    </div>
  </div>














  






  <div className="qualification__sections">

    
    <div className={
      toggleState === 1 ? "qualification__content qualification__content-active ": "qualification__content "
    }>



<Card__comp_web/>
    

    </div>


    <div className={
      toggleState === 2 ? "qualification__content qualification__content-active ": "qualification__content "
    }>



<Card_comp_mob/>


    

    </div>


    <div className={
      toggleState === 3 ? "qualification__content qualification__content-active ": "qualification__content "
    }>




<Card_comp_ui/>

    

    </div>



    <div className={
      toggleState === 4 ? "qualification__content qualification__content-active ": "qualification__content "
    }>





<Card_comp/>
    

    </div>


  </div>
    








 </div>
   
   </motion.section>
  )
}

export default Workz