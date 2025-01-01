// CategorySection.js
const CategorySection = ({ title, products }) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        {products.map((product, index) => (
          <div key={index}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
