import React from "react";
import arrow_icon from "../assets/img/arrow-icon.svg";
import image from "../assets/img/Perspectives.jpeg";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Perspectives = ({ data }) => {
  const { t } = useTranslation();

  if (!data || !Array.isArray(data)) {
    return null;
  }

  return (
    <main className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("perspectives_helmet.perspectives.title")}</title>
        <meta
          name="description"
          content={t("perspectives_helmet.perspectives.description")}
        />
        <meta
          name="keywords"
          content={t("perspectives_helmet.perspectives.keywords")}
        />
      </Helmet>

      <section className="group-section">
        <div className="container">
          <div className="group-header">
            <h1 className="gr-h1">{t("perspectives.header.title")}</h1>
            <p className="gr-pera">{t("perspectives.header.description")}</p>
          </div>
        </div>
      </section>

      <section className="group-section">
        <div className="panel_animation">
          <div
            className="main-group-img Perspectives-grp-img"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="group-detail prospective-detail">
              <div className="per-heading-section">
                <h3 className="per-h3">{t("perspectives.sectionTitle")}</h3>
                <p className="perspect-pera">{t("perspectives.paragraph")}</p>
                <div className="services-button">
                  <button className="service-btn">
                    {t("perspectives.button")}
                  </button>
                  <button className="service-btn">
                    {t("perspectives.button")}
                  </button>
                </div>
              </div>
              <div className="contentBx">
                <div className="btn-demande">
                  <p>{t("perspectives.contactUs")}</p>
                  <button className="file-button">
                    <img src={arrow_icon} alt="open-file" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="innovation-radius">
          <div className="container">
            <div className="all-categories">
              <h2 className="category-header">
                {t("perspectives.categories.all")}
              </h2>
              <div data-js="hero-demo">
                <div className="ui-group">
                  <div className="filters button-group js-radio-button-group device-type">
                    <button className="cat-button is-checked" data-filter="*">
                      {t("perspectives.categories.all")}
                    </button>
                    <button className="cat-button" data-filter=".cat-1">
                      {t("perspectives.categories.digitalTech")}
                    </button>
                    <button className="cat-button" data-filter=".cat-2">
                      {t("perspectives.categories.customerExp")}
                    </button>
                    <button className="cat-button" data-filter=".cat-3">
                      {t("perspectives.categories.dataSecurity")}
                    </button>
                    <button className="cat-button" data-filter=".cat-4">
                      {t("perspectives.categories.changeManagement")}
                    </button>
                    <button className="cat-button" data-filter=".cat-5">
                      {t("perspectives.categories.capagoWorld")}
                    </button>
                  </div>
                </div>

                <ul className="perspect-ul grid">
                  {data.map((item, index) => (
                    <li
                      key={index}
                      className="element-item cat-1"
                      data-category="cat-1"
                    >
                      <div className="perspect-card">
                        <div className="perspect-card-img-part">
                          <img src={item.image} alt="" />
                          <button className="per-card-direction-btn">
                            <i className="bi bi-arrow-up-right"></i>
                          </button>
                        </div>
                        <div className="perspect-card-details">
                          <h4 className="per-card-heading">
                            {t("perspectives.sectionTitle")}
                          </h4>
                          <p className="per-card-pera">
                            {t("perspectives.paragraph_new")}
                          </p>
                        </div>
                        <div className="perspect-card-buttons">
                          <button className="per-btn">
                            {t("perspectives.button")}
                          </button>
                          <button className="per-btn">
                            {t("perspectives.button")}
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Perspectives;
