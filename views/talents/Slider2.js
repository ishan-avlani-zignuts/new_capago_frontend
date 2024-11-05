import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import slider from "../../assets/img/slider-img.png";
import arrow_icon from "../../assets/img/arrow-icon.svg";
import img2 from "../../assets/img/slider-img-2.png";
import img3 from "../../assets/img/slider-img-3.png";
import img4 from "../../assets/img/slider-img-4.png";
import img5 from "../../assets/img/slider-img-5.png";
import img6 from "../../assets/img/slider-img-6.png";
import img7 from "../../assets/img/slider-img-7.png";
import icon1 from "../../assets/img/slider-icon-1.svg";
import icon2 from "../../assets/img/slider-icon-2.svg";
import icon3 from "../../assets/img/slider-icon-3.svg";
import icon4 from "../../assets/img/slider-icon-4.svg";
import icon5 from "../../assets/img/slider-icon-5.svg";
import icon6 from "../../assets/img/slider-icon-6.svg";
import icon7 from "../../assets/img/slider-icon-7.svg";
import { motion } from "framer-motion";
export default function SimpleSlider() {
  //  const sliderRef = useRef(null);

  //  useEffect(() => {
  //    const handleWheel = (e) => {
  //      e.preventDefault();
  //      if (sliderRef.current) {
  //        if (e.deltaY < 0) {
  //          sliderRef.current.slickNext();
  //        } else {
  //          sliderRef.current.slickPrev();
  //        }
  //      }
  //    };

  //    const sliderElement = document.querySelector(".professions_slider");
  //    if (sliderElement) {
  //      sliderElement.addEventListener("wheel", handleWheel, { passive: false });
  //    }

  //    return () => {
  //      if (sliderElement) {
  //        sliderElement.removeEventListener("wheel", handleWheel);
  //      }
  //    };
  //  }, []);
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   adaptiveHeight: true,
  //   // vertical: true,
  //   // verticalSwiping: true,
  // };


//new and best
  // useEffect(() => {
  //   const handleWheel = (e) => {
  //     e.preventDefault();
  //     if (sliderRef.current) {
  //       if (e.deltaY < 0) {
  //         sliderRef.current.slickNext();
  //       } else {
  //         sliderRef.current.slickPrev();
  //       }
  //     }
  //   };

  //   const sliderElement = document.querySelector(".professions_slider");
  //   if (sliderElement) {
  //     sliderElement.addEventListener("wheel", handleWheel, { passive: false });
  //   }

  //   return () => {
  //     if (sliderElement) {
  //       sliderElement.removeEventListener("wheel", handleWheel);
  //     }
  //   };
  // }, []);


  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 800,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     adaptiveHeight: true,
  //     fade: true, // Enable fade transition
  //     cssEase: "cubic-bezier(0.4, 0, 0.2, 1)", // Add smooth ease-in-out transition
  //     beforeChange: (current, next) => {
  //       // Add any additional transition logic here if needed
  //       const currentSlide = document.querySelector(
  //         `.slick-slide[data-index="${current}"]`
  //       );
  //       const nextSlide = document.querySelector(
  //         `.slick-slide[data-index="${next}"]`
  //       );

  //       if (currentSlide) {
  //         currentSlide.style.opacity = 0;
  //       }
  //       if (nextSlide) {
  //         nextSlide.style.opacity = 1;
  //       }
  //     },
  //   };




  //more bestest

  const sliderRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (sliderRef.current) {
        if (e.deltaY < 0) {
          sliderRef.current.slickNext();
        } else {
          sliderRef.current.slickPrev();
        }
      }
    };

    const sliderElement = document.querySelector(".professions_slider");
    if (sliderElement) {
      sliderElement.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (sliderElement) {
        sliderElement.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    beforeChange: (current, next) => {
      const currentSlide = document.querySelector(
        `.slick-slide[data-index="${current}"]`
      );
      const nextSlide = document.querySelector(
        `.slick-slide[data-index="${next}"]`
      );

      if (currentSlide) {
        currentSlide.style.transform = "translateY(20px)";
        currentSlide.style.opacity = 0;
        currentSlide.style.transition = "all 0.3s ease-out";
      }
      if (nextSlide) {
        nextSlide.style.transform = "translateY(0)";
        nextSlide.style.opacity = 1;
        nextSlide.style.transition = "all 0.3s ease-out 0.3s";
      }
    },
  };

  const slideContentClass = "flex-column flex-md-row ishan";
  const slideMotionProps = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3, delay: 0.3 },
  };


  return (
    <div className="container">
      <Slider {...settings} className="professions_slider" ref={sliderRef}>
        <div>
          {/* <div
            style={{ display: "flex" }}
            className="flex-column flex-md-row ishan"
          > */}
          <motion.div
            style={{ display: "flex" }}
            className={slideContentClass}
            {...slideMotionProps}
          >
            <div className="slider-item-content">
              <h1>
                Découvrez <span> nos métiers</span>
              </h1>
              <p>
                Grâce à notre équipe dédiée et à nos procédures optimisées, nous
                nous efforçons de rendre le processus de demande de visa aussi
                simple et transparent que possible pour nos clients. Notre
                objectif est de faciliter les voyages à destination des pays que
                nous représentons, en assurant un service fiable et efficace à
                chaque étape.
              </p>
              {/* <div className="slider-content">
                <div className="slider-icon-content">
                  <img src={icon1} alt="slider-icon-1" />
                  <h3>Juridique</h3>
                </div>
                <p>
                  Le département juridique de Capago assure la conformité de nos
                  activités aux réglementations en vigueur, garantissant ainsi
                  la protection de nos intérêts et de nos partenaires.
                </p>
              </div> */}
              <motion.div
                className="slider-content"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="slider-icon-content">
                  <img src={icon1} alt="slider-icon-1" />
                  <h3>Juridique</h3>
                </div>
                <p>
                  Le département juridique de Capago assure la conformité de nos
                  activités aux réglementations en vigueur, garantissant ainsi
                  la protection de nos intérêts et de nos partenaires.
                </p>
              </motion.div>
              <div className="slider-btn-container">
                <div
                  className="redirect-btn"
                  onClick={() =>
                    window.open("https://capago.teamtailor.com/", "_blank")
                  }
                >
                  <h4>En savoir plus</h4>
                  <button>
                    <img src={arrow_icon} alt="arrow-icon" />
                  </button>
                </div>
                {/* <RedirectButton
                    text="En savoir plus"
                    link="https://capago.teamtailor.com/"
                  /> */}
              </div>
            </div>
            <div className="slider-image-wrapper">
              <img className="slider-image" src={slider} alt="SliderImg" />
            </div>
            {/* </div> */}
          </motion.div>
        </div>

        <div>
          <div
            style={{ display: "flex" }}
            className="flex-column flex-md-row ishan"
          >
            <div className="slider-item-content">
              <h1>
                Découvrez <span> nos métiers</span>
              </h1>
              <p>
                Grâce à notre équipe dédiée et à nos procédures optimisées, nous
                nous efforçons de rendre le processus de demande de visa aussi
                simple et transparent que possible pour nos clients. Notre
                objectif est de faciliter les voyages à destination des pays que
                nous représentons, en assurant un service fiable et efficace à
                chaque étape.
              </p>
              <div className="slider-content">
                <div className="slider-icon-content">
                  <img src={icon2} alt="slider-icon-1" />
                  <h3>Finance</h3>
                </div>
                <p>
                  Le département finance de Capago assure une gestion efficace
                  des ressources, contribuant ainsi à la stabilité et à la
                  croissance de l'entreprise.
                </p>
              </div>
              <div className="slider-btn-container">
                <div
                  className="redirect-btn"
                  onClick={() =>
                    window.open("https://capago.teamtailor.com/", "_blank")
                  }
                >
                  <h4>En savoir plus</h4>
                  <button>
                    <img src={arrow_icon} alt="arrow-icon" />
                  </button>
                </div>
                {/* <RedirectButton
                    text="En savoir plus"
                    link="https://capago.teamtailor.com/"
                  /> */}
              </div>
            </div>
            <div className="slider-image-wrapper">
              <img
                className="slider-image"
                src={img2}
                alt="SliderImg"
                height={"100%"}
              />
            </div>
          </div>
        </div>

        <div>
          <div
            style={{ display: "flex" }}
            className="flex-column flex-md-row ishan"
          >
            <div className="slider-item-content">
              <h1>
                Découvrez <span> nos métiers</span>
              </h1>
              <p>
                Grâce à notre équipe dédiée et à nos procédures optimisées, nous
                nous efforçons de rendre le processus de demande de visa aussi
                simple et transparent que possible pour nos clients. Notre
                objectif est de faciliter les voyages à destination des pays que
                nous représentons, en assurant un service fiable et efficace à
                chaque étape.
              </p>
              <div className="slider-content">
                <div className="slider-icon-content">
                  <img src={icon3} alt="slider-icon-1" />
                  <h3>IT/SI</h3>
                </div>
                <p>
                  Le département IT/SI de Capago veille à la sécurité et à
                  l'efficacité des systèmes informatiques, soutenant ainsi nos
                  opérations à l'échelle mondiale.
                </p>
              </div>
              <div className="slider-btn-container">
                <div
                  className="redirect-btn"
                  onClick={() =>
                    window.open("https://capago.teamtailor.com/", "_blank")
                  }
                >
                  <h4>En savoir plus</h4>
                  <button>
                    <img src={arrow_icon} alt="arrow-icon" />
                  </button>
                </div>

                {/* <RedirectButton
                    text="En savoir plus"
                    link="https://capago.teamtailor.com/"
                  /> */}
              </div>
            </div>
            <div className="slider-image-wrapper">
              <img className="slider-image" src={img3} alt="SliderImg" />
            </div>
          </div>
        </div>

        <div>
          <div
            style={{ display: "flex" }}
            className="flex-column flex-md-row œ"
          >
            <div className="slider-item-content">
              <h1>
                Découvrez <span> nos métiers</span>
              </h1>
              <p>
                Grâce à notre équipe dédiée et à nos procédures optimisées, nous
                nous efforçons de rendre le processus de demande de visa aussi
                simple et transparent que possible pour nos clients. Notre
                objectif est de faciliter les voyages à destination des pays que
                nous représentons, en assurant un service fiable et efficace à
                chaque étape.
              </p>
              <div className="slider-content">
                <div className="slider-icon-content">
                  <img src={icon4} alt="slider-icon-1" />
                  <h3>Ressources Humaines</h3>
                </div>
                <p
                // style={{ minHeight: "185px" }}
                >
                  Le département des ressources humaines de Capago favorise un
                  environnement de travail inclusif et stimulant, propice à
                  l'épanouissement professionnel de chaque collaborateur.
                </p>
              </div>
              <div className="slider-btn-container">
                <div
                  className="redirect-btn"
                  onClick={() =>
                    window.open("https://capago.teamtailor.com/", "_blank")
                  }
                >
                  <h4>En savoir plus</h4>
                  <button>
                    <img src={arrow_icon} alt="arrow-icon" />
                  </button>
                </div>
                {/* <RedirectButton
                    text="En savoir plus"
                    link="https://capago.teamtailor.com/"
                  /> */}
              </div>
            </div>
            <div className="slider-image-wrapper">
              <img className="slider-image" src={img4} alt="SliderImg" />
            </div>
          </div>
        </div>

        <div>
          <div
            style={{ display: "flex" }}
            className="flex-column flex-md-row ishan"
          >
            <div className="slider-item-content">
              <h1>
                Découvrez <span> nos métiers</span>
              </h1>
              <p>
                Grâce à notre équipe dédiée et à nos procédures optimisées, nous
                nous efforçons de rendre le processus de demande de visa aussi
                simple et transparent que possible pour nos clients. Notre
                objectif est de faciliter les voyages à destination des pays que
                nous représentons, en assurant un service fiable et efficace à
                chaque étape.
              </p>
              <div className="slider-content">
                <div className="slider-icon-content">
                  <img src={icon5} alt="slider-icon-1" />
                  <h3>Infrastructures</h3>
                </div>
                <p>
                  Le département infrastructures de Capago gère et optimise les
                  installations et équipements nécessaires à nos opérations,
                  assurant ainsi leur efficacité et leur sécurité.
                </p>
              </div>
              <div className="slider-btn-container">
                <div
                  className="redirect-btn"
                  onClick={() =>
                    window.open("https://capago.teamtailor.com/", "_blank")
                  }
                >
                  <h4>En savoir plus</h4>
                  <button>
                    <img src={arrow_icon} alt="arrow-icon" />
                  </button>
                </div>

                {/* <RedirectButton
                    text="En savoir plus"
                    link="https://capago.teamtailor.com/"
                  /> */}
              </div>
            </div>
            <div className="slider-image-wrapper">
              <img className="slider-image" src={img5} alt="SliderImg" />
            </div>
          </div>
        </div>

        <div>
          <div
            style={{ display: "flex" }}
            className="flex-column flex-md-row ishan"
          >
            <div className="slider-item-content">
              <h1>
                Découvrez <span> nos métiers</span>
              </h1>
              <p>
                Grâce à notre équipe dédiée et à nos procédures optimisées, nous
                nous efforçons de rendre le processus de demande de visa aussi
                simple et transparent que possible pour nos clients. Notre
                objectif est de faciliter les voyages à destination des pays que
                nous représentons, en assurant un service fiable et efficace à
                chaque étape.
              </p>
              <div className="slider-content">
                <div className="slider-icon-content">
                  <img src={icon6} alt="slider-icon-1" />
                  <h3>Compliance</h3>
                </div>
                <p>
                  Le département compliance de Capago veille au respect des
                  normes et réglementations, garantissant l'intégrité et la
                  transparence de nos activités à travers le monde.
                </p>
              </div>
              <div className="slider-btn-container">
                <div
                  className="redirect-btn"
                  onClick={() =>
                    window.open("https://capago.teamtailor.com/", "_blank")
                  }
                >
                  <h4>En savoir plus</h4>
                  <button>
                    <img src={arrow_icon} alt="arrow-icon" />
                  </button>
                </div>
                {/* <RedirectButton
                    text="En savoir plus"
                    link="https://capago.teamtailor.com/"
                  /> */}
              </div>
            </div>
            <div className="slider-image-wrapper">
              <img className="slider-image" src={img6} alt="SliderImg" />
            </div>
          </div>
        </div>

        <div>
          <div
            style={{ display: "flex" }}
            className="flex-column flex-md-row ishan"
          >
            <div className="slider-item-content">
              <h1>
                Découvrez <span> nos métiers</span>
              </h1>
              <p>
                Grâce à notre équipe dédiée et à nos procédures optimisées, nous
                nous efforçons de rendre le processus de demande de visa aussi
                simple et transparent que possible pour nos clients. Notre
                objectif est de faciliter les voyages à destination des pays que
                nous représentons, en assurant un service fiable et efficace à
                chaque étape.
              </p>
              <div className="slider-content">
                <div className="slider-icon-content">
                  <img src={icon7} alt="slider-icon-1" />
                  <h3>Opérations</h3>
                </div>
                <p>
                  Le département des opérations chez Capago assure un traitement
                  professionnel des demandes de visa, garantissant une
                  expérience utilisateur de qualité à chaque demandeur.
                </p>
              </div>
              <div className="slider-btn-container">
                <div
                  className="redirect-btn"
                  onClick={() =>
                    window.open("https://capago.teamtailor.com/", "_blank")
                  }
                >
                  <h4>En savoir plus</h4>
                  <button>
                    <img src={arrow_icon} alt="arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
            <div className="slider-image-wrapper">
              <img className="slider-image" src={img7} alt="SliderImg" />
            </div>
          </div>
        </div>
      </Slider>

      <div className="swiper-pagination"></div>
    </div>
  );
}
