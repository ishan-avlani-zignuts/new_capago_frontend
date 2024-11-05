import React from "react";
import { useTranslation } from "react-i18next";
import Engagement from "../../views/groups/Engagement";

const EngagementItem = () => {
  const { t } = useTranslation();

  const engagement_data = [
    {
      title: t("engagement_title_1"),
      description: t("engagement_description_1"),
    },
    {
      title: t("engagement_title_2"),
      description: t("engagement_description_2"),
    },
    {
      title: t("engagement_title_3"),
      description: t("engagement_description_3"),
    },
    {
      title: t("engagement_title_4"),
      description: t("engagement_description_4"),
    },
  ];

  return <Engagement data={engagement_data} />;
};

export default EngagementItem;
