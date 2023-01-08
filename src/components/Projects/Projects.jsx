import {React, useEffect} from 'react'
import './Projects.scss'
import projectData from '../../projects/projects'
import { CgWebsite } from 'react-icons/cg'
import { FiGithub } from 'react-icons/fi'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <section id='projects' className='projects section container'>

      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
          <h5 className="titleText">
            Projects
            <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="projectContainer grid">
        {projectData.map((project) => (
          <div key={project.id} className="singleProject" data-aos='fade-up' data-aos-duration='2000'>
            <div className="externalLinks flex">
              <div className="websiteIcon">
                <a href={project.link} target='_blank'>
                  <CgWebsite className='icon'/>
                </a>
              </div>
              <div className="githubIcon">
                <a href={project.github} target='_blank'>
                  <FiGithub className='icon'/>
                </a>
              </div>
            </div>

            <div className="imgDiv">
              <a href={project.link} target='_blank'>
                <img src={project.image} alt={project.title} />
              </a>
            </div>

            <div className="projectTitle">
              <h3>{project.title}</h3>
            </div>

            <div className="desc">
              <h3>{project.desc}</h3>
            </div>

            <div className="technologies flex">
              <small>{project.tech1}</small>
              <small>{project.tech2}</small>
              <small>{project.tech3}</small>
              <small>{project.tech4}</small>
            </div>
            {console.log(project.image)}
          </div>
        ))}
        
      </div>

    </section>
  )
}

export default Projects