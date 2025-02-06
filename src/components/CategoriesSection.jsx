import styles from "../styles/CategorySection.module.css";
const CategorySection = ({ title, products }) => {
  return (
    <div className={styles.section}>
      <section>
        <div className={styles.heading}>
          <span></span>
          <h2>{title}</h2>
        </div>

        <div>
          {products.map((product, index) => (
            <div key={index}>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "400px" }}
              />
              <p>{product.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategorySection;
