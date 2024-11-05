import React from "react";
import { useTranslation } from "react-i18next";
import is_img from "../../assets/img/ISO 27001 Information Security.svg";

const Securities = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="security-section">
          <div className="security-title">
            <div className="secr-title-value">
              <h2 className="serc-h2">{t("security.title")}</h2>
              <p className="serc-pera">{t("security.description")}</p>
            </div>
            <div className="secr-img">
              <img src={is_img} alt="ISO Security" />
            </div>
          </div>
          <div className="security-cards">
            {data.map((item, index) => (
              <div key={index} className="sec-card">
                <div className="s-card-img">
                  <img src={item.image} alt={item.title} />
                </div>
                <h4 className="sec-h4">{item.title}</h4>
                <p className="sec-pera">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Securities;
