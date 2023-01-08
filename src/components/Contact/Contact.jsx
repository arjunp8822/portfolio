import {React, useEffect, useRef} from 'react'
import './Contact.scss'
import {BsLinkedin} from 'react-icons/bs'
import {TbArrowBigRightLines} from 'react-icons/tb'
import {AiOutlineMail, AiFillPhone} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_86phg0i', 'template_esoqgg9', form.current, 'twcfsdyMRI2RLLHE1')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        document.getElementById("form").reset();
    };

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <section id='contact' className='contact section container'>

      <div className="sectionTitle" data-aos='fade-up' data-aos-duration='2000'>
        <span className="titleNumber">04.</span>
        <h5 className="titleText">
          Contact
          <div className="underline"><span></span></div>
        </h5>
      </div>
      <div className="contactContainer grid">

        <div className="socialContact grid">
          <h3 data-aos='fade-up' data-aos-duration='2000'>Talk to me</h3>

          <div className="cards grid">
            
            <div className="card" data-aos='fade-up' data-aos-duration='2000'>
                <div>
                  <BsLinkedin className='icon linkedinIcon'/>
                </div>
                <h4>LinkedIn</h4>
                <span className="userName">/arjun-punekar/</span>
                <div>
                  <a href="https://www.linkedin.com/in/arjun-punekar/" target='_blank' className="flex">
                    Send Message
                    <TbArrowBigRightLines className='icon'/>
                  </a>
                </div>
              </div>

              <div className="card" data-aos='fade-up' data-aos-duration='2000'>
                <div>
                  <AiOutlineMail className='icon linkedinIcon'/>
                </div>
                <h4>Email</h4>
                <span className="userName">apunekar95@gmail.com</span>
                <div>
                  <a href="mailto:apunekar95@gmail.com" target='_blank' className="flex">
                    Send Message
                    <TbArrowBigRightLines className='icon'/>
                  </a>
                </div>
              </div>

              <div className="card" data-aos='fade-up' data-aos-duration='2000'>
                <div>
                  <AiFillPhone className='icon linkedinIcon'/>
                </div>
                <h4>Phone</h4>
                <span className="userName">0424 073 944</span>
                <div>
                  <a href="https://wa.me/<+61424073944>" target='_blank' className="flex">
                    Send Message
                    <TbArrowBigRightLines className='icon'/>
                  </a>
                </div>
              </div>

            </div>
            
        </div>

        <div className="form grid" data-aos='fade-up' data-aos-duration='2000'>
          <h3>Send me a message</h3>
          <form ref={form} onSubmit={sendEmail} id='form'>
            <input type="text" placeholder='Enter your name' name='name'/>
            <input type="email" placeholder='Enter your email' name='email'/>
            <textarea name="message" id="" cols="30" rows="30" placeholder='Enter your message'></textarea>
            <button className="formBtn" type='submit' name='submit'>Send message</button>
          </form>
        </div>

      </div>

    </section>
  )
}

export default Contact