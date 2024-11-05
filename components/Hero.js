import React from "react";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";
import "../App.css";
import arrow_icon from "../assets/img/arrow-icon.svg"
import RedirectButton from "./RediractButton";
const Hero = ({ category, desc, image_desc,image }) => {
  return (
    <>
      <section className="group-section">
        <div className="container" style={{ padding: 0 }}>
          <div className="group-header group-spacing">
            <h1 className="gr-h1">{category}</h1>
            <p className="gr-pera">{desc}</p>
          </div>
        </div>
      </section>

      <section className="group-section">
        <div className="panel_animation">
          <div
            className="main-group-img the-grp-img"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="group-detail">
              <p className="grp-detail-pera">{image_desc}</p>
                {category === "Le groupe" && (
                  <div
                    className="btn-demande"
                    onClick={() => window.open("contact.php", "_blank")}
                  >
                    <p>Contactez-nous</p>
                    <button className="file-button">
                      <img src={arrow_icon} alt="open-file" />
                    </button>
                  </div>

                //   <RedirectButton    text="Contactez - nous"
                // onClick={() => window.open("contact.php", "_blank")}/>

                )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
