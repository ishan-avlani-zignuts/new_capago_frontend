import React from "react";
import { useTranslation } from "react-i18next";
import img1 from "../../assets/img/edit_calendar.svg";
import img2 from "../../assets/img/clinical_notes.svg";
import img3 from "../../assets/img/apartment.svg";
import img4 from "../../assets/img/description.svg";
import img5 from "../../assets/img/fingerprint.svg";
import img6 from "../../assets/img/sensor_occupied.svg";
import img7 from "../../assets/img/add_card.svg";
import Services from "../../views/solutions/Services";

const ServicesItems = () => {
  const { t } = useTranslation();

  const services_data = [
    {
      title: t("servicesItems.title1"),
      image: img1,
      description: t("servicesItems.desc1"),
    },
    {
      title: t("servicesItems.title2"),
      image: img2,
      description: t("servicesItems.desc2"),
    },
    {
      title: t("servicesItems.title3"),
      image: img3,
      description: t("servicesItems.desc3"),
    },
    {
      title: t("servicesItems.title4"),
      image: img4,
      description: t("servicesItems.desc4"),
    },
    {
      title: t("servicesItems.title5"),
      image: img5,
      description: t("servicesItems.desc5"),
    },
    {
      title: t("servicesItems.title6"),
      image: img6,
      description: t("servicesItems.desc6"),
    },
    {
      title: t("servicesItems.title7"),
      image: img7,
      description: t("servicesItems.desc7"),
    },
  ];

  return <Services data={services_data} />;
};

export default ServicesItems;
