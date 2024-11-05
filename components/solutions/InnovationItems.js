import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/img/lab_profile.svg";
import img2 from "../../assets/img/groups_2.svg";
import img3 from "../../assets/img/admin_panel_settings (1).svg";
import Innovations from "../../views/solutions/Innovations";

const InnovationsItems = () => {
  const { t } = useTranslation();

  const innovations_data = [
    {
      title: t("innovations.admin_services.title"),
      image: img1,
      description: t("innovations.admin_services.description"),
    },
    {
      title: t("innovations.user_services.title"),
      image: img2,
      description: t("innovations.user_services.description"),
    },
    {
      title: t("innovations.security_services.title"),
      image: img3,
      description: t("innovations.security_services.description"),
    },
  ];

  return <Innovations data={innovations_data} />;
};

export default InnovationsItems;
