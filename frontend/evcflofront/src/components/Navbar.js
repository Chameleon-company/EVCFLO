import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import { pageLinks, socialLinks } from "../data";
import Hamburger from "hamburger-react";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
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
      linksUseRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <a href="/home" target="_blank" rel="noreferrer">
            {" "}
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
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href} className="nav-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="nav-icons">
          {/* maps social links from data.js*/}
          {socialLinks.map((link) => {
            const { id, href, bgc } = link;
            return (
              <li key={id}>
                <SocialIcon url={href} bgColor={bgc} />
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
