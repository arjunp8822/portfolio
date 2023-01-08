import {React, useEffect} from 'react'
import './Skills.scss'
import {TbBrandReactNative} from 'react-icons/tb'
import {IoLogoJavascript, IoLogoSass} from 'react-icons/io'
import {AiFillHtml5, AiOutlineConsoleSql, AiFillFileExcel, AiFillFileWord} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {FaNode, FaPython, FaSnowflake, FaGoogle, FaFilePowerpoint} from 'react-icons/fa'
import {SiExpress, SiTableau, SiMicrosoftoutlook} from 'react-icons/si'
import {BsBootstrapFill, BsMicrosoft} from 'react-icons/bs'
import {DiMongodb} from 'react-icons/di'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id='skill' className='skills container section'>
      <div className="sectionTitle">
        <span className="titleNumber" data-aos='fade-up' data-aos-duration='2000'>02.</span>
        <h5 className="titleText" data-aos='fade-up' data-aos-duration='2000'>
          Skills
          <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="skillsContainer grid">
       
        <div className="skillGroup" data-aos='fade-up' data-aos-duration='2000'>

          <div className="groupTitle">
            <h2 className="title">Web Development Skills</h2>
            <span className="subTitle">6 Months Experience</span>
          </div>

          <div className="generalSkills">

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillHtml5 className='icon'/>
              </div>
              <span className="skillName">HTML</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoCss3 className='icon'/>
              </div>
              <span className="skillName">CSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className='icon'/>
              </div>
              <span className="skillName">JavaScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className='icon'/>
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaNode className='icon'/>
              </div>
              <span className="skillName">Node</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiExpress className='icon'/>
              </div>
              <span className="skillName">Express</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className='icon'/>
              </div>
              <span className="skillName">SASS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <DiMongodb className='icon'/>
              </div>
              <span className="skillName">MongoDB</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <BsBootstrapFill className='icon'/>
              </div>
              <span className="skillName">Bootstrap</span>
            </div>

          </div>

        </div>

        <div className="skillGroup" data-aos='fade-up' data-aos-duration='2000'>

          <div className="groupTitle">
            <h2 className="title">Data Skills</h2>
            <span className="subTitle">18 Months Experience</span>
          </div>

          <div className="generalSkills">

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaPython className='icon'/>
              </div>
              <span className="skillName">Python</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiOutlineConsoleSql className='icon'/>
              </div>
              <span className="skillName">SQL</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaSnowflake className='icon'/>
              </div>
              <span className="skillName">Snowflake</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGoogle className='icon'/>
              </div>
              <span className="skillName">BigQuery</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <BsMicrosoft className='icon'/>
              </div>
              <span className="skillName">Power Bi</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTableau className='icon'/>
              </div>
              <span className="skillName">Tableau</span>
            </div>

          </div>

        </div>

        <div className="skillGroup" data-aos='fade-up' data-aos-duration='2000'>

          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            <span className="subTitle">6 Years Experience</span>
          </div>

          <div className="generalSkills">

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillFileExcel className='icon'/>
              </div>
              <span className="skillName">MS Excel</span>
            </div>


            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillFileWord className='icon'/>
              </div>
              <span className="skillName">MS Word</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMicrosoftoutlook className='icon'/>
              </div>
              <span className="skillName">Outlook</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaFilePowerpoint className='icon'/>
              </div>
              <span className="skillName">PowerPoint</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Skills