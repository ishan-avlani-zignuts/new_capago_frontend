import React, { useState } from "react";
import hub from "../assets/video/hub.mp4";
import arrow_icon from "../assets/img/arrow-icon.svg";
import logo from "../assets/img/Capago-main-logo.svg";
import flag1 from "../assets/img/flag-1.svg";
import flag2 from "../assets/img/flag-2.svg";
import btn_arrow from "../assets/img/button-arrow.svg"
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
const ApplicationHub = () => {
  const { t } = useTranslation();
 const [selectedCountry, setSelectedCountry] = useState("France");
 const [menuActive, setMenuActive] = useState(false);

 const handleSelect = (country) => {
   setSelectedCountry(country);
   setMenuActive(false);
 };

  return (
    <section className="hub">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("hub.meta.title")}</title>
        <meta name="description" content={t("hub.meta.description")} />
        <meta name="keywords" content={t("hub.meta.keywords")} />
      </Helmet>
      <div className="hub-section">
        <video
          id="myVideo"
          className="hub-video"
          src={hub}
          loop
          muted
          autoPlay
        />
        <div className="hub-content">
          <div className="container">
            <div className="logo">
              <a
                href="home.html"
                className="logo d-flex align-items-center me-auto me-xl-0"
              >
                <img src={logo} alt="Capago" className="white-img" />
              </a>
            </div>
            <div className="hub-cont">
              <h6 className="hub-text">{t("hub.center")}</h6>
              <h1>{t("hub.officialVisa")}</h1>
              <div className="country_flag">
                <div className="flag">
                  <img src={flag1} alt="flag" />
                </div>
                <div className="flag">
                  <img src={flag2} alt="flag" />
                </div>
              </div>
              <div className="demand-devis">
                <p className="d-card-title">{t("hub.chooseCountry")}</p>
                <div className={`select-menu ${menuActive ? "active" : ""}`}>
                  <div
                    className="select-btn"
                    onClick={() => setMenuActive(!menuActive)}
                  >
                    <span className="sBtn-text">{selectedCountry}</span>
                    <i className="bx bx-chevron-down">
                      <img src={btn_arrow} alt="" />
                    </i>
                  </div>

                  <ul className="options">
                    {["France", "Germany", "Spain", "Italy"].map((country) => (
                      <li
                        key={country}
                        className="option"
                        onClick={() => handleSelect(country)}
                      >
                        <span className="option-text">{country}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="navbar-btn-demande">
                  <p>{t("hub.validate")}</p>
                  <button className="file-button">
                    <img src={arrow_icon} alt="Valider" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationHub;
