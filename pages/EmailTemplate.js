import React from "react";
import { useTranslation } from "react-i18next";
const EmailTemplate = ({ object, name, email, message }) => {
  const { t } = useTranslation();
  const styles = {
    body: {
      margin: 0,
      padding: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "orangered",
    },
    table: {
      borderCollapse: "collapse",
    },
    responsiveTable: {
      width: "600px",
      "@media screen and (max-width: 600px)": {
        width: "100%",
      },
    },
    header: {
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      fontSize: "24px",
      fontWeight: "bold",
    },
    content: {
      padding: "20px",
      color: "#333333",
      fontFamily: "Arial, sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
    },
    h1: {
      fontSize: "24px",
      fontWeight: "bold",
      margin: 0,
    },
    p: {
      margin: "20px 0 30px",
      lineHeight: 1.5,
    },
  };

  return (
    <div style={styles.body}>
      <table
        border="0"
        cellPadding="0"
        cellSpacing="0"
        width="100%"
        style={styles.table}
      >
        <tbody>
          <tr>
            <td bgcolor="orangered" align="center" style={{ padding: "20px" }}>
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                style={styles.responsiveTable}
              >
                <tbody>
                  <tr>
                    <td style={styles.header}>{t("emailTemplate.header")}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td
              bgcolor="#ffffff"
              align="center"
              style={{ padding: "40px 20px" }}
            >
              <table
                border="0"
                cellPadding="0"
                cellSpacing="0"
                style={styles.responsiveTable}
              >
                <tbody>
                  <tr>
                    <td style={styles.content}>
                      <h1 style={styles.h1}>
                        {t("emailTemplate.inquiryDetails")}
                      </h1>
                      <p style={styles.p}>
                        {t("emailTemplate.object")}t : {object}
                      </p>
                      <p style={styles.p}>
                        {" "}
                        {t("emailTemplate.name")}: {name}
                      </p>
                      <p style={styles.p}>
                        {t("emailTemplate.email")} : {email}
                      </p>
                      <p style={styles.p}>
                        {t("emailTemplate.message")} : {message}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmailTemplate;
