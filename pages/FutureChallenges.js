import React from 'react'
import fb from "../assets/img/facebbok.svg"
import share from "../assets/img/share.svg";
import linkedin from "../assets/img/linkedin.svg";
import card1 from "../assets/img/card-1.jpeg"
import { Helmet } from 'react-helmet';
const FutureChallenges = () => {
  return (
    <main className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Future Challenges - Capago</title>
        <meta
          name="description"
          content="Explore the future challenges of digitalizing administrative services and the innovative solutions offered by Capago."
        />
        <meta
          name="keywords"
          content="Capago, digitalization, administrative services, visa applications, future challenges"
        />
      </Helmet>
      <section className="group-section">
        <div className="panel_animation">
          <div className="main-group-img future-grp-img">
            <div className="future-challange">
              <div className="challanges-details">
                <div className="back-button">
                  <button className="arrow-btn">
                    <i className="bi bi-arrow-left"></i>
                  </button>
                  <p className="back-text">Retour</p>
                </div>
                <div className="challange-text">
                  <div className="divider-line"></div>
                  <p>LA DIGITALISATION DES SERVICES ADMINISTRATIFS</p>
                </div>
                <h2 className="future-h2">un enjeu d’avenir ? (e-guichet)</h2>
                <div className="services-button">
                  <button className="service-btn">SERVICES</button>
                  <button className="service-btn">SERVICES</button>
                </div>
                <p className="future-pera">
                  <i className="bi bi-clock-history"></i> Temps de lecture : 5
                  min
                </p>
                <p className="future-pera">
                  Dans un monde de plus en plus globalisé, les voyages
                  internationaux et les échanges culturels sont devenus monnaie
                  courante. Toutefois, le processus de demande de visa peut
                  souvent se révéler fastidieux et stressant pour les voyageurs.{" "}
                </p>
              </div>
              <div className="social-share-btns">
                <button className="soc-btn">
                  <img src={share} alt="share" /> Partager
                </button>
                <button className="soc-btn">
                  <img src={fb} alt="share" />
                </button>
                <button className="soc-btn">
                  <img src={linkedin} alt="share" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="artical-data-values">
            <div className="artical-links">
              <p className="list-name-icon">
                <i className="bi bi-list-ul"></i> Dans cet article{" "}
              </p>
              <div className="black-divider"></div>
              <ul className="tag-ul">
                <li className="tag-li">
                  {" "}
                  <a href="/">La digitalisation des services administratifs</a>
                </li>
                <li className="tag-li">
                  {" "}
                  <a href="/">
                    Amélioration de l'expérience client avec le E-Guichet
                  </a>
                </li>
              </ul>
            </div>
            <div className="artical-detail">
              <p className="artical-main-pera">
                Chez Capago, entreprise française de premier plan dans la
                gestion externalisée des demandes de visa, nous nous efforçons
                de transformer cette expérience en un parcours fluide et
                agréable pour les demandeurs. La digitalisation des services
                administratifs représente non seulement une réponse aux défis
                actuels, mais aussi une vision d’avenir pour une gestion plus
                efficace, transparente et sécurisée des demandes de visa. Grâce
                à l'innovation technologique et à une approche centrée sur
                l'utilisateur, Capago redéfinit les standards de l'industrie en
                simplifiant les procédures et en réduisant les délais, tout en
                maintenant un haut niveau de sécurité et de conformité.
              </p>
              <div className="artical-data">
                <h3 className="artical-h3">
                  La digitalisation des services administratifs: un enjeu
                  d’avenir ?
                </h3>
                <p className="artical-pera">
                  La digitalisation est au cœur de la stratégie de Capago pour
                  améliorer à la fois l'expérience des demandeurs de visa qui
                  sont de plus en plus digitaux, mais aussi l'expérience de nos
                  partenaires gouvernementaux: parcours facilité, temps de
                  traitement optimisé, transfert de données fiables et sécurisé,
                  satisfactions des demandeurs, .... En adoptant des
                  technologies numériques de pointe, Capago simplifie et
                  accélère le processus de demande de visa, offrant ainsi une
                  expérience utilisateur optimisée.
                </p>
                <h4 className="artical-h4">
                  Plateformes de Gestion de rendez-vous
                </h4>
                <p className="artical-pera">
                  L'un des principaux défis pour les demandeurs de visa est la
                  prise de rendez-vous. Capago a développé des systèmes
                  propriétaires de gestion de rendez-vous qui permettent de
                  faciliter ce processus. Nos plateformes offrent une interface
                  intuitive où les utilisateurs peuvent facilement réserver,
                  modifier ou annuler leurs rendez-vous en ligne. Grâce à ces
                  outils, les temps d'attente sont réduits et les demandeurs
                  peuvent planifier leur visite au centre de demande de visa en
                  toute tranquillité.
                </p>
                <p className="artical-pera">
                  Ces systèmes de gestion de rendez-vous intègrent également des
                  fonctionnalités avancées telles que des rappels par e-mail,
                  SMS ou encore via whatsapp, ce qui permet de réduire le risque
                  de no-shows et d'optimiser les flux d'usagers. 
                </p>
                <p className="artical-pera">
                  Capago a également investi dans le développement de portails
                  en ligne innovants pour faciliter l'interaction des demandeurs
                  de visa avec ses services. Ces outils numériques permettent
                  aux utilisateurs de suivre l'évolution de leur demande de visa
                  en temps réel, de recevoir des notifications sur l'état de
                  leur dossier et d'accéder à des informations importantes sur
                  le processus de demande.
                </p>
                <p className="artical-pera">
                  Les portails en ligne de Capago sont conçus pour être
                  user-friendly, avec des interfaces claires et des instructions
                  détaillées à chaque étape. Ils offrent également des
                  ressources pédagogiques, telles que des guides et des FAQ,
                  pour aider les demandeurs à comprendre les exigences et les
                  procédures.
                </p>
              </div>
              <div className="artical-data">
                <h3 className="artical-h3">
                  Amélioration de l'expérience client avec le E-Guichet
                </h3>
                <p className="artical-pera">
                  Depuis 2020, nos efforts pour améliorer l'expérience client
                  ont conduit à l'exploration de la digitalisation du processus
                  de demande de visa. Les études que Capago a menées auprès de
                  milliers de demandeurs, indiquent que le principal point de
                  friction pour les demandeurs se situe dans la préparation de
                  leur dossier avant le rendez-vous.  Un autre moment critique
                  est le passage au centre, où le stress lié à la peur de ne pas
                  présenter les bons documents ou de soumettre des pièces non
                  conformes est particulièrement élevé.  Pour adresser ces
                  enjeux, nous avons créé le service E-Guichet.  Les e-guichet
                  est une véritable innovation numérique qui enrichit
                  l'expérience des demandeurs de visa en leur proposant un
                  parcours digital et asynchrone.
                </p>
                <p className="artical-pera">
                  Pour en arriver au lancement de ce e-guichet, Nos travaux ont
                  commencé par l'optimisation des processus, intégrant la
                  Gestion Électronique des Documents (GED) pour une
                  digitalisation complète, assurant la vérification préalable
                  des documents dématérialisés et la protection maximale des
                  données des utilisateurs en sécurisant les données via un
                  coffre-fort numérique dans lequel chaque document est crypté
                  individuellement avec une clé à usage unique, à laquelle seul
                  Capago a accès.
                </p>
                <p className="artical-pera">
                  La deuxième phase du projet E-guichet a introduit un Portail
                  Digital pour permettre le téléversement de documents,
                  éliminant le besoin de documents papier et permettant que la
                  demande de visa soit faite entièrement en ligne. Depuis, nous
                  nous engageons dans l'amélioration continue des interfaces
                  demandeurs, avec un focus sur la compatibilité mobile, tout en
                  maintenant un téléchargement de documents rapide et efficace
                  grâce à notre expertise technique.
                </p>
                <p className="artical-pera">
                  La troisième phase de l'E-Guichet est axée sur le service
                  client à distance. Notre centre à distance gère les dossiers
                  de façon asynchrone et offre un accompagnement personnalisé
                  grâce à des campagnes d'appels sortants, renforçant ainsi
                  notre engagement envers un service sur mesure par des
                  investissements significatifs en technologies de communication
                  et systèmes CRM. Grâce au portail digital et à une interaction
                  personnalisée avec le demandeur, le e-guichet apporte un
                  service qui répond à un réel besoin des demandeurs, diminuant
                  le recours à des intermédiaires, souvent associés à des offres
                  coûteuses et peu fiables, et prévient ainsi l'utilisation de
                  documents frauduleux parfois fournis par les officines. 
                </p>
                <p className="artical-pera">
                  Notre objectif est de simplifier les démarches
                  administratives, rendant le processus plus direct et
                  transparent. 
                </p>
                <p className="artical-pera">
                  Avec la possibilité de réaliser une demande de visa
                  entièrement en ligne grâce à notre portail digital, nous
                  offrons une solution pratique et accessible. De plus, notre
                  gestion documentaire dématérialisée nous permet de centraliser
                  notre savoir-faire et d'affiner notre expertise, nous rendant
                  ainsi plus agiles et efficaces.
                </p>
                <p className="artical-pera">
                  Capago transforme le processus de demande de visa en une
                  expérience fluide, sécurisée et agréable pour les demandeurs.
                  Ces initiatives ne sont pas seulement des avantages pour les
                  utilisateurs, mais elles renforcent également la position de
                  Capago en tant que leader innovant dans la gestion
                  externalisée des demandes de visa.
                </p>
                <p className="artical-pera">
                  En continuant à innover et à s'adapter aux besoins changeants
                  de nos clients, Capago s'assure de rester à la pointe de
                  l'industrie et de fournir des services de qualité  qui
                  répondent aux attentes des demandeurs de visa et des
                  partenaires gouvernementaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <secion id="future">
        <div className="future">
          <div className="container">
            <div className="find-data-cards">
              <h2 className="find-text">Retrouvez aussi</h2>
              <div className="future-cards">
                <div className="slider-card">
                  <div className="card-img-part">
                    <img src={card1} alt="" />
                    <button className="card-direction-btn">
                      <i className="bi bi-arrow-up-right"></i>
                    </button>
                  </div>
                  <div className="slider-card-details">
                    <h4 className="card-heading">
                      Une culture d'entreprise qui fait la différence !
                    </h4>
                    <p className="card-pera">
                      Notre succès ne repose pas seulement sur nos services,
                      mais sur une culture d'entreprise dynamique et inclusive
                      qui fait la différence.
                    </p>
                  </div>
                  <div className="card-buttons">
                    <button className="ser-btn">SERVICES</button>
                    <button className="ser-btn">SERVICES</button>
                  </div>
                </div>
                <div className="slider-card">
                  <div className="card-img-part">
                    <img src={card1} alt="" />
                    <button className="card-direction-btn">
                      <i className="bi bi-arrow-up-right"></i>
                    </button>
                  </div>
                  <div className="slider-card-details">
                    <h4 className="card-heading">
                      Une culture d'entreprise qui fait la différence !
                    </h4>
                    <p className="card-pera">
                      Notre succès ne repose pas seulement sur nos services,
                      mais sur une culture d'entreprise dynamique et inclusive
                      qui fait la différence.
                    </p>
                  </div>
                  <div className="card-buttons">
                    <button className="ser-btn">SERVICES</button>
                    <button className="ser-btn">SERVICES</button>
                  </div>
                </div>
                <div className="slider-card">
                  <div className="card-img-part">
                    <img src={card1} alt="" />
                    <button className="card-direction-btn">
                      <i className="bi bi-arrow-up-right"></i>
                    </button>
                  </div>
                  <div className="slider-card-details">
                    <h4 className="card-heading">
                      Une culture d'entreprise qui fait la différence !
                    </h4>
                    <p className="card-pera">
                      Notre succès ne repose pas seulement sur nos services,
                      mais sur une culture d'entreprise dynamique et inclusive
                      qui fait la différence.
                    </p>
                  </div>
                  <div className="card-buttons">
                    <button className="ser-btn">SERVICES</button>
                    <button className="ser-btn">SERVICES</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </secion>
    </main>
  );
}

export default FutureChallenges
