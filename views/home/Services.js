import React from "react";
import { useTranslation } from "react-i18next";
import services_img_2 from "../../assets/img/service-img-2.jpeg";
import services_img from "../../assets/img/service-img-1.jpeg";
import file_open from "../../assets/img/file_open.svg";

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="service-section section-index">
      <div className="container">
        <div>
          <div className="services-details">
            <div className="service-text-detail">
              <div className="divider-line"></div>
              <p>{t("Services")}</p> 
            </div>
            <h2>
              <span>{t("TailoredSolutions")}</span>{" "}
              {t("SimplifyAndSecureProcesses")}
            </h2>
            <p className="service-pera">
              {t("CapagoDescription")} 
            </p>
          </div>
          <div className="hover-card__wrap">
            <a
              data-video-hover=""
              data-cursor={t("ChooseYourGuide")} 
              target="_blank"
              className="hover-card is--left w-inline-block text-decoration-none"
              rel="noopener noreferrer"
              href="/"
            >
              <div className="hover-card__inner">
                <div className="hover-card__bg">
                  <img
                    src={services_img}
                    alt="Rebecca, smiling"
                    className="cover-img"
                    style={{ opacity: 1 }}
                  />
                </div>
                <div className="hover-card__grad"></div>
                <div className="content">
                  <div className="imgBx">
                    <div className="service-text">
                      <div className="divider-line"></div>
                      <p>{t("Services")}</p> 
                    </div>
                    <h3>{t("InnovationForSimplifiedAdminServices")}</h3>
                    <p className="pera-hover-text">
                      {t("CapagoDescription")} 
                    </p>
                  </div>
                  <div className="contentBx">
                    <div
                      className="btn-demande"
                      onClick={() =>
                        window.open("our-solutions.html", "_blank")
                      }
                    >
                      <p>{t("DiscoverOurSolutions")}</p>
                      <button className="file-button">
                        <img src={file_open} alt="open-file" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            <a
              href="/"
              data-cursor={t("GetStarted")}
              target="_blank"
              className="hover-card is--right w-inline-block text-decoration-none"
              rel="noopener noreferrer"
            >
              <div className="hover-card__inner">
                <div className="hover-card__bg">
                  <img
                    src={services_img_2}
                    alt="iphone with the Fruitful app open"
                    className="cover-img"
                  />
                </div>
                <div className="hover-card__grad"></div>
                <div className="hover-card__info">
                  <div className="content started-content">
                    <div className="imgBx">
                      <div className="service-text">
                        <div className="divider-line"></div>
                        <p>{t("CommitmentAndValue")}</p> 
                      </div>
                      <h3>{t("OurCommitment")}</h3>
                      <p className="pera-hover-text">
                        {t("CapagoPromise")} 
                      </p>
                    </div>
                    <div className="contentBx">
                      <div
                        className="btn-demande"
                        onClick={() =>
                          window.open("our-solutions.html", "_blank")
                        }
                      >
                        <p>{t("DiscoverOurSolutions")}</p>{" "}
                        <button className="file-button">
                          <img src={file_open} alt="open-file" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
