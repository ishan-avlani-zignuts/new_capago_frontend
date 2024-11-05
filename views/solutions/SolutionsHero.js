import React from "react";
import Hero from "../../components/Hero";
import solution from "../../assets/img/soluction-main.png";
import { useTranslation } from "react-i18next";

const SolutionsHero = () => {
  const { t } = useTranslation();

  const hero_section_data = {
    category: t("solutionsCategory"),
    image: solution,
    desc: t("solutionsDesc"),
    image_desc: t("solutionsImageDesc"),
  };

  return <Hero {...hero_section_data} />;
};

export default SolutionsHero;
