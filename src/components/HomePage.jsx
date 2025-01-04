import React from "react";
// import { Navbar } from "./components/Navbar";

import TestimonialCard from "../components/TestimonialCard";
import CategorySection from "./CategoriesSection";
import styles from "../styles/HomePage.module.css";

const menCategories = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/448a60d1bfa44fb112235b8cd380f5936401f14d61019624b18ab8104a7c1496?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    title: "Hoodies & Sweetshirt",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/11fce6f31b6de5d478d0892f6c301362622b867d216add1f8b6ddfbf6ee72c20?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    title: "Jeans",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/44786bf5f02aac8e9d52573cb1e088faa3aa1a8dac5d9f5fedad79f4eea8f9bb?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    title: "Activewear",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6827f3fd11aa0d1c7ff4ef96d8d1b574be76bce847837a1afbe482f48c9b12c5?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    title: "Boxers",
  },
];

const womenCategories = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b9c9c85f46c4d68ae5765e6e83f0913066aeece7f60ea40b5ff6c6e6c2d0da6a?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    title: "Hoodies & Sweetshirt",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e04a0df24bdcd2652233ef00bd4c834f8eb8b1a40d8bc3dd6c3830d86c40a181?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    title: "Coats & Parkas",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/53704ee9c86796f7364f2d42e6dcd1176defcb4b33483ff1965cf27914b61739?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    title: "Tees & T-Shirt",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5ee641931cc7200129c0925820184c5e5701f3359d094efa96ac5b434afdc259?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    title: "Boxers",
  },
];

const testimonials = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/176ead3935b695e3eb60274c5c82206c5648a9d68ddd13ee926fc377b57cf496?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    name: "Floyd Miles",
    rating: 5,
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  // ... other testimonials
];

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Banner Section */}
      <section className={styles.banner}>
        {/* ... Banner content ... */}
      </section>

      {/* Categories Sections */}
      <CategorySection title="Categories For Men" products={menCategories} />
      <CategorySection
        title="Categories For Women"
        products={womenCategories}
      />

      {/* Testimonials Section */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};
export default HomePage;
