import React from "react";
import Hero from "../../components/Hero";
import Talents from "../../assets/img/Talents.png";
const TalentsHero = () => {
  const hero_section_data = {
    category: "Talents",
    image: Talents,
    desc: "Chez Capago, notre culture d'entreprise repose sur une conviction profonde : notre véritable richesse réside dans la diversité et le talent de nos équipes. Depuis notre création en 2009, nous nous sommes engagés à offrir des services de la plus haute qualité, en plaçant l'égalité et l'inclusion au cœur de nos pratiques. Découvrez comment notre dimension internationale, notre engagement envers le développement personnel et professionnel de nos collaborateurs, ainsi que notre approche centrée sur le respect et l'excellence, font de Capago une entreprise où chacun peut s'épanouir et contribuer pleinement à notre mission commune.",
    image_desc:
      "Capago est une entreprise spécialisée dans la délégation de service public, et la sous-traitance de la collecte des dossiers de demande de visa..",
  };

  return <Hero {...hero_section_data} />;
};

export default TalentsHero;
