import React from "react";
import { useTranslation } from "react-i18next";

const Engagement = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section id="engagement-section">
      <div className="container" style={{ padding: 0 }}>
        <div className="engagement-content">
          <div className="engagement-text">
            <h2>{t("engagement_section_title")}</h2>
            <p>{t("engagement_section_description")}</p>
          </div>

          <ul className="engagement-lists">
            {data.map((item, index) => (
              <li key={index} className="engagement-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Engagement;
