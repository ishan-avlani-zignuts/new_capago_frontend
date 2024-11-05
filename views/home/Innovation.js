import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; 
import arrow_icon from "../../assets/img/arrow-icon.svg";
import innovation from "../../assets/img/Innovation-img.jpeg";

const Innovation = () => {
  const { t } = useTranslation(); 

  return (
    <section id="Innovation" className="section-index">
      <div className="container">
        <div className="innovation-carriere">
          <div className="innovation-detail">
            <div className="innovation-text">
              <div className="divider-line"></div>
              <p>{t("InnovationAndRD")}</p>
            </div>
            <h2>
              <span>{t("Innovation")}</span> {t("AtTheHeartOfOurBusiness")}
            </h2>
            <p className="innovation-pera">
              {t("CapagoContinuousInnovation")}
            </p>
            <div className="redirect-btn">
              <Link to="/our-solutions">
                <p>{t("LearnMore")}</p>
                <button>
                  <img src={arrow_icon} alt="arrow-icon" />
                </button>
              </Link>
            </div>
          </div>
          <div className="innovation-image">
            <img src={innovation} alt="innovation-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
