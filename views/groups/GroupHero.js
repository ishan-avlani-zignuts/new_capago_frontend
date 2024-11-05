import React from "react";
import { useTranslation } from "react-i18next";
import Hero from "../../components/Hero";
import grp from "../../assets/img/group-header.png";

const GroupHero = () => {
  const { t } = useTranslation();

  const hero_section_data = {
    category: t("group_category"),
    image: grp,
    desc: t("group_description"),
    image_desc: t("group_image_description"),
  };

  return <Hero {...hero_section_data} />;
};

export default GroupHero;
