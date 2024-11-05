import React from "react";
import { useTranslation } from "react-i18next"; 
import arrow_icon from "../../assets/img/arrow-icon.svg";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <div>
      <section>
        <div className="container mission-deatil">
          <div className="mission-info">
            <h2 className="mission-title">{t("mission_title")}</h2>
            <p className="mission-pera-1">{t("mission_description_1")}</p>
          </div>
          <div className="mission-info">
            <div className="black-divider"></div>
            <p className="mission-pera-2">{t("mission_description_2")}</p>
            <div
              className="redirect-btn"
              onClick={() => window.open("our-solutions.html")}
            >
              <p>{t("discover_solutions")}</p>
              <button>
                <img src={arrow_icon} alt="arrow-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
