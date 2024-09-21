import footerContact from "../../api/footer-api.json";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";

export const Footers = () => {
  const footerIcon = {
    PiCoffeeFill: <PiCoffeeFill />,
    FaGithub: <FaGithub />,
    FaLinkedin: <FaLinkedin />,
  };
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        {footerContact.map((contact, index) => {
          const { icon, title, link } = contact;
          return (
            <div className="footer-contact" key={index}>
              <div className="icon">{footerIcon[icon]}</div>
              <div className="footer-contact-text">
                <NavLink to={link} target="_blank" className="no-underline">
                  <h3>{title}</h3>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2024, All Right Reserved
                <NavLink
                  className="no-underline"
                  to="https://adarshlkdev.tech"
                  target="_blank"
                >
                  GlobeScout
                </NavLink>
              </p>
            </div>

            <div className="footer-menu">
              <p>Made with ❤️ by adarshlkdev</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
