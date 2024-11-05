import React from "react";
import { useTranslation } from "react-i18next";
import inclusion from "../../assets/img/inclusion-icon.svg";
import personal from "../../assets/img/personal-icon.svg";
import enagagement from "../../assets/img/engagement-icon.svg";
import arrow_icon from "../../assets/img/arrow-icon.svg";
// import RedirectButton from '../../components/RediractButton';
const Culture = () => {
  const { t } = useTranslation();

  return (
    <section id="culture-section">
      <div className="container">
        <div className="row culture-content">
          <div className="col-md-5 culture-left">
            <div className="innovation-detail">
              <div className="innovation-text">
                <div className="divider-line"></div>
                <p>{t("hr_resources")}</p>
              </div>
              <h2>
                {t("culture_capago")} <span>{t("capago_span")}</span>
              </h2>
              <p className="innovation-pera">{t("culture_description")}</p>
              <div
                className="redirect-btn"
                onClick={() => window.open("our-solutions.html")}
              >
                <p>{t("learn_more")}</p>
                <button>
                  <img src={arrow_icon} alt="arrow-icon" />
                </button>
              </div>
              {/* <RedirectButton text="En savoir plus" link="/our-solutions" /> */}
            </div>
          </div>
          <div className="col-md-6 culture-right">
            <ul>
              <li>
                <div className="icon">
                  <img src={inclusion} alt="Inclusion Icon" />
                </div>
                <div className="right-content">
                  <h3>{t("equality_inclusion_title")}</h3>
                  <p>{t("equality_inclusion_description")}</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src={personal} alt="Personal Icon" />
                </div>
                <div className="right-content">
                  <h3>{t("personal_professional_development_title")}</h3>
                  <p>{t("personal_professional_development_description")}</p>
                </div>
              </li>
              <li>
                <div className="icon">
                  <img src={enagagement} alt="Engagement Icon" />
                </div>
                <div className="right-content">
                  <h3>{t("commitment_excellence_title")}</h3>
                  <p>{t("commitment_excellence_description")}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
