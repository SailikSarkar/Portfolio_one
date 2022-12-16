import React from 'react'
import  { useState } from 'react'
import {motion} from 'framer-motion'
import './Qualification.css'

const Qualification = () => {

  const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);

    }
  return (
    <motion.section   
   
    whileInView={{ y: [100, 0], opacity: [0, 1] }}
    transition={{ duration: 1.5 }}
    
    className="about section" id="about">
     <h2 className='section__title'>Qualification</h2>
     <span className='section__subtitle'>My academics</span>









 
 <div className='qualification__container container'>
  <div className='qualification__tab'>
    <div 
    
    className={toggleState === 1 ? "qualification__btn button--flex qualification__active" : "qualification__btn button--flex "}

    onClick ={() => toggleTab(1)}
    
    >
      <i className='uil uil-graduation-cap  qualification__icon'></i>{" "}
      Education
    </div>

    <div
      
      className={toggleState === 2 ? "qualification__btn button--flex qualification__active" : "qualification__btn button--flex "}
      onClick ={() => toggleTab(2)}
    
    
    >
      <i className='uil uil-briefcase-alt qualification__icon'></i>{" "}
      Experience
    </div>
  </div>











  <div className="qualification__sections">

    
    <div className={
      toggleState === 1 ? "qualification__content qualification__content-active ": "qualification__content "
    }>



      <div className="qualification__data">
        <div>
          <h3 className='qualification__title'>MCA</h3>
          <span className='qualification__subtitle'>Adamas University</span>
          <div className='qualification__calender'> 
          <i className='uil uil-stopwatch'></i>2021-Present
          </div>     
      </div>
      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>
    </div>







    <div className="qualification__data">
      <div></div>
      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>

        <div>
          <h3 className='qualification__title'>BCA</h3>
          <span className='qualification__subtitle'>Eminent college </span>
          <div className='qualification__calender'> 
          <i className='uil uil-stopwatch'></i>2018-2021
          </div>    
      </div>
    </div>





    <div className="qualification__data">
        <div>
          <h3 className='qualification__title'>Class-12</h3>
          <span className='qualification__subtitle'>Kalyani Public School</span>
          <div className='qualification__calender'> 
          <i className='uil uil-stopwatch'></i>2016-2018
          </div>     
      </div>
      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>
    </div>







    <div className="qualification__data">
      <div></div>
      <div>
        <span className='qualification__rounder'></span>
        {/* <span className='qualification__line'></span> */}
      </div>

        <div className='edu__div'>
          <h3 className='qualification__title'>Class-10</h3>
          <span className='qualification__subtitle'>Kalyani Public School</span>
          <div className='qualification__calender'> 
          <i className='uil uil-stopwatch'></i>2015-2016
          </div>    
      </div>


    </div>





    

    </div>


    <div className={
      toggleState === 2 ? "qualification__content qualification__content-active ": "qualification__content "
    }>



      <div className="qualification__data">
        <div>
          <h3 className='qualification__title'>software developer</h3>
          <span className='qualification__subtitle'>Freelancer</span>
          <div className='qualification__calender'> 
          <i className='uil uil-stopwatch'></i>2021-Present
          </div>     
      </div>
      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>
    </div>







    <div className="qualification__data">
      <div></div>
      <div>
        <span className='qualification__rounder'></span>
        <span className='qualification__line'></span>
      </div>

        <div>
          <h3 className='qualification__title'>Web deveoper </h3>
          <span className='qualification__subtitle'>freelancer </span>
          <div className='qualification__calender'> 
          <i className='uil uil-stopwatch'></i>2018-2021
          </div>    
      </div>
    </div>





    <div className="qualification__data">
        <div>
          <h3 className='qualification__title'>programmer </h3>
          <span className='qualification__subtitle'>ecmt</span>
          <div className='qualification__calender'> 
          <i className='uil uil-stopwatch'></i>2016-2018
          </div>     
      </div>
      <div>
        <span className='qualification__rounder'></span>
   
      </div>
    </div>













    

    </div>
  </div>
 </div>
    
    </motion.section>
  )
}

export default Qualification