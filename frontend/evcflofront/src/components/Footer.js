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
      <p className="copyright">
        copyright &copy; Chameleon
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
