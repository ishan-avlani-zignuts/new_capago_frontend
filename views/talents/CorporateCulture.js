import React from "react";
import { useTranslation } from "react-i18next";
import arrow_icon from "../../assets/img/arrow-icon.svg";
import RedirectButton from "../../components/RediractButton";

const CorporateCulture = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="container">
        <div className="corporate_culture">
          <h2 className="cc-title">{t("corporate_culture.title")}</h2>
          <div className="cc">
            <div className="cc-info">
              <p className="cc-pera-1">{t("corporate_culture.paragraph1")}</p>
              <p className="cc-pera-1">{t("corporate_culture.paragraph2")}</p>
            </div>
            <div className="cc-info">
              <div className="black-divider"></div>
              <p className="cc-pera-2">{t("corporate_culture.paragraph3")}</p>
              <p className="cc-pera-2">{t("corporate_culture.paragraph4")}</p>
              <div
                className="redirect-btn"
                onClick={() =>
                  window.open("talents.html#join-capago", "_blank")
                }
              >
                <p>{t("corporate_culture.join_us")}</p>
                <button>
                  <img src={arrow_icon} alt="arrow-icon" />
                </button>
              </div>
              {/* <RedirectButton text={t('corporate_culture.join_us')} link="/talents#join-capago" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateCulture;
