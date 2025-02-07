import React from "react";

import { ProductGrid } from "../components/ProductGrid";

import styles from "../styles/ProductGrid.module.css";

const productCategories = {
  shirts: [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/73dd2caa2605e5b3a87bac74f9ec5d1cc4bd0bb5e2d5b77c4d0602fd22ba8b70?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      brand: "Levis Dri- FIT",
      type: "Men's T-shirt",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7c43a3a6b60f6a5dfc99b07f0b6efb6df360151dd7b133d209aee9ba43e45691?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      brand: "Levis Dri- FIT",
      type: "Men's T-shirt",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f6d7f16a4aee20afcd39bb9bb213f06ef0431fe8449d80a3783bce42738fc491?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      brand: "H&M regular fit",
      type: "Men's T-shirt",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/29d2951ea0da8595000f4cfecd68127cea74c205478a7acf5d6353efa5e74f8a?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      brand: "Jack & Jones Re",
      type: "Men's T-shirt",
    },
  ],
  hoodies: [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/79ee2797a9184669b3c649162ac8856ba163e20a6118e2bf68f15637ba99603a?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      brand: "Bottega veneta",
      type: "Women Exclusive Series",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b0fbc881eff33ed40a10e01f93b5333c96e0727d209221ab1690322b1ac2b2e4?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      brand: "John Lewis",
      type: "Any Day Collections",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/410a7a982d597388287e07a28b3772389eb3e181faa8b6c6874869d699f19075?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      brand: "Premium Collection",
      type: "Designer Hoodie",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ffb5db091c52f5599a58b88d24c5031f409463c0df101bdc0400e14384d13906?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      brand: "Jack & Jones Re",
      type: "Men's Hoodie",
    },
  ],
  shoes: [
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313172/photo_10_2024-07-04_13-44-12_w4shsf.jpg",
      brand: "Bottega veneta",
      type: "Women Exclusive Series",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313191/photo_19_2024-07-04_13-44-12_fb7hdx.jpg",
      brand: "John Lewis",
      type: "Any Day Collections",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313130/photo_84_2024-07-04_13-43-05_xqesuu.jpg",
      brand: "Premium Collection",
      type: "Designer Hoodie",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313180/photo_14_2024-07-04_13-44-12_gj68q5.jpg",
      brand: "Jack & Jones Re",
      type: "Men's Hoodie",
    },
  ],
  accessories: [
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313346/photo_63_2024-07-04_13-44-12_fivu58.jpg",
      brand: "Bottega veneta",
      type: "Women Exclusive Series",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313152/photo_97_2024-07-04_13-43-05_puha32.jpg",
      brand: "John Lewis",
      type: "Any Day Collections",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313107/photo_72_2024-07-04_13-43-05_u49t5u.jpg",
      brand: "Premium Collection",
      type: "Designer Hoodie",
    },
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ffb5db091c52f5599a58b88d24c5031f409463c0df101bdc0400e14384d13906?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      brand: "Jack & Jones Re",
      type: "Men's Hoodie",
    },
  ],
  trousers: [
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313083/photo_56_2024-07-04_13-43-05_tmvsik.jpg",
      brand: "Bottega veneta",
      type: "Women Exclusive Series",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313075/photo_50_2024-07-04_13-43-05_c8rfwg.jpg",
      brand: "John Lewis",
      type: "Any Day Collections",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313058/photo_35_2024-07-04_13-43-05_srkgph.jpg",
      brand: "Premium Collection",
      type: "Designer Hoodie",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313036/photo_17_2024-07-04_13-43-05_xq5q3f.jpg",
      brand: "Jack & Jones Re",
      type: "Men's Hoodie",
    },
  ],
};

const Features = () => {
  return (
    <div className={styles.storeContainer}>
      <header className={styles.hero}>
        <p className={styles.heroTagline}>
          Experience fashion like never before
        </p>
        <h1 className={styles.heroTitle}>
          Elevate Your Style With Fashion Store: Where Fashion Meets Passion
        </h1>
        <p className={styles.heroDescription}>
          Discover a world of fashion-forward trends, curated collections, and
          timeless pieces that inspire. Unleash your inner fashionista and
          embark on a journey of confidence, elegance and impeccable style.
        </p>
      </header>

      <section className={styles.collections}>
        <h1 style={{ fontSize: "32px", textTransform: "capitalize" }}>
          Explore our latest collections for you
        </h1>
      </section>

      <section className={styles.featuredSection}>
        <h2 className={styles.sectionTitle}>Featured</h2>
        {Object.entries(productCategories).map(([category, products]) => (
          <ProductGrid
            key={category}
            title={category.toUpperCase()}
            products={products}
          />
        ))}
      </section>

      <section className={styles.promoSection}>
        <div className={styles.promoContent}>
          <h2 className={styles.promoTitle}>Save 50% this Holiday season</h2>
          <p className={styles.promoDescription}>
            It's time to revamp your fashion game without breaking the bank!
            Dive into our exclusive 50% off sale and discover unbearable deals
            on the most coveted styles.
          </p>
          <button className={styles.promoButton}>Shop Now</button>
        </div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/316f010bd50a3545c88d54e8297273af87dff5875395a362784e3add755ca111?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83"
          alt="Holiday season promotion"
          className={styles.promoImage}
          loading="lazy"
        />
      </section>
    </div>
  );
};

export default Features;
