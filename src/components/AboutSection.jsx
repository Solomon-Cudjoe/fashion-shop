import React from "react";
import styles from "../styles/AboutSection.module.css";

const AboutSection = () => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e42b892d8ccb48f7df38e8c522fd39d9fdcf05ede24af10a47a9e18e92e125c6?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/45f6b826aa226ea3cd3a3d6b8ee15ab07ed05e95f9ae0e8f02cb1ead18599803?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2cfb73dd0e089216fbf019909c20a555d9bf83a273ec279075ffefca909f417d?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      alt: "Social media icon",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f8ab47bc9295a931f4bff158ab21c5a2a9ed63b3f21486152b387b384960522b?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      alt: "Social media icon",
    },
  ];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.aboutTitle}>About Us</h2>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.missionContent}>
          <span className={styles.missionLabel}>Our Mission</span>
          <h3 className={styles.missionTitle}>Are you looking for cloths?</h3>
          <p className={styles.missionText}>
            If you're looking to do more than watch a simple video, we're here
            for it! Our manager, Tess, eagerly awaits assisting you with any of
            your needs. So send us your ideas about events, brand partnerships,
            or if you have any feedback for us. We can't wait to hear from you!
          </p>
          <div className={styles.socialIcons}>
            {socialIcons.map((icon, index) => (
              <img
                key={index}
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                className={styles.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
