import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <h2 className={styles.brandTitle}>BagCode </h2>
          <p className={styles.brandDescription}>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
        </div>

        <div className={styles.linksContainer}>
          <Link to="/">Home</Link>
          <Link to="about">About us</Link>
          <Link to="features">Features</Link>
          <Link to="contact">Contact us</Link>
        </div>
      </div>

      <div className={styles.footerDivider} />

      <div className={styles.footerBottom}>
        <p className={styles.copyright} style={{ color: "white" }}>
          &copy;2025 BagCode Shop. All rights reserved.
        </p>
        <div className={styles.socialLinks}>
          <div className={styles["contact-icons"]}>
            <div className={styles["contact-icons-info"]}>
              <i>
                {" "}
                <FaTwitter size={24} color="white" />
              </i>
            </div>
            <div className={styles["contact-icons-info"]}>
              <i>
                {" "}
                <FaFacebook size={24} color="white" />
              </i>
            </div>
            <div
              className={styles["contact-icons-info"]}
              onClick={() =>
                window.open("https://www.instagram.com/bagcodeofficial/")
              }
            >
              <i>
                <FaInstagram size={24} color="white" />
              </i>
            </div>
            {/* <div className={styles["contact-icons-info"]}>
              <FaYoutube size={24} color="white" />
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
