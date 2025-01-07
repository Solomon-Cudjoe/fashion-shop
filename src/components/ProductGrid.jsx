import React from "react";
import { ProductCard } from "./ProductCard";
import styles from "../styles/ProductGrid.module.css";

export const ProductGrid = ({ title, products }) => {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.categoryTitle}>{title}</h2>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            brand={product.brand}
            type={product.type}
          />
        ))}
      </div>
    </section>
  );
};
