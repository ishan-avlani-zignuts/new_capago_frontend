import React from "react";
import { Helmet } from "react-helmet";
import Mission from "../views/groups/Mission";
import Culture from "../views/groups/Culture";
import Career from "../views/groups/Career";
import EngagementItem from "../components/groups/EngagementItem";
import GroupHero from "../views/groups/GroupHero";
import { useTranslation } from "react-i18next";
const Groups = () => {
  const { t } = useTranslation();
  return (
    <main className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("group_helmet.title")}</title>
        <meta name="description" content={t("group_helmet.description")} />
        <meta name="keywords" content={t("group_helmet.keywords")} />
      </Helmet>
      <GroupHero />
      <Mission />
      <EngagementItem />
      <Culture />
      <Career />
    </main>
  );
};

export default Groups;
