import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo.png";
import { pageLinks, socialLinks } from "../data";
import Hamburger from "hamburger-react";
import { SocialIcon } from "react-social-icons";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="evcflologo" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={toggleLinks}
          >
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="nav-links" id="nav-links" ref={linksRef}>
            {pageLinks.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.href} className="nav-link">
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, bgc } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-icon"
                >
                  <SocialIcon url={href} bgColor={bgc} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
