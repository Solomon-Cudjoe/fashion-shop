import React from "react";

import { BannerCard } from "./BannerCard";
import styles from "../styles/CategorySection.module.css";

const SmallBanners = ({ title, products }) => {
  return (
    <section className={styles.section}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {products.map((product, index) => (
          <BannerCard key={index} image={product.image} title={product.title} />
        ))}
      </div>
    </section>
  );
};
export default SmallBanners;
