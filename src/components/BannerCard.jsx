import React from "react";
import styles from "../styles/ProductCard.module.css";

export const BannerCard = ({ image, brand, type }) => {
  return (
    <div className={styles.productCard}>
      <img
        loading="lazy"
        src={image}
        alt={`${brand} ${type}`}
        className={styles.productImage}
      />
      <div className={styles.productInfo}>
        <div className={styles.brand}>{brand}</div>
        <div className={styles.type}>{type}</div>
      </div>
    </div>
  );
};
