import React from "react";
import { useTranslation } from "react-i18next";
import services from "../../assets/img/services-footer-img.jpeg";

const Career = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="innovation-radius">
        <div className="container">
          <div className="career-evolution">
            <h2>{t("career.title")}</h2>
            <p>{t("career.description1")}</p>
          </div>
          <div className="career-details">
            <div className="career-img">
              <img src={services} alt="expert" />
            </div>
            <div className="career-data">
              <p>{t("career.description2")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
