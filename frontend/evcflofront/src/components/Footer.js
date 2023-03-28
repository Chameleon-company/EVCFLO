import { socialLinks } from "../data";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, bgc } = link;
          return (
            <li key={id}>
              <SocialIcon url={href} bgColor={bgc} />
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Chameleon
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
