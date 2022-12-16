

import React, { useState } from 'react'
import Aboutimage from '../../assets/square_image.png'
// import '//uiz.scss'

const Card_comp_mob = () => {

    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (



    

    <div className='ui__container  grid'>



      
        <div className='ui__box'>

        <div className='ui_img_container'>
          <img src={Aboutimage} alt="" className="ui__img" /></div>

            <div>
         
            <h3 className='ui__title '> Blog App</h3>
            {/* <p className='ui__desc'> Blog application based on react </p> */}
            </div>


            <span className='ui__btn '  onClick={() => toggleTab(1)}>View more  <i className='uil uil-arrow-right  ui__btn-icon'> </i>   </span>

            <div className={toggleState === 1 ? 'ui__model active-model' : 'ui__model'}>
                <div className='seevces__model-content'>
                    <i onClick={() => toggleTab(0) } className='uil uil-times ui__model-close'></i>

                    <h3 className='service__model-title'> UI/UX</h3>
                    <p className='ui__model-description'>ui with more than 9000 years of experience . providing best quality produck to the client and many more .</p>

                    <ul className='ui__model-ui grid'>


                        <li className='ui__model-service'>
                            <i className='uil uil-check-circle ui__model-icon'></i>
                            <p className='ui__model-info'>
                                I developed the user experience .
                            </p>
                        </li>


                        <li className='ui__model-service'>
                            <i className='uil uil-check-circle ui__model-icon'></i>
                            <p className='ui__model-info'>
                                I +++++++++++++  the user experience .
                            </p>
                        </li>


                        <li className='ui__model-service'>
                            <i className='uil uil-check-circle ui__model-icon'></i>
                            <p className='ui__model-info'>
                                I $$$$$$$$$$$$$$$$$$$$ the user experience .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>       
        </div>






        <div className='ui__box'>

        <div className='ui_img_container'>
          <img src={Aboutimage} alt="" className="ui__img" /></div>

            <div>
         
            <h3 className='ui__title '> Blog App</h3>
            {/* <p className='ui__desc'> Blog application based on react </p> */}
            </div>


            <span className='ui__btn '  onClick={() => toggleTab(1)}>View more  <i className='uil uil-arrow-right  ui__btn-icon'> </i>   </span>

            <div className={toggleState === 1 ? 'ui__model active-model' : 'ui__model'}>
                <div className='seevces__model-content'>
                    <i onClick={() => toggleTab(0) } className='uil uil-times ui__model-close'></i>

                    <h3 className='service__model-title'> UI/UX</h3>
                    <p className='ui__model-description'>ui with more than 9000 years of experience . providing best quality produck to the client and many more .</p>

                    <ul className='ui__model-ui grid'>


                        <li className='ui__model-service'>
                            <i className='uil uil-check-circle ui__model-icon'></i>
                            <p className='ui__model-info'>
                                I developed the user experience .
                            </p>
                        </li>


                        <li className='ui__model-service'>
                            <i className='uil uil-check-circle ui__model-icon'></i>
                            <p className='ui__model-info'>
                                I +++++++++++++  the user experience .
                            </p>
                        </li>


                        <li className='ui__model-service'>
                            <i className='uil uil-check-circle ui__model-icon'></i>
                            <p className='ui__model-info'>
                                I $$$$$$$$$$$$$$$$$$$$ the user experience .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>       
        </div>








        <div className='ui__box'>

        <div className='ui_img_container'>
          <img src={Aboutimage} alt="" className="ui__img" /></div>

            <div>
         
            <h3 className='ui__title '> Blog App</h3>
            {/* <p className='ui__desc'> Blog application based on react </p> */}
            </div>


            <span className='ui__btn '  onClick={() => toggleTab(1)}>View more  <i className='uil uil-arrow-right  ui__btn-icon'> </i>   </span>

            <div className={toggleState === 1 ? 'ui__model active-model' : 'ui__model'}>
                <div className='seevces__model-content'>
                    <i onClick={() => toggleTab(0) } className='uil uil-times ui__model-close'></i>

                    <h3 className='service__model-title'> UI/UX</h3>
                    <p className='ui__model-description'>ui with more than 9000 years of experience . providing best quality produck to the client and many more .</p>

                    <ul className='ui__model-ui grid'>


                        <li className='ui__model-service'>
                            <i className='uil uil-check-circle ui__model-icon'></i>
                            <p className='ui__model-info'>
                                I developed the user experience .
                            </p>
                        </li>


                        <li className='ui__model-service'>
                            <i className='uil uil-check-circle ui__model-icon'></i>
                            <p className='ui__model-info'>
                                I +++++++++++++  the user experience .
                            </p>
                        </li>


                        <li className='ui__model-service'>
                            <i className='uil uil-check-circle ui__model-icon'></i>
                            <p className='ui__model-info'>
                                I $$$$$$$$$$$$$$$$$$$$ the user experience .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>       
        </div>







       
    </div>








  )
}

export default Card_comp_mob