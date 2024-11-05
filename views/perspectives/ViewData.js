import React from "react";
import img1 from "../../assets/img/perspect-img-1.svg";
import img2 from "../../assets/img/perspect-img-2.svg";
import img3 from "../../assets/img/perspect-img-3.svg";
import img4 from "../../assets/img/perspect-img-4.svg";
import img5 from "../../assets/img/perspect-img-5.svg";
import img6 from "../../assets/img/perspect-img-6.svg";
import img7 from "../../assets/img/perspect-img-7.svg";
import img8 from "../../assets/img/perspect-img-9.svg";
import img9 from "../../assets/img/perspect-img-9.svg";
import Perspectives from "../../pages/Perspectives";

const ViewData = () => {
  const view_data = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
    {
      image: img8,
    },
    {
      image: img8,
    },
    {
      image: img9,
    },
    {
      image: img3,
    },
    {
      image: img2,
    },
    {
      image: img5,
    },
    {
      image: img1,
    },
    {
      image: img6,
    },
    {
      image: img4,
    },
    {
      image: img8,
    },
  ];

  return <Perspectives data={view_data} />;
};

export default ViewData;
