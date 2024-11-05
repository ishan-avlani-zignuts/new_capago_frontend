import React from "react";
import carriers from "../../assets/img/carriere.jpeg";
import RedirectButton from "../../components/RediractButton";
import { useTranslation } from "react-i18next";

const Careers = () => {
  const { t } = useTranslation();

  return (
    <section id="Carriere" className="carriere section-index">
      <div className="carriere-section">
        <div className="container">
          <div className="innovation-carriere">
            <div className="innovation-image">
              <img src={carriers} alt="innovation-img" />
            </div>
            <div className="innovation-detail">
              <div className="innovation-text">
                <div className="divider-line"></div>
                <p>{t("CARRIERE")}</p>
              </div>
              <h2>{t("JoinUs")}</h2>{" "}
              <p className="innovation-pera">{t("JoinDynamicTeam")}</p>
              <RedirectButton text={t("learn_more")} link="/talents" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
