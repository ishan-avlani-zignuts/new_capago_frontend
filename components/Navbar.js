// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import "../App.css";
// import "../assets/vendor/bootstrap/css/bootstrap.min.css";
// import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
// import "../assets/vendor/aos/aos.css";
// import "../assets/vendor/glightbox/css/glightbox.min.css";
// import "../assets/vendor/swiper/swiper-bundle.min.css";

// import logo1 from "../assets/img/Capago-main-logo.svg";
// import logo2 from "../assets/img/orange-logo.svg";
// import logo3 from "../assets/img/mobile-logo.svg";
// import file_open from "../assets/img/file_open.svg";

// gsap.registerPlugin(ScrollTrigger);

// const Navbar = () => {
//   const location = useLocation();
//   const isNotHomePage = location.pathname !== "/";
//   const [mobileNavActive, setMobileNavActive] = useState(false);

//   useEffect(() => {
//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: ".text-box",
//           start: "top top+=20%",
//           end: "bottom+=300% top",
//           scrub: true,
//           pin: ".text-box",
//           pinSpacing: false,
//         },
//       })
//       .to(".text-box", {
//         y: 150,
//         fontSize: "2rem",
//         ease: "power1.inOut",
//       });

//     // Hide mobile nav on same-page/hash links
//     const navMenuLinks = document.querySelectorAll("#navmenu a");
//     navMenuLinks.forEach((link) => {
//       link.addEventListener("click", () => {
//         if (mobileNavActive) {
//           setMobileNavActive(false);
//           document.body.classList.remove("mobile-nav-active");
//         }
//       });
//     });

//     // Toggle mobile nav dropdowns
//     const dropdownToggles = document.querySelectorAll(
//       ".navmenu .toggle-dropdown"
//     );
//     dropdownToggles.forEach((toggle) => {
//       toggle.addEventListener("click", function (e) {
//         e.preventDefault();
//         this.parentNode.classList.toggle("active");
//         this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
//         e.stopImmediatePropagation();
//       });
//     });

//     // Preloader
//     const preloader = document.querySelector("#preloader");
//     if (preloader) {
//       window.addEventListener("load", () => {
//         preloader.remove();
//       });
//     }

//     // Cleanup function
//     return () => {
//       navMenuLinks.forEach((link) => {
//         link.removeEventListener("click", () => {});
//       });
//       dropdownToggles.forEach((toggle) => {
//         toggle.removeEventListener("click", () => {});
//       });
//       if (preloader) {
//         window.removeEventListener("load", () => {});
//       }
//     };
//   }, [mobileNavActive]);

//   const isActive = (path) => (location.pathname === path ? "active" : "");

//   const toggleMobileNav = () => {
//     setMobileNavActive(!mobileNavActive);
//     document.body.classList.toggle("mobile-nav-active");
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 1200 && mobileNavActive) {
//         setMobileNavActive(false);
//         document.body.classList.remove("mobile-nav-active");
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [mobileNavActive]);

//   return (
//     <div
//       className={`index-page ${isNotHomePage ? "activeClass" : ""} ${
//         mobileNavActive ? "mobile-nav-active" : ""
//       }`}
//       id="toggleActiveId"
//     >
//       <header id="header" className="header d-flex align-items-center">
//         <div className="container position-relative d-flex align-items-center justify-content-between">
//           <Link
//             to="/home"
//             className="logo d-flex align-items-center me-auto me-xl-0"
//           >
//             <img src={logo1} alt="main-logo" className="white-img" />
//             <img src={logo2} alt="main-logo" className="orange-img" />
//             <img src={logo3} alt="main-logo" className="mobile-logo" />
//           </Link>

//           <nav
//             style={{ textDecoration: "none" }}
//             id="navmenu"
//             className={`navmenu ${mobileNavActive ? "mobile-nav-active" : ""}`}
//           >
//             <ul>
//               <li>
//                 <Link
//                   to="/the-group"
//                   className={isActive("/the-group")}
//                   style={{ textDecoration: "none" }}
//                 >
//                   Le groupe
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/our-solutions"
//                   className={isActive("/our-solutions")}
//                   style={{ textDecoration: "none" }}
//                 >
//                   Nos solutions
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/talents"
//                   className={isActive("/talents")}
//                   style={{ textDecoration: "none" }}
//                 >
//                   Talents
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/contact"
//                   className={isActive("/contact")}
//                   style={{ textDecoration: "none" }}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//             <div
//               className="mobile-nav-toggle d-xl-none me-2"
//               onClick={toggleMobileNav}
//             >
//               <i className={`bi ${mobileNavActive ? "bi-x" : "bi-list"}`}></i>
//             </div>
//           </nav>

//           <div className="d-flex align-items-center">
//             <div className="navbar-btn-demande" id="toggleButtonHeader">
//               <a
//                 target="_blank"
//                 href="https://www.capago.eu/"
//                 rel="noopener noreferrer"
//               >
//                 <p>Demande de visa</p>
//                 <button className="file-button">
//                   <img src={file_open} alt="open-file" />
//                 </button>
//               </a>
//             </div>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation
import i18n from "../i18n"; // Import i18n configuration file
import "../App.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";

import logo1 from "../assets/img/Capago-main-logo.svg";
import logo2 from "../assets/img/orange-logo.svg";
import logo3 from "../assets/img/mobile-logo.svg";
import file_open from "../assets/img/file_open.svg";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const location = useLocation();
  const isNotHomePage = location.pathname !== "/";
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const { t } = useTranslation();

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={`index-page ${isNotHomePage ? "activeClass" : ""} ${
        mobileNavActive ? "mobile-nav-active" : ""
      }`}
    >
      <header id="header" className="header d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <Link
            to="/home"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <img src={logo1} alt="main-logo" className="white-img" />
            <img src={logo2} alt="main-logo" className="orange-img" />
            <img src={logo3} alt="main-logo" className="mobile-logo" />
          </Link>

          <nav
            id="navmenu"
            className={`navmenu ${mobileNavActive ? "mobile-nav-active" : ""}`}
          >
            <ul>
              <li>
                <Link
                  to="/the-group"
                  className={location.pathname === "/the-group" ? "active" : ""}
                >
                  {t("group")}
                </Link>
              </li>
              <li>
                <Link
                  to="/our-solutions"
                  className={
                    location.pathname === "/our-solutions" ? "active" : ""
                  }
                >
                  {t("solutions")}
                </Link>
              </li>
              <li>
                <Link
                  to="/talents"
                  className={location.pathname === "/talents" ? "active" : ""}
                >
                  {t("talents")}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "active" : ""}
                >
                  {t("contact")}
                </Link>
              </li>
            </ul>
            <div
              className="mobile-nav-toggle d-xl-none me-2"
              onClick={() => setMobileNavActive(!mobileNavActive)}
            >
              <i className={`bi ${mobileNavActive ? "bi-x" : "bi-list"}`}></i>
            </div>
          </nav>

          <div className="d-flex align-items-center">
            <div className="navbar-btn-demande" id="toggleButtonHeader">
              <a
                href="https://www.capago.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{t("visa_request")}</p>
                <button className="file-button">
                  <img src={file_open} alt="open-file" />
                </button>
              </a>
            </div>
            {/* Language Dropdown */}
            <Dropdown>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                🌐 Language
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLanguageChange("en")}>
                  🇬🇧 English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange("fr")}>
                  🇫🇷 Français
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
