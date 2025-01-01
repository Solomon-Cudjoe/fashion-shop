import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const footerLinks = {
    shop: [
      "Men's Product",
      "Women's Product",
      "Winter Edition",
      "Accessories",
      "Discounts",
    ],
    company: ["About US", "Careers", "Investors", "News", "Purpose"],
    support: [
      "Order Status",
      "Shipping & Delivery",
      "Returns",
      "Payment Option",
      "Contact",
    ],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.brandSection}>
          <h2 className={styles.brandTitle}>Fashion Store</h2>
          <p className={styles.brandDescription}>
            Design amazing digital experiences that create more happy in the
            world.
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9165fad3c59d9fe4d717cb37c826a34f8b34799953e757c930c797900b13422?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83"
            alt=""
            className={styles.brandIcon}
          />
        </div>

        <div className={styles.linksContainer}>
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className={styles.linkSection}>
              <h3 className={styles.sectionTitle}>{section}</h3>
              {links.map((link, index) => (
                <Link key={index} className={styles.footerLink}>
                  {link}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.footerDivider} />

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          2023 Fashion Store. All rights reserved.
        </p>
        <div className={styles.socialLinks}>
          {["31", "32", "33", "34"].map((num) => (
            <img
              key={num}
              loading="lazy"
              src={`http://b.io/ext_${num}-`}
              alt=""
              className={styles.socialIcon}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
