import React from "react";
import { useTranslation } from "react-i18next";

const Innovations = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="innovation-radius">
        <div className="container">
          <div className="innovation-guide">
            <h3 className="innovation-h3">{t("innovations.heading")}</h3>
            <div className="innovation-cards">
              {data.map((item, index) => (
                <div key={index} className="innovation-guide-card">
                  <div className="innovation-card-header">
                    <div className="in-card-img">
                      <img src={item.image} alt="" />
                    </div>
                    <h4 className="in-card-h4">{item.title}</h4>
                  </div>
                  <p className="innovation-pera">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovations;
