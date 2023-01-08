import {React, useEffect} from 'react'
import './About.scss'
import {TbCloudDownload} from 'react-icons/tb'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCss3} from 'react-icons/si'
import {ImNpm} from 'react-icons/im'
import {AiFillGithub} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CV from '../../assets/CV.pdf'


const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <section id='about' className='about section container'>
      <div className="sectionTitle">
        <span className="titleNumber" data-aos='fade-up' data-aos-duration='2000'>01.</span>
        <h5 className="titleText" data-aos='fade-up' data-aos-duration='2000'>
          About Me
          <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="sectionContent grid" data-aos='fade-up' data-aos-duration='2000'>
        <div className="textSection">
          <h4>
            After finishing a Bachelor of Commerce from UNSW and my Chartered Accountancy, I 
            started a finance role at Wesfarmers. While working on a project, 
            I had to learn Visual Basic to loop through data. This ignited 
            a coding and problem solving passion inside me. I immediately 
            transitioned into a Data Science role at Retail Insight as a 
            stepping stone to eventually jump into a Software Engineering position.
          </h4>
          <div className="aboutBtn">
            <a href={CV} className="flex" download='Arjun Punekar CV'>
              Download CV
              <TbCloudDownload className='icon'/>
            </a>
          </div>
        </div>
        <div className="animation">
          <div className='face1'><SiJavascript className='animation-icon-1'/></div>
          <div className='face2'><FaReact className='animation-icon-2'/></div>
          <div className='face3'><AiFillHtml5 className='animation-icon-3'/></div>
          <div className='face4'><SiCss3 className='animation-icon-4'/></div>
          <div className='face5'><ImNpm className='animation-icon-5'/></div>
          <div className='face6'><AiFillGithub className='animation-icon-6'/></div>
        </div>

      </div>
      
    </section>
  )
}

export default About