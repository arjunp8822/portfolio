import {React, useEffect} from 'react'
import './Home.scss'
import {AiFillGithub, AiFillLinkedin, AiOutlineArrowRight} from 'react-icons/ai'
import {TbChevronsDown} from 'react-icons/tb'
import {SiLeetcode} from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <section id='home' className='home section'>

      <div className="leftIcons">
        <div className="social grid">
          <a href="https://github.com/arjunp8822" target='_blank'>
            <AiFillGithub className='icon' />
          </a>
          <a href="https://www.linkedin.com/in/arjun-punekar/" target='_blank'>
            <AiFillLinkedin className='icon' />
          </a>
          <a href="https://leetcode.com/arjunp88/" target='_blank'>
            <SiLeetcode className='icon' />
          </a>
          <div className="line"></div>
        </div>
      </div>

      <div className="container homeContainer" data-aos='fade-left' data-aos-duration='2000'>
        <span className="introText">
          Hi my name is,
        </span>

        <h1 className="title">
          Arjun Punekar
        </h1>

        <span className="subTitle">
          I am a full stack student currently looking for an opportunity to learn.
        </span>

        <p className="homeParagraph">
          I come from a finance and data science background, looking to move into a career which I am passionate about.
        </p>
        
        <div className="lowerHomeSection">
          <button className="containerBtn">
            <a href="#contact" className="flex">
              Contact Me
            </a>
            <div className='arrow'>
                <AiOutlineArrowRight className='arrow-icon'/>
              </div>
          </button>
          <div className="scrollDiv">
            <a href="#about" className="flex">
              <h6 className="scroll">Scroll Down</h6> 
              <TbChevronsDown className='icon'/>
            </a>
          </div>
        </div>

      </div>

      <div className="rightEmail">
        <div className="emailAddress">
          <a href="https://mailto:apunekar95@gmail.com" target='_blank'>
            apunekar95@gmail.com
          </a>
        </div>
        <div className="line"></div>
      </div>

    </section>
  )
}

export default Home