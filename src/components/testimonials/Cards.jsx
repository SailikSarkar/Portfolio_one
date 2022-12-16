import React, { useState } from 'react'
import Aboutimage from '../../assets/square_image.png'
import './testimonials.scss'

const Cards = () => {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (

    <div className='work__container  grid'>



      
        <div className='work__box'>

        <div className='work_img_container'>
          <img src={Aboutimage} alt="" className="work__img" /></div>

            <div>
         
            <h3 className='work__title '>Eric Pillai</h3>
            {/* <p className='work__desc'> Blog application based on react </p> */}
            </div>


            <span className='work__btn ' >Like seriously !! . loved your work . i never expected the site can look this stunning .loved your work and looking forword to work with you more .    </span>

            {/* <div className={toggleState === 1 ? 'work__model active-model' : 'work__model'}>
                <div className='seevces__model-content'>
                    <i onClick={() => toggleTab(0) } className='uil uil-times work__model-close'></i>

                    <h3 className='service__model-title'> UI/UX</h3>
                    <p className='work__model-description'>work with more than 9000 years of experience . providing best quality produck to the client and many more .</p>

                    <ul className='work__model-work grid'>


                        <li className='work__model-service'>
                            <i className='uil uil-check-circle work__model-icon'></i>
                            <p className='work__model-info'>
                                I developed the user experience .
                            </p>
                        </li>


                        <li className='work__model-service'>
                            <i className='uil uil-check-circle work__model-icon'></i>
                            <p className='work__model-info'>
                                I +++++++++++++  the user experience .
                            </p>
                        </li>


                        <li className='work__model-service'>
                            <i className='uil uil-check-circle work__model-icon'></i>
                            <p className='work__model-info'>
                                I $$$$$$$$$$$$$$$$$$$$ the user experience .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>        */}
        </div>




        <div className='work__box'>

<div className='work_img_container'>
  <img src={Aboutimage} alt="" className="work__img" /></div>

    <div>
 
    <h3 className='work__title '>Eric Pillai</h3>
    {/* <p className='work__desc'> Blog application based on react </p> */}
    </div>


    <span className='work__btn ' >Like seriously !! . loved your work . i never expected the site can look this stunning .loved your work and looking forword to work with you more .    </span>

    {/* <div className={toggleState === 1 ? 'work__model active-model' : 'work__model'}>
        <div className='seevces__model-content'>
            <i onClick={() => toggleTab(0) } className='uil uil-times work__model-close'></i>

            <h3 className='service__model-title'> UI/UX</h3>
            <p className='work__model-description'>work with more than 9000 years of experience . providing best quality produck to the client and many more .</p>

            <ul className='work__model-work grid'>


                <li className='work__model-service'>
                    <i className='uil uil-check-circle work__model-icon'></i>
                    <p className='work__model-info'>
                        I developed the user experience .
                    </p>
                </li>


                <li className='work__model-service'>
                    <i className='uil uil-check-circle work__model-icon'></i>
                    <p className='work__model-info'>
                        I +++++++++++++  the user experience .
                    </p>
                </li>


                <li className='work__model-service'>
                    <i className='uil uil-check-circle work__model-icon'></i>
                    <p className='work__model-info'>
                        I $$$$$$$$$$$$$$$$$$$$ the user experience .
                    </p>
                </li>
            </ul>
        </div>
    </div>        */}
</div>













       
    </div>


  )
}

export default Cards