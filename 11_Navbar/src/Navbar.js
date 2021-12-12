import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaFacebook, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showLinks, setshowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeigt = linksRef.current.getBoundingClientRect().height;
    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeigt}px`
    }
    else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button className='nav-toggle'>
            <FaBars 
              onClick={() => setshowLinks(!showLinks)}
            />
          </button>
        </div>

        {/* { showLinks &&  */}
          {/* <div className={` ${showLinks ? 'links-container show-container' : 'links-container' }`}> */}
          <div className='links-container' ref={linksContainerRef} >
            <ul className='links' ref={linksRef} >
              { links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })}
            </ul>
          </div>
        {/* } */}
        
        <ul className='social-icons'>
          { social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })}
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
