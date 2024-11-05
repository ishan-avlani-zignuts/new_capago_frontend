import React from "react";

const Recruitment = () => {
  return (
    <section>
      <div className="container">
        <div className="recruitment-processes">
          <h2>Nos processus de recrutement</h2>
          <p>
            Chez Capago, nous nous engageons à assurer un processus de
            recrutement transparent et efficace. Nous comprenons l'importance de
            la clarté et de l'équité dans chaque étape de la recherche de
            nouveaux talents. Ainsi, nous veillons à ce que nos candidats soient
            informés à chaque phase de leur candidature, depuis la soumission de
            leur CV jusqu'à la décision finale. Notre objectif est de créer une
            expérience positive et respectueuse, en fournissant des retours
            constructifs et en maintenant une communication ouverte.
          </p>

          <p>
            {" "}
            En utilisant des outils modernes comme la plateforme Team Tailor,
            nous garantissons que notre processus est non seulement rapide et
            structuré, mais aussi accessible et équitable pour tous les
            candidats, peu importe leur localisation géographique.
          </p>
        </div>
        <div className="block-list">
          <div className="rp-block">
            <div className="process-block">
              <div className="number">01</div>
              <div className="process-title">
                <h4>Réception des Candidatures</h4>
                <p>
                  Toutes nos offres d'emploi sont disponibles sur notre
                  plateforme Team Tailor. It is not possible to have it 
                </p>
              </div>
            </div>
          </div>
          <div className="rp-block">
            <div className="process-block">
              <div className="number">02</div>
              <div className="process-title">
                <h4>Première évaluation </h4>
                <p>
                  À réception des candidatures, nous procédons à une première
                  évaluation depuis Team Tailor.
                </p>
              </div>
            </div>
          </div>
          <div className="rp-block">
            <div className="process-block">
              <div className="number">03</div>
              <div className="process-title">
                <h4>Entretien avec un recruteur</h4>
                <p>
                  Les candidats retenus sont invités à un premier entretien avec
                  l'un de nos recruteurs.
                </p>
              </div>
            </div>
          </div>
          <div className="rp-block">
            <div className="process-block">
              <div className="number">04</div>
              <div className="process-title">
                <h4>Entretien avec le manager</h4>
                <p>
                  Si le premier entretien est concluant, un second entretien est
                  organisé avec le manager
                </p>
              </div>
            </div>
          </div>
          <div className="rp-block">
            <div className="process-block">
              <div className="number">05</div>
              <div className="process-title">
                <h4>Retour sur candidature</h4>
                <p>
                  À l'issue des entretiens, nous nous engageons à fournir un
                  retour à l'ensemble des candidats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;