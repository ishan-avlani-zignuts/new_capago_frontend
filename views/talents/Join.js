import React from "react";
import jcapago from "../../assets/img/jcapago-card-1.svg";
import jcapago2 from "../../assets/img/jcapago-card-2.svg";
import jcapago3 from "../../assets/img/jcapago-card-3.svg";
import arrow_icon from "../../assets/img/arrow-icon.svg";
import RedirectButton from "../../components/RediractButton";
const Join = () => {
  return (
    <section id="join-capago">
      <div className="container">
        <div className="join-capago">
          <h2>Rejoignez Capago</h2>
        </div>
        <div className="jcapago-blocklist">
          <div className="jcapago-block">
            <img src={jcapago} alt="" className="j-card-img" />
            <button
              className="arrow-button"
              onClick="window.open('https://capago.teamtailor.com/','_blank');"
            >
              <img src={arrow_icon} alt="arrow-icon" />
            </button>
            <div className="card-contant">
              <h5>Nos offres d’emplois</h5>
              <p>
                Découvrez nos opportunités professionnelles et rejoignez nos
                équipes
              </p>
              <div
                className="redirect-btn"
                onClick="window.open('https://capago.teamtailor.com/','_blank');"
              >
                <h4>Accédez à notre site Carrière</h4>
                <button className="r-arrow">
                  <img src={arrow_icon} alt="arrow-icon" />
                </button>
              </div>
              {/* <RedirectButton
                text="Accédez à notre site Carrière"
                link="https://capago.teamtailor.com/"
              /> */}
            </div>
          </div>
          <div className="jcapago-block">
            <img src={jcapago2} alt="" className="j-card-img" />
            <button
              className="arrow-button"
              onClick="window.open('https://capago.teamtailor.com/connect','_blank');"
            >
              <img src={arrow_icon} alt="arrow-icon" />
            </button>
            <div className="card-contant">
              <h5>Candidature spontanée</h5>
              <p>
                Envoyez-nous votre candidature spontanée et explorez les
                opportunités de carrière chez Capago.
              </p>
              <div
                className="redirect-btn"
                onClick="window.open('https://capago.teamtailor.com/connect','_blank');"
              >
                <h4>Envoyez votre candidature</h4>
                <button className="r-arrow">
                  <img src={arrow_icon} alt="arrow-icon" />
                </button>
              </div>
              {/* <RedirectButton
                text="Envoyez votre candidature"
                link="https://capago.teamtailor.com/connect"
              /> */}
            </div>
          </div>
          <div className="jcapago-block">
            <img src={jcapago3} alt="" className="j-card-img" />
            <button
              className="arrow-button"
              onClick="window.open('contact.php','_blank');"
            >
              <img src={arrow_icon} alt="arrow-icon" />
            </button>
            <div className="card-contant">
              <h5>Etudiants - Stage</h5>
              <p>
                Découvrez nos opportunités de stage et développez vos
                compétences professionnelles
              </p>
              <div
                className="redirect-btn"
                onClick="window.open('contact.php','_blank');"
              >
                <h4>Contactez-nous</h4>
                <button className="r-arrow">
                  <img src={arrow_icon} alt="arrow-icon" />
                </button>
              </div>
              {/* <RedirectButton
                text="Contactez-nous"
                link="/contact"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
