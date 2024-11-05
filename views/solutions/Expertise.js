import React from "react";
import { useTranslation } from "react-i18next";
import expert from "../../assets/img/expert-img.jpeg";

const Expertise = () => {
  const { t } = useTranslation();

  return (
    <section id="expertise">
      <div className="container expertise">
        <div className="expertise-title">
          <h2 className="exp-h2">{t("expertise.title")}</h2>
          <p className="exp-pera">{t("expertise.subtitle")}</p>
        </div>
        <div className="expertise-details">
          <div className="expert-img">
            <img src={expert} alt="expert" />
          </div>
          <div className="expert-data">
            <p>{t("expertise.paragraph1")}</p>
            <p>{t("expertise.paragraph2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
