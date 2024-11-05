import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import file_open from "../../assets/img/file_open.svg";
import guinee from "../../assets/video/guinee.mp4";
import togo from "../../assets/video/togo.mp4";
import sandton from "../../assets/video/sandton.mp4";

const videos = [
  { video: guinee, city: "Guinée" },
  { video: togo, city: "Togo" },
  { video: sandton, city: "Sandton" },
];

const Hero = () => {
  const { t } = useTranslation();
  const [randomVideo, setRandomVideo] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setRandomVideo(videos[randomIndex]);
  }, []);

  return (
    <section id="hero" className="hero section dark-background section-index">
      <div className="main_hero_section">
        <video
          id="randomVideo"
          autoPlay
          muted
          loop
          src={randomVideo?.video}
        ></video>
        <div className="container">
          <div className="hero-detail-section">
            <div className="hero-detail">
              <div className="hero-text">
                <div className="divider-line"></div>
                <p id="rv">{randomVideo?.city}</p>
              </div>
              <h1>{t("YourJourneyStartsHere")}</h1> 
              <div className="divider-line"></div>
              <p className="hero-pera">
                {t("CapagoIsTheTrustedPartner")} 
              </p>
            </div>
            <div className="demande-card">
              <div className="card-question">
                <i className="bi bi-question-circle"></i>
                <p>{t("AreYouApplyingForAVisa")}</p> 
              </div>
              <p className="card-pera">
                {t("VisitOurVisaApplicationSpace")} 
              </p>
              <div
                className="btn-demande btn-demande-center"
                id="toggleButtonBanner"
              >
                <a
                  target="_blank"
                  href="https://www.capago.eu/"
                  rel="noopener noreferrer"
                >
                  <p>{t("SubmitMyVisaApplication")}</p>
                  <button className="file-button">
                    <img src={file_open} alt="open-file" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
