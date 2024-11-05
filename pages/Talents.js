import React from "react";
import { Helmet } from "react-helmet";
import CorporateCulture from "../views/talents/CorporateCulture";
import FiguresItems from "../views/talents/FiguresItems";
import Values from "../views/talents/Values";
import Recruitment from "../views/talents/Recruitment";
import Join from "../views/talents/Join";
import Career from "../views/talents/Career";
import SimpleSlider from "../views/talents/Slider2";
import TalentsHero from "../views/talents/Hero";

const Talents = () => {
  return (
    <main className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Talents - Join Our Team</title>
        <meta
          name="description"
          content="Explore career opportunities, discover our corporate culture, and join our team to achieve your career goals. We value talent and innovation."
        />
        <meta
          name="keywords"
          content="talents, careers, corporate culture, recruitment, join our team"
        />
      </Helmet>
      <TalentsHero/>
      <CorporateCulture />
      <FiguresItems />
      <Values />
      <SimpleSlider />
      <Recruitment />
      <Join />
      <Career />
    </main>
  );
};

export default Talents;
