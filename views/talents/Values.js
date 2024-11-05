import React from "react";
import { useTranslation } from "react-i18next";
import bookmark from "../../assets/img/bookmark_check.svg";
import moving from "../../assets/img/moving.svg";
import emoji from "../../assets/img/emoji_objects.svg";
import volunteer from "../../assets/img/volunteer_activism.svg";
import handshake from "../../assets/img/handshake.svg";

const Values = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="group-value">
          <h2>{t("values.groupTitle")}</h2>
          <div className="value-content">
            <p>{t("values.paragraph1")}</p>
            <p>{t("values.paragraph2")}</p>
          </div>
        </div>

        <div className="group-block">
          <div className="value-block">
            <div className="title">
              <div className="icon">
                <img src={bookmark} alt={t("values.excellenceIconAlt")} />
              </div>
              <h3>{t("values.excellenceTitle")}</h3>
            </div>
            <p>{t("values.excellenceDescription")}</p>
          </div>

          <div className="value-block">
            <div className="title">
              <div className="icon">
                <img src={moving} alt={t("values.agilityIconAlt")} />
              </div>
              <h3>{t("values.agilityTitle")}</h3>
            </div>
            <p>{t("values.agilityDescription")}</p>
          </div>

          <div className="value-block">
            <div className="title">
              <div className="icon">
                <img src={emoji} alt={t("values.innovationIconAlt")} />
              </div>
              <h3>{t("values.innovationTitle")}</h3>
            </div>
            <p>{t("values.innovationDescription")}</p>
          </div>

          <div className="value-block">
            <div className="title">
              <div className="icon">
                <img src={volunteer} alt={t("values.respectIconAlt")} />
              </div>
              <h3>{t("values.respectTitle")}</h3>
            </div>
            <p>{t("values.respectDescription")}</p>
          </div>

          <div className="value-block">
            <div className="title">
              <div className="icon">
                <img src={handshake} alt={t("values.engagementIconAlt")} />
              </div>
              <h3>{t("values.engagementTitle")}</h3>
            </div>
            <p>{t("values.engagementDescription")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
