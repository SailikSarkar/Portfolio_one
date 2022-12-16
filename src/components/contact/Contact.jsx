import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import contactimage from '../../assets/contact_image.png'
import CV from '../../assets/CV.pdf'
import './contact.scss'

import {motion} from 'framer-motion'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8s7b4ss', 'template_bodg9v6', form.current, 'a1G0z_DB4DjjkK6Dm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
<motion.section   
   
   whileInView={{ y: [100, 0], opacity: [0, 1] }}
   transition={{ duration: 1.0 }}
   
   className="contact section" id="contact">
    <h2 className='section__title'>Say Hello !</h2>
    <span className='section__subtitle'>Contact Me</span>

    <motion.div 
    
                
                className='contact__container container grid'>
        <img src={contactimage} alt="" className="contact__img" />


 {/* <div>


 <iframe  className="contact__img" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29441.23296119776!2d88.46176964915747!3d22.722512260080418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a209b5283ced%3A0x4989765a0652bd78!2sBarasat%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1671162122781!5m2!1sen!2sin"
 
//  width="300" 
//  height="300" 
 style={{border:0}}
  allowfullscreen=""
   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div> */}


        <div className='contact__data'>
           



            {/* <h2 className="contact__description">Feel free to contact me . . </h2> */}

            <form ref={form} onSubmit={sendEmail} className='contact__form'>
              <div className='contact__form-div'>
                <label className='contact__form-tag'>Name       .    </label>
                <input type="text"  name='name' className='contact__form-input' 
                placeholder='Insert your name'/>
              </div>
              
              <div className='contact__form-div'>
                <label className='contact__form-tag'>Mail          .           </label>
                <input type="email"  name='email' className='contact__form-input' 
                placeholder='Insert your email'/>
              </div>


              <div className='contact__form-div'>
                <label className='contact__form-tag'>Message</label>
                <textarea name="message"  cols="30" rows="10" className='contact__form-input' placeholder='Write your message'></textarea>

                <button className="button button-flex send_btn ">
                    Send Message   <i class="uil uil-message"></i>
                </button>
              </div>
            </form>


<div>

  
</div>

        </div>





    </motion.div>
  

    {/* <div>


<iframe  className="contact__img2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29441.23296119776!2d88.46176964915747!3d22.722512260080418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a209b5283ced%3A0x4989765a0652bd78!2sBarasat%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1671162122781!5m2!1sen!2sin"

//  width="300" 
//  height="300" 
style={{border:0}}
 allowfullscreen=""
  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div> */}

   </motion.section>
  )
}

export default Contact