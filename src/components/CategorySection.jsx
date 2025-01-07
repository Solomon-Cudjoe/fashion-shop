import React from "react";

import { ProductCard } from "./ProductCard";
import styles from "../styles/CategorySection.module.css";

const CategorySection = ({ title, products }) => {
  return (
    <section className={styles.section}>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
          />
        ))}
      </div>
    </section>
  );
};
export default CategorySection;
