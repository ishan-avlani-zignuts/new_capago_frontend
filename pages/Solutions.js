import React from "react";
import Expertise from "../views/solutions/Expertise";
import ServicesItems from "../components/solutions/ServicesItems";
import SolutionMission from "../views/solutions/SolutionMission";
import SecuritiesItems from "../components/solutions/SecuritiesItems";
import InnovationsItems from "../components/solutions/InnovationItems";
import { Helmet } from "react-helmet";
import SolutionsHero from "../views/solutions/SolutionsHero";

const Solutions = () => {
  return (
    <main className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Solutions - Capago</title>
        <meta
          name="description"
          content="Discover Capago's innovative solutions. Explore our expertise in services, securities, and mission-driven innovations to enhance your experience."
        />
        <meta
          name="keywords"
          content="solutions, expertise, services, securities, innovations, Capago"
        />
      </Helmet>
      <SolutionsHero />
      <Expertise />
      <ServicesItems />
      <SecuritiesItems />
      <SolutionMission />
      <InnovationsItems />
    </main>
  );
};

export default Solutions;
