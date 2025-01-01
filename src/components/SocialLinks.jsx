import React from "react";
import styles from "../styles/SocialLinks.module.css";

const SocialLinks = () => {
  const socialIcons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9ccb6b5da3df4ea2f33cb3e2bdd696150f5e1c13b71e818d944534c78707480?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      alt: "Facebook",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4de7d0e1d9026022e175fe1e5743355f78605405c78dc7138ecc119baa9f0a4f?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      alt: "Twitter",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a83b0e375ec2774573145e561a6c92bf5ff7b43b10272d7775fe7f7d6f156bfe?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      alt: "Instagram",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb6644c527cf51af398bf52ac3b55e7019257ac8c63dbdf7740dfc37317c7f4f?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
      alt: "LinkedIn",
    },
  ];

  return (
    <div className={styles.socialLinks}>
      {socialIcons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt={icon.alt}
          className={styles.socialIcon}
        />
      ))}
    </div>
  );
};

export default SocialLinks;
