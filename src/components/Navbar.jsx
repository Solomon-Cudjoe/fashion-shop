import React from "react";
import styles from "../styles/NavBar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logo}>F</div>
      <div className={styles.navLinks}>
        <div className={styles.home}>Home</div>
        <div className={styles.linkGroup}>
          <div className={styles.aboutUs}>About us</div>
          <div className={styles.features}>Features</div>
          <div className={styles.contactUs}>Contact us</div>
        </div>
        <div className={styles.search} role="search" tabIndex="0">
          Search
        </div>
      </div>
    </nav>
  );
};
