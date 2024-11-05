import React from "react";
import { Helmet } from "react-helmet";
import Careers from "../views/home/Careers";
import Innovation from "../views/home/Innovation";
import Services from "../views/home/Services";
import Hero from "../views/home/Hero";
import { useTranslation } from "react-i18next";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("home_helmet.homePage.title")}</title>
        <meta
          name="description"
          content={t("home_helmet.homePage.description")}
        />
        <meta name="keywords" content={t("home_helmet.homePage.keywords")} />
      </Helmet>
      <main className="main active-main">
        <div id="random_quotes"></div>
        <Hero />
        <Services />
        <Innovation />
        <Careers />
      </main>
    </div>
  );
};

export default Home;
