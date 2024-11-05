import React from "react";
import { useTranslation } from "react-i18next";

const Services = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container our-soluctions">
        <div className="soluction-titles">
          <h2>{t("services.title")}</h2>
          <p>{t("services.description")}</p>
        </div>
        <div className="soluctions-details-cards">
          {data.map((item, index) => (
            <div key={index} className="soluction-card">
              <img src={item.image} alt="" />
              <div className="black-divider"></div>
              <h3 className="soluction-h3">{item.title}</h3>
              <p className="soluction-pera">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
