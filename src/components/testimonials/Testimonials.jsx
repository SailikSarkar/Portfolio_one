import React from 'react'
import  { useState } from 'react'
import {motion} from 'framer-motion'
import './testimonials.scss'
import Cards from './Cards'
import Cards2 from './Cards2'
import Cards3 from './Cards3'


const Testimonials = () => {

  
 
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
      setToggleState(index);

  }



  return (
  
<motion.section   
   
   whileInView={{ y: [100, 0], opacity: [0, 1] }}
   transition={{ duration: 1.5 }}
   
   className="about section" id="testimonial">
    <h2 className='section__title'>testimonial</h2>
    <span className='section__subtitle'>My academics</span>



    <div className='qualification__container container'>
  













  






  <div className="testimonial__sections grid">

    
    <div className={
      toggleState === 1 ? "qualification__content qualification__content-active ": "qualification__content "
    }>



<Cards/>

    </div>


    <div className={
      toggleState === 2 ? "qualification__content qualification__content-active ": "qualification__content "
    }>


<Cards2/>


    

    </div>


    <div className={
      toggleState === 3 ? "qualification__content qualification__content-active ": "qualification__content "
    }>




<Cards3/>

    

    </div>



  </div>
    




  <div className='qualification__tab'>
    <div 
    
    className={toggleState === 1 ? "work__box2 qualification__btn button--flex qualification__active" : "qualification__btn work__box button--flex "}

    onClick ={() => toggleTab(1)}
    
    >
     {" "}
       <p className='work__title1'>1</p>
    </div>

    <div
      
      className={toggleState === 2 ? "work__box2 qualification__btn button--flex qualification__active" : "qualification__btn work__box button--flex "}
      onClick ={() => toggleTab(2)}
    
    
    >
     {" "}
      <p className='work__title1'>2</p>
    </div>


    <div
      
      className={toggleState === 3 ? "work__box2 qualification__btn button--flex qualification__active" : "work__box qualification__btn button--flex "}
      onClick ={() => toggleTab(3)}
    
    
    >
      {/* <i class='bx bxs-cookie qualification__icon' ></i> */}
      {" "}
      <p className='work__title1'>3</p>
    </div>



  </div>




 </div>
   
   </motion.section>


  )
}

export default Testimonials