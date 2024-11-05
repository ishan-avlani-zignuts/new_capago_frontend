import React from "react";
import img1 from "../../assets/img/user.svg";
import img2 from "../../assets/img/flag.svg";
import img3 from "../../assets/img/boy.svg";
import img4 from "../../assets/img/woman.svg";
import Figures from "./Figures";

const FiguresItems = () => {
  const services_data = [
    {
      title: "Nombre de collaborateurs",
      image: img1,
      count: "230",
      description: "collaborateurs",
    },
    {
      title: "Nombre de nationalités",
      image: img2,
      count: "24",
      description: "nationalités différentes",
    },
    {
      title: "Pourcentage masculin",
      image: img3,
      count: "44%",
      description: "Hommes",
    },
    {
      title: "Pourcentage Féminin",
      image: img4,
      count: "56%",
      description: "Femmes",
    },
  ];

  return <Figures data={services_data} />;
};

export default FiguresItems;
