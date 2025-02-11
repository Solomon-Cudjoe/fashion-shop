import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// import TestimonialCard from "../components/TestimonialCard";
import CategorySection from "./CategoriesSection";
import styles from "../styles/HomePage.module.css";

const newArrivals = [
  {
    image:
      "https://res.cloudinary.com/dkiafrm7z/image/upload/v1739278767/WhatsApp_Image_2025-02-11_at_12.50.59_a10562c0_yeltmt.jpg",
    title: "Knitted Joggers",
  },
  {
    image:
      "https://res.cloudinary.com/dkiafrm7z/image/upload/v1739278765/WhatsApp_Image_2025-02-11_at_12.50.36_462d0d71_tr8kg9.jpg",
    title: "Full Sleeve",
  },
  {
    image:
      "https://res.cloudinary.com/dkiafrm7z/image/upload/v1739278659/315774606_171958575484322_3034361572100752672_n_murdsq.jpg",
    title: "Activewear",
  },
  {
    image:
      "https://res.cloudinary.com/dkiafrm7z/image/upload/v1739278658/281265144_363270742444302_1168301580833278439_n_vtrjtn.jpg",
    title: "Boxers",
  },
];
const menCategories = [
  {
    image:
      "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313140/photo_94_2024-07-04_13-43-05_tsyiht.jpg",
    title: "Hoodies & Sweetshirt",
  },
  {
    image:
      "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313075/photo_49_2024-07-04_13-43-05_ayqjqn.jpg",
    title: "Hoodies & Sweetshirt",
  },
  {
    image:
      "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313050/photo_28_2024-07-04_13-43-05_ueb8oa.jpg",
    title: "Hoodies & Sweetshirt",
  },
  {
    image:
      "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721313027/photo_12_2024-07-04_13-43-05_rcc4oh.jpg",
    title: "Hoodies & Sweetshirt",
  },
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

// const testimonials = [
//   {
//     image:
//       "https://cdn.builder.io/api/v1/image/assets/TEMP/176ead3935b695e3eb60274c5c82206c5648a9d68ddd13ee926fc377b57cf496?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
//     name: "Floyd Miles",
//     rating: 5,
//     review:
//       "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
//   },
//   // ... other testimonials
// ];

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      {/* Banner Section */}
      <section className={styles.banner}>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          className={styles["carousel-container"]}
        >
          <div>
            <img
              className={styles["carousel-container-image"]}
              src={require("../images/serious-curly-haired-female-buyer-carries-bag-picks-up-yellow-clothes-concentrated-smartphone-poses-near-rack-stylish-clothing-makes-purchase.jpg")}
              alt="ph"
            />
          </div>
          <div>
            <img
              className={styles["carousel-container-image"]}
              src={
                "https://res.cloudinary.com/dkiafrm7z/image/upload/v1721311544/cld-sample.jpg"
              }
              alt="ph"
            />
          </div>
          <div>
            <img
              className={styles["carousel-container-image"]}
              src={require("../images/shopping-technology-people-concept-nervous-curly-female-stylist-poses-near-lot-white-clothes-racks-wears-red-knitted-sweater-uses-mobile-phone.jpg")}
              alt="ph"
            />
          </div>
        </Carousel>
      </section>

      <section className={styles.bannerSection}>
        <div className={styles.left}>
          <div className={styles.info}>
            <h4>Low Price</h4>
            <h3>High Coziness</h3>
            <h5>Up to 50% off</h5>
            <button>Explore Items</button>
          </div>
          <img
            src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922375/e6cbee162e7b4823ad81b5fc7dac1a6a_tghua6.jpg"
            alt=""
          />
        </div>
        <div className={styles.right}>
          <div className={styles.info}>
            <h4>Beyoung Presents</h4>
            <h3>Luxury Meets Comfort</h3>
            <h5>Up to 50% off</h5>
            <button>Explore Items</button>
          </div>
          <img
            src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922164/91dba6e0e401480594fdaea188dfee29_heovcd.jpg"
            alt=""
          />
        </div>
      </section>

      <CategorySection title="Traditional Wears" products={newArrivals} />
      <div className={styles.bigSaveZone}>
        <div className={styles.heading}>
          <span></span>
          <h2>Big Save Zone</h2>
        </div>
        <div className={styles.saveZone}>
          <div className={styles.item1}>
            <div className={styles.description}>
              <h1>Hawaian Shirts</h1>
              <p>Move with style & comfort</p>
              <span>UPTO 50% OFF</span>
            </div>
          </div>
          <div className={styles.item2}>
            <div className={styles.description}>
              <h1>Printed T-Shirt</h1>
              <p>Move with style & comfort</p>
              <span>UPTO 50% OFF</span>
            </div>
          </div>
          <div className={styles.item3}>
            <div className={styles.description}>
              <h1>Cargo Joggers</h1>
              <p>Move with style & comfort</p>
              <span>UPTO 50% OFF</span>
            </div>
          </div>
        </div>
        <div className={styles.saveZoneBig}>
          <div className={styles.item4}>
            <div className={styles.description}>
              <h1>Urban Shirts</h1>
              <p>Live In Confort</p>
              <span>FLAT 60% OFF</span>
            </div>
          </div>
          <div className={styles.item5}>
            <div className={styles.description}>
              <h1>Oversized T-Shirts</h1>
              <p>Street Style Icon</p>
              <span>FLAT 60% OFF</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.imageSection}>
        <img
          src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922035/8c0fa5c38dbd4bf58c30f2a0c1474c75_l6m2uz.jpg"
          alt=""
        />
      </div>

      {/* Categories Sections */}
      <CategorySection title="Categories For Men" products={menCategories} />
      <CategorySection
        title="Categories For Women"
        products={womenCategories}
      />

      <section className={styles.brandSection}>
        <h1> Available Top Brands Deal</h1>
        <div className={styles.brandsContainer}>
          <div className={styles.brand}>
            <img
              src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738927749/nike_h06x71.png"
              alt=""
            />
          </div>
          <div className={styles.brand}>
            <img
              src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738927749/H_M_phnumy.png"
              alt=""
            />
          </div>
          <div className={styles.brand}>
            <img
              src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738927749/levis_uog2xe.png"
              alt=""
            />
          </div>
          <div className={styles.brand}>
            <img
              src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738927749/us_polo_udhdbr.png"
              alt=""
            />
          </div>
          <div className={styles.brand}>
            <img
              src="https://res.cloudinary.com/dkiafrm7z/image/upload/v1738927748/puma_ac1543.jpg"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className={styles.testimonials}>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section> */}
    </div>
  );
};
export default HomePage;
