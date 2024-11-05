import React, { useEffect } from "react";
import footer_logo from "../assets/img/footer-main-logo.svg";
import linkedin from "../assets/img/linked.svg";
import top_arrow from "../assets/img/top-arrow.svg";
import { Link } from "react-router-dom";
import file_open from "../assets/img/file_open.svg";
const Footer = () => {
  useEffect(() => {
    const scrollTop = document.querySelector(".scroll-top");
    if (scrollTop) {
      const toggleScrollTop = function () {
        window.scrollY > 100
          ? scrollTop.classList.add("active")
          : scrollTop.classList.remove("active");
      };
      window.addEventListener("load", toggleScrollTop);
      document.addEventListener("scroll", toggleScrollTop);
      scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  });

  return (
    <div>
      <footer
        id="footer"
        className="footer position-relative light-background section-index"
      >
        <div className="container section-index">
          <div className="footer-details">
            <div className="footer-section">
              <Link to="/home">
                <img src={footer_logo} alt="main-logo" />
              </Link>
              <p className="footer-pera">
                En alliant notre savoir-faire français à une démarche
                d'innovation constante, Capago s'engage à fournir des services
                de gestion des visas contribuant à la fois à l'efficacité et à
                la sécurité des administrations publiques.
              </p>
              <div className="social-media">
                <a
                  href="https://www.linkedin.com/company/capago-sarl/"
                  target="_blank"
                  className="sos-icon"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Société</h4>
              <ul>
                <li className="footer-links">
                  <Link to="/the-group">Le groupe</Link>
                </li>
                <li className="footer-links">
                  <Link to="/our-solutions">Nos solutions</Link>
                </li>
                <li className="footer-links">
                  <Link to="/talents">Talents</Link>
                </li>
                <li className="footer-links">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Andere Links</h4>
              <ul>
                <li className="footer-links">
                  <a
                    href="https://www.capago.eu/en/tos.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tischservice
                  </a>
                </li>
                <li className="footer-links">
                  <a
                    href="https://www.capago.eu/en/privacy_policy.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Datenschutzrichtlinie
                  </a>
                </li>
                <li className="footer-links">
                  <a
                    href="https://www.capago.eu/en/cookies_policy.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Cookie-Richtlinie
                  </a>
                </li>
                <li className="footer-links">
                  <a
                    href="https://www.capago.eu/en/terms_of_use.php"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Nutzungsbedingungen
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Besoin d'un visa ? </h4>
              <p className="footer-pera footer-second-pera">
                Rendez-vous dans notre espace dédié aux demandes de visa.
              </p>
              {/* <div className="btn-demande">
                <a
                  target="_blank"
                  href="https://www.capago.eu/"
                  rel="noopener noreferrer"
                >
                  <p>Effectuer ma demande de visas</p>
                  <button className="file-button">
                    <img src={file_open} alt="open-file" />
                  </button>
                </a>
              </div> */}
              <div className="contentBx">
                <div
                  className="btn-demande"
                  onClick={() =>
                    window.open("https://www.capago.eu/", "_blank")
                  }
                >
                  <p>Effectuer ma demande de visas</p>
                  <button className="file-button">
                    <img src={file_open} alt="open-file" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          href="/"
          id="scroll-top"
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <img src={top_arrow} alt="Scroll to top" />
        </a>
        <div className="container footer-divider-line"></div>
        <div className="container last-footer-lines">
          <p className="l-footer-text">
            CGV <span className="hor-line">|</span> POLITIQUE DE CONFIDENTIALITÉ{" "}
            <span className="hor-line">|</span>
            POLITIQUE DE COOKIES <span className="hor-line">|</span> CGU
          </p>
          <p className="l-footer-text">
            © 2024 CAPAGO INTERNATIONAL. All rights reserved{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
