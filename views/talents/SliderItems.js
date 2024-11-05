import React from "react";

import img1 from "../../assets/img/slider-img.png";
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

import Slider from "./Slider";

const SliderItems = () => {
  const slider_data = [
    {
      title: "Juridique",
      image1: img1,
      image2: icon1,
      description:
        "Le département juridique de Capago assure la conformité de nos activités aux réglementations en vigueur, garantissant ainsi la protection de nos intérêts et de nos partenaires.",
    },
    {
      title: "Finance",
      image1: img2,
      image2: icon2,
      description:
        "Le département finance de Capago assure une gestion efficace des ressources, contribuant ainsi à la stabilité et à la croissance de l'entreprise.",
    },
    {
      title: "IT/SI",
      image1: img3,
      image2: icon3,
      description:
        "Le département IT/SI de Capago veille à la sécurité et à l'efficacité des systèmes informatiques, soutenant ainsi nos opérations à l'échelle mondiale.",
    },
    {
      title: "Ressources Humaines",
      image1: img4,
      image2: icon4,
      description:
        "Le département des ressources humaines de Capago favorise un environnement de travail inclusif et stimulant, propice à l'épanouissement professionnel de chaque collaborateur.",
    },
    {
      title: "Infrastructures",
      image1: img5,
      image2: icon5,
      description: "Le département infrastructures de Capago gère et optimise les installations et équipements nécessaires à nos opérations, assurant ainsi leur efficacité et leur sécurité.",
    },
    {
      title: "Compliance",
      image1: img6,
      image2: icon6,
      description: "Le département compliance de Capago veille au respect des normes et réglementations, garantissant l'intégrité et la transparence de nos activités à travers le monde.",
    },
    {
      title: "Opérations",
      image1: img7,
      image2: icon7,
      description: "Le département des opérations chez Capago assure un traitement professionnel des demandes de visa, garantissant une expérience utilisateur de qualité à chaque demandeur.",
    },
  ];

  return <Slider data={slider_data} />;
};

export default SliderItems;
