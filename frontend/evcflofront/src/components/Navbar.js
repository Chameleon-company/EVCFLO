import React, { useState, useRef, useEffect } from 'react';
import logo from '../images/logo.png';
import { pageLinks, socialLinks, authenticatedLinks, notAuthenticatedLinks } from '../data';
import Hamburger from 'hamburger-react';
import { SocialIcon } from 'react-social-icons';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showLinks, setShowLinks] = useState(false); //usestate for dropdown menu, viewable below certain screen sizes
  const [isOpen, setOpen] = useState(false); // usestate For hamburger menu icon using the hamburger react library
  const linksUseRef = useRef(null); // keeps menu dropdown open after refresh
  const rLinks = useRef(null);
  const toggleLinks = () => {
    //toggles dropdown links
    setShowLinks(!showLinks);
  };
  //for dropdown box
  useEffect(() => {
    const linksHeight = rLinks.current.getBoundingClientRect().height;
    if (showLinks) {
      linksUseRef.current.style.height = `${linksHeight}px`;
    } else {
      linksUseRef.current.style.height = '0px';
    }
  }, [showLinks]);

  // for different links if logged in
  const [loggedIn, setLoggedIn] = useState(false); //unused but could be useful in future?
  // Mutating page links directly can cause issues, so we create a copy
  const [navLinks, setNavLinks] = useState([...pageLinks, ...notAuthenticatedLinks]);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setLoggedIn(true) : setLoggedIn(false);
      setNavLinks(user ? [...pageLinks, ...authenticatedLinks] : [...pageLinks, ...notAuthenticatedLinks]);
    });
  }, []);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/home" target="_blank" rel="noreferrer">
            {' '}
            {/*links logo to homepage*/}
            <img src={logo} className="nav-logo" alt="evcflologo" />
          </a>
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={toggleLinks} //toggles dropdown menu
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <div className="links-container" ref={linksUseRef}>
          <ul className="nav-links" id="nav-links" ref={rLinks}>
            {/*maps pagelinks from data.js*/}
            {navLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  {/* Changed this to an onclick function so it doesn't refresh the page, gives a more seamless experience*/}
                  <a
                    href={href}
                    className="nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(href);
                    }}
                  >
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
