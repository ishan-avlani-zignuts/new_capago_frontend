import React from "react";
import image from "../assets/img/forward_to_inbox.svg";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation();
  return (
    <main className="main">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta name="keywords" content={t("meta.keywords")} />
      </Helmet>
      <section>
        <div className="contact-us">
          <div className="container">
            <div className="conatct-details">
              <div className="row ">
                <div className="col-12 col-md-6">
                  <div className="detail">
                    <h1 className="need-contact">
                      {t("contacts.needContact")}
                    </h1>
                    <p className="contact-pera">{t("contacts.contactPera")}</p>
                    <div className="black-divider w-50"></div>
                    <div className="head-office">
                      <h4 className="head-h4">{t("contacts.headOffice")}</h4>
                      <div className="office-detail">
                        <h5 className="detail-h5">{t("contacts.paris")}</h5>
                        <p className="detail-pera">+33 971 020 000</p>
                        <p className="detail-pera">contact@capago.eu</p>
                      </div>
                      <div className="office-detail">
                        <h5 className="detail-h5">
                          {t("contacts.pressMedia")}
                        </h5>
                        <p className="detail-pera">communication@capago.eu</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="contact-form">
                    <h3 className="form-header">{t("contacts.formHeader")}</h3>
                    <p className="form-pera">{t("contacts.formPera")}</p>
                    <form action="./send_email.php" method="post">
                      <div className="form">
                        <div className="row g-3">
                          <div className="col-12 col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder={t("contacts.name")}
                              name="first_name"
                              aria-label={t("contacts.name")}
                              required
                            />
                          </div>
                          <div className="col-12 col-sm-6">
                            <input
                              type="text"
                              className="form-control"
                              placeholder={t("contacts.lastName")}
                              name="last_name"
                              aria-label={t("contacts.lastName")}
                              required
                            />
                          </div>
                          <div className="">
                            <input
                              type="email"
                              name="email"
                              className="form-control"
                              id="Email"
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div className="">
                            <input
                              type="text"
                              name="object"
                              className="form-control"
                              id="Objet"
                              placeholder={t("contacts.subject")}
                              required
                            />
                          </div>
                          <div className="">
                            <textarea
                              className="form-control text-message"
                              rows="4"
                              name="message"
                              aria-label={t("contacts.message")}
                              placeholder={t("contacts.message")}
                              required
                            ></textarea>
                          </div>
                          <div className="mb-3">
                            <button
                              type="submit"
                              className="send-btn btn-primary"
                            >
                              {t("contacts.sendButton")}{" "}
                              <span className="forword-mail">
                                <img src={image} alt="" />
                              </span>
                            </button>
                          </div>
                          {/* <?php if (isset($_GET['response'])): ?>
                                                        <p className="email-response"><?php echo htmlspecialchars($_GET['response']); ?></p>
                                                    <?php endif; ?> */}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="visa-center">
          <div className="container">
            <div className="visa-contact">
              <h2 className="visa-heading">
                <span>{t("contacts.visaheading1")}</span>
                <br />
                {t("contacts.visaheading2")}
              </h2>

              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 ">
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">France</h5>
                      <h6 className="office-h6">Paris</h6>
                      <p className="office-pera">+33 971 020 000</p>
                      <p className="office-pera">contact@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Bénin</h5>
                      <h6 className="office-h6">Cotonou</h6>
                      <p className="office-pera">+229 91 30 1111</p>
                      <p className="office-pera">infofrance-bj@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Botswana</h5>
                      <h6 className="office-h6">Gaborone</h6>
                      <p className="office-pera">+27 (0)87 231 0313</p>
                      <p className="office-pera">infofrance-bw@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Burkina Faso</h5>
                      <h6 className="office-h6">Ouagadougou</h6>
                      <p className="office-pera">+226 25 31 80 80</p>
                      <p className="office-pera">infofrance-bf@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Guinée</h5>
                      <h6 className="office-h6">Conakry</h6>
                      <p className="office-pera">+224 62 49 33 333</p>
                      <p className="office-pera">infofrance-gn@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Kuwait</h5>
                      <h6 className="office-h6">Koweït</h6>
                      <p className="office-pera">+965 222 85 785</p>
                      <p className="office-pera">infofrance-kw@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Afrique du sud</h5>
                      <h6 className="office-h6">
                        Sandton / Cape Town / Durban
                      </h6>
                      <p className="office-pera">+27 (0)87 231 0313</p>
                      <p className="office-pera">infofrance-za@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Mali</h5>
                      <h6 className="office-h6">Bamako</h6>
                      <p className="office-pera">+223 44 98 32 60</p>
                      <p className="office-pera">infofrance-ml@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Sierra Leone</h5>
                      <h6 className="office-h6">Free town</h6>
                      <p className="office-pera"></p>
                      <p className="office-pera">infofrance-sl@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Togo</h5>
                      <h6 className="office-h6">Lome</h6>
                      <p className="office-pera">+228 22 23 57 10</p>
                      <p className="office-pera">infofrance-tg@capago.eu</p>
                    </div>
                  </div>
                  <div className="col px-4">
                    <div className="office-detail">
                      <h5 className="office-h5">Azerbaijan</h5>
                      <h6 className="office-h6">Baku</h6>
                      <p className="office-pera">994 012 310 07 10</p>
                      <p className="office-pera">infofrance-az@capago.eu</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
