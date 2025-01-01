import React from "react";

import { ProductCard } from "./ProductCard";

const CategorySection = ({ title, products }) => {
  return (
    <section>
      <div>
        <div />
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
