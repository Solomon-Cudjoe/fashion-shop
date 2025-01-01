import React from "react";
import styles from "../styles/Contact.module.css";

export const ContactInfo = ({ icon, text }) => (
  <div className={styles.contactInfoItem}>
    <img loading="lazy" src={icon} alt="" className={styles.contactIcon} />
    <div className={styles.contactText}>{text}</div>
  </div>
);
