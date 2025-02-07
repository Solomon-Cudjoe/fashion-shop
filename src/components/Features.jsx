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
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922013/f5e8f3f2fb834a5b9fd105f18466ca51_hmaqbp.jpg",
      brand: "Bottega veneta",
      type: "Women Exclusive Series",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922180/cd840a5bc9804711b6ffbbc348e6833c_vwgowj.jpg",
      brand: "John Lewis",
      type: "Any Day Collections",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922015/2fbfdb1678f140458d57019a1ab90960_xfvz90.jpg",
      brand: "Premium Collection",
      type: "Designer Hoodie",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922165/4844d50451274d6f831c89fe319ee0d8_rogvmc.jpg",
      brand: "Jack & Jones Re",
      type: "Men's Hoodie",
    },
  ],
  accessories: [
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922165/98ff9c5733dc4f3bb848e309fc944939_btdc4i.jpg",
      brand: "Bottega veneta",
      type: "Women Exclusive Series",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922035/9ac25cd5f57d4495a381c22ed9b95404_m4pfjx.jpg",
      brand: "John Lewis",
      type: "Any Day Collections",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922179/b0248bbeaa7f418385cdbe72172c3beb_ewbmvv.jpg",
      brand: "Premium Collection",
      type: "Designer Hoodie",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922173/a4120c4e1bee4a91939eb7510833f14c_fnm3mu.jpg",
      brand: "Jack & Jones Re",
      type: "Men's Hoodie",
    },
  ],
  trousers: [
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922013/f391c0ab8fa84e5bba99b36b2c0a1f61_t5qlyy.jpg",
      brand: "Bottega veneta",
      type: "Women Exclusive Series",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922015/2c99ea8a4f744c8481c363e3983c1035_zissfm.jpg",
      brand: "John Lewis",
      type: "Any Day Collections",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922180/ba22650a74d24053887b3bb1602f9267_m0fhkh.jpg",
      brand: "Premium Collection",
      type: "Designer Hoodie",
    },
    {
      image:
        "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922180/bd5a441f0d004741a43c26ef5d8d5572_qx3iko.jpg",
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
        <div>
          <div className={styles.elevation}>
            <img
              src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922013/e60022123b3d46ce8d395c212dae1f0a_dxcfjo.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922014/0dff258befd1459d95e2b820240bf374_h15gow.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313058/photo_36_2024-07-04_13-43-05_aemwjb.jpg"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922059/52ac91f030584b05a5c025d167841cb8_kvqbil.jpg"
              alt=""
            />
          </div>
        </div>
      </header>

      <section className={styles.collections}>
        <h1 style={{ fontSize: "32px", textTransform: "capitalize" }}>
          Explore our latest collections for you
        </h1>
        <div className={styles.itemGrid}>
          <div className={`${styles.gridItem} ${styles.item1}`}>
            <h2>Collections For Couples</h2>
            <p>
              Our Collection for Couple Features coordinated designs and
              patterns, allowing couples to showcase their unity through
              fashion.
            </p>
          </div>
          <div className={`${styles.gridItem} ${styles.item2}`}>
            <h2>Leather Watch Collection</h2>
          </div>
          <div className={`${styles.gridItem} ${styles.item3}`}>
            <h2>New tote Bags Collection</h2>
          </div>
          <div className={`${styles.gridItem} ${styles.item4}`}>
            <h2>Sheer Bomber Jacket</h2>
            <p>
              Introducing our stylish and versatile sheer clergy caped bomber
              jacket
            </p>
          </div>
        </div>
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
