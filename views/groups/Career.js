import React from "react";
import { useTranslation } from "react-i18next";
import arrow_icon from "../../assets/img/arrow-icon.svg";
import discuts from "../../assets/img/discuts.jpg";
import { Link } from "react-router-dom";

const Career = () => {
  const { t } = useTranslation();

  return (
    <section id="Carriere" className="carriere section-index">
      <div className="carriere-section">
        <div className="container" style={{ padding: 0 }}>
          <div className="innovation-carriere contect-section">
            <div className="innovation-image">
              <img src={discuts} alt="innovation-img" />
            </div>
            <div className="innovation-detail">
              <div className="innovation-text">
                <div className="divider-line"></div>
                <p>{t("contact")}</p>
              </div>
              <h2>
                {t("discuss")} <span>{t("together")}</span>
              </h2>
              <p className="innovation-pera">{t("assistance_info")}</p>
              <div className="redirect-btn">
                <Link to="/contact">
                  <p>{t("contact_us")}</p>
                  <button>
                    <img src={arrow_icon} alt="arrow-icon" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
