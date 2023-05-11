import React, { useState } from "react";
import "./Footer.css";
import { FaMobileAlt } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import footerimg from './footerimg.svg'
import FooterAppImg from './FooterAppImg.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <footer class="footer">
            <table border={0} width="100%">
              <colgroup>
                  <col width="20%"/>
                  <col width="60%" />
                  <col width="20%" />
              </colgroup>
              <tr>
                <td>
                  <img src={footerimg} style={{ width: 150, height: 150}} alt="footerimg" />
                </td>
                <td>
                  <h2>Contact Us</h2>
                  <h3><FaMobileAlt />03 5975 6586</h3>
                  <h4><FaMailBulk /> customer.service@chameleon.com.au</h4>
                  <h4>Privacy Notice | About Us</h4>
                  <h6>Copyright © Chameleon 2023 All Rights Reserved</h6><br/>
                </td>
                <td>
                  <p class="footerappimg">Download our app here</p>
                  <img src={FooterAppImg} style={{ width: 100, height: 100}} alt="FooterAppImg" />
                  <p class="footerappimg">Find us here</p>
                  <FaFacebook /><FaTwitterSquare /><FaInstagramSquare />
                </td>
              </tr>
            </table>
    </footer>
  );
};

export default Navbar;