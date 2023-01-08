import {React, useState} from 'react'
import './Navbar.scss'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import CV from '../../assets/CV.pdf'

const Navbar = () => {

  const [active,  setActive] = useState('navBar')
  const [activeHeader, setActiveHeader] = useState('header')
  const showNavBar = () => {
    setActive('navBar activeNavBar')
  }

  const removeNavBar = () => {
    setActive('navBar')
  }

  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader('header activeHeader')
    } else {
      setActiveHeader('header')
    }
  }

  window.addEventListener('scroll', addBg)

  return (
    <header className={activeHeader}>

      <div className="logoDiv">
        <h1 className="logo"><a href='#home'>AP.</a></h1>
      </div>

      <div className={active}>
        <ul className="navLists" onClick={removeNavBar}>
          <li className="navItem">
            <a href="#about" className="navLink"><span className='headerNumber'>1.</span> About</a>
          </li>
          <li className="navItem">
            <a href="#skill" className="navLink"><span className='headerNumber'>2.</span> Skills</a>
          </li>
          <li className="navItem">
            <a href="#projects" className="navLink"><span className='headerNumber'>3.</span> Projects</a>
          </li>
          <li className="navItem">
            <a href="#contact" className="navLink"><span className='headerNumber'>4.</span> Contact</a>
          </li>
          <button className="btn">
            <a href={CV} download='Arjun Punekar CV'>Resume</a>
          </button>
        </ul>
        <div className="closeNavBar" onClick={removeNavBar}>
          <AiFillCloseCircle className='icon'/>
        </div>
      </div>

      <div className="toggleNavBar" onClick={showNavBar}>
        <TbGridDots className='icon'/>
      </div>

    </header>
  )
}

export default Navbar