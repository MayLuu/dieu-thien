import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import styles from "./contact.module.css";
import PlaceIcon from "@mui/icons-material/Place";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import EmailIcon from "@mui/icons-material/Email";

const ContactPage = () => {
  const t = useTranslations();

  return (
    <div className={'contact ' + styles.contact}>
      <Image
        src={"/images/contact.svg"}
        alt={"logo"}
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
      <div className={'contact-info ' + styles.contactInfo}>
        <div className="column-container">
          <Image
            src={"/images/leave1.svg"}
            width={500}
            height={500}
            alt="leave-background"
            className="leave1-bg"
          />

          <Image
            src={"/images/leave1.svg"}
            width={500}
            height={500}
            alt="leave-background"
            className="leave2-bg"
          />
        </div>

        <h1 className="heading1" style={{ marginBottom: `4rem ` }}>
          {t("general.contactUs")}
        </h1>
        <div className={'contact-row ' + styles.row}>
          <a
            className={styles.column}
            href="https://maps.app.goo.gl/qy7BD4LF6tcTuQHi6"
          >
            <PlaceIcon sx={{ fontSize: 48 }} />
            <h5 className="heading3">{t("general.address")}</h5>
            <p>8 DA1-2, Mỹ Phước, Bến Cát, Bình Dương</p>
          </a>
          <div className={styles.column}>
            <a>
              <SmartphoneIcon sx={{ fontSize: 48 }} />
              <h5 className="heading3"> {t("general.phoneNumber")}</h5>
              <p>085-677-9886</p>
            </a>
          </div>
          <a href="mailto:dieuthien@gmail.com" className={styles.column}>
            <EmailIcon sx={{ fontSize: 48 }} />
            <h5 className="heading3">{t("general.email")}</h5>
            <p>dieuthien@gmail.com</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
