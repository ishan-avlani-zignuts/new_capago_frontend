import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/img/admin_panel_settings.svg";
import img2 from "../../assets/img/school.svg";
import img3 from "../../assets/img/check_circle.svg";
import Securities from "../../views/solutions/Securities";

const SecuritiesItems = () => {
  const { t } = useTranslation();

  const securities_data = [
    {
      title: t("securities.high_security_standards.title"),
      image: img1,
      description: t("securities.high_security_standards.description"),
    },
    {
      title: t("securities.continuous_training.title"),
      image: img2,
      description: t("securities.continuous_training.description"),
    },
    {
      title: t("securities.compliance.title"),
      image: img3,
      description: t("securities.compliance.description"),
    },
  ];

  return <Securities data={securities_data} />;
};

export default SecuritiesItems;
