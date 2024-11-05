import React from "react";
import { useTranslation } from "react-i18next";
import arrow_icon from "../../assets/img/arrow-icon.svg";
// import RedirectButton from "../../components/RediractButton";

const SolutionMission = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container mission-deatil soluction-details">
        <div className="mission-info soluction-info-1">
          <h2 className="mission-title">
            {t("solutionMission.title.part1")}{" "}
            <span>{t("solutionMission.title.part2")}</span>
          </h2>
          <p className="mission-pera-1">{t("solutionMission.desc1")}</p>
        </div>
        <div className="mission-info">
          <div className="black-divider"></div>
          <p className="mission-pera-2">{t("solutionMission.desc2")}</p>
          <div className="redirect-btn">
            <a href="the-group.html">
              <p>{t("solutionMission.redirectBtnText")}</p>
              <button>
                <img src={arrow_icon} alt="arrow-icon" />
              </button>
            </a>
          </div>
          {/* <RedirectButton text={t("solutionMission.redirectBtnText")} link="/the-group" /> */}
        </div>
      </div>
    </section>
  );
};

export default SolutionMission;
