import React from "react";
import styles from "../styles/Contact.module.css";

export const SocialLink = ({ icon, username }) => (
  <div className={styles.socialLinkContainer}>
    <img loading="lazy" src={icon} alt="" className={styles.socialIcon} />
    <div className={styles.username}>{username}</div>
  </div>
);
