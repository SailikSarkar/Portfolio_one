import React, { useState } from 'react'
import './Services.css'
import {motion} from 'framer-motion'


const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
  return (
    <motion.section  
    
    
    whileInView={{ y: [100, 0], opacity: [0, 1] }}
    transition={{ duration: 1.0 }}
    
    className="services section" id="service">
    <h2 className='section__title'>Services</h2>
    <span className='section__subtitle'>What i offer</span>

    <div className='services__container container grid'>



      
        <div className='services__data'>
            <div>
            
            <i class='bx bxs-cookie services__icon' ></i>
            <h3 className='services__title '> UI/UX <br/> Web Designer</h3>
            </div>


            <span className='services__btn '  onClick={() => toggleTab(1)}>View more  <i className='uil uil-arrow-right  services__btn-icon'> </i>   </span>

            <div className={toggleState == 1 ? 'services__model active-model' : 'services__model'}>
                <div className='seevces__model-content'>
                    <i onClick={() => toggleTab(0) } className='uil uil-times services__model-close'></i>

                    <h3 className='service__model-title'> UI/UX</h3>
                    <p className='services__model-description'>services with more than 9000 years of experience . providing best quality produck to the client and many more .</p>

                    <ul className='services__model-services grid'>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I developed the user experience .
                            </p>
                        </li>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I +++++++++++++  the user experience .
                            </p>
                        </li>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I $$$$$$$$$$$$$$$$$$$$ the user experience .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>       
        </div>







        <div className='services__data'>
            <div>
           
            <i class='bx bxs-cog services__icon'></i>
            <h3 className='services__title '> Backend <br/> Web developer</h3>
            </div>


            <span className='services__btn '  onClick={() => toggleTab(2)}>View more  <i className='uil uil-arrow-right  services__btn-icon'></i> </span>

            <div className={toggleState == 2 ? 'services__model active-model' : 'services__model'}>
                <div className='seevces__model-content'>
                    <i onClick={() => toggleTab(0) } className='uil uil-times services__model-close'></i>

                    <h3 className='service__model-title'> UI/UX</h3>
                    <p className='services__model-description'>services with more than 9000 years of experience . providing best quality produck to the client and many more .</p>

                    <ul className='services__model-services grid'>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I developed the user experience .
                            </p>
                        </li>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I +++++++++++++  the user experience .
                            </p>
                        </li>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I $$$$$$$$$$$$$$$$$$$$ the user experience .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>       
        </div>











        <div className='services__data'>
            <div>
          
            <i class='bx bxs-coin-stack services__icon' ></i>
            <h3 className='services__title '> Full-Stack <br/> Web developer</h3>
            </div>


            <span className='services__btn '  onClick={() => toggleTab(3)}>View more  <i className='uil uil-arrow-right  services__btn-icon'></i> </span>

            <div className={toggleState == 3 ? 'services__model active-model' : 'services__model'}>
                <div className='seevces__model-content'>
                    <i onClick={() => toggleTab(0) } className='uil uil-times services__model-close'></i>

                    <h3 className='service__model-title'> Geymer</h3>
                    <p className='services__model-description'>services with more than 9000 years of experience . providing best quality produck to the client and many more .</p>

                    <ul className='services__model-services grid'>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I developed the user experience .
                            </p>
                        </li>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I +++++++++++++  the user experience .
                            </p>
                        </li>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I $$$$$$$$$$$$$$$$$$$$ the user experience .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>       
        </div>








        <div className='services__data'>
            <div>
      
            <i class='bx bx-desktop services__icon' ></i>
            <h3 className='services__title '> Front-end <br/> Web developer</h3>
            </div>


            <span className='services__btn '  onClick={() => toggleTab(4)}>View more  <i className='uil uil-arrow-right  services__btn-icon'></i> </span>

            <div className={toggleState == 4 ? 'services__model active-model' : 'services__model'}>
                <div className='seevces__model-content'>
                    <i onClick={() => toggleTab(0) } className='uil uil-times services__model-close'></i>

                    <h3 className='service__model-title'> Geymer</h3>
                    <p className='services__model-description'>services with more than 9000 years of experience . providing best quality produck to the client and many more .</p>

                    <ul className='services__model-services grid'>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I developed the user experience .
                            </p>
                        </li>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I +++++++++++++  the user experience .
                            </p>
                        </li>


                        <li className='services__model-service'>
                            <i className='uil uil-check-circle services__model-icon'></i>
                            <p className='services__model-info'>
                                I $$$$$$$$$$$$$$$$$$$$ the user experience .
                            </p>
                        </li>
                    </ul>
                </div>
            </div>       
        </div>






       
    </div>
   </motion.section>
  )
}

export default Services