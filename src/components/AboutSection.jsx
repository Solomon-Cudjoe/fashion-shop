import styles from "../styles/FashionStore.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle} style={{ color: "black" }}>
          Welcome to <b>BagCode</b>
        </h1>
        <span className={styles.welcomeSubtitle} style={{ color: "black" }}>
          where fashion meets excellence! Explore our stunning collection of
          traditional and modern attire, designed to make you stand out
        </span>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutTitle}>
            <h1 style={{ color: "black" }}>About Us</h1>
          </div>
          <div className={styles.missionContainer}>
            <h2 className={styles.missionTitle} style={{ color: "black" }}>
              Our Mission
            </h2>
            {/* <h3 className={styles.missionQuestion} style={{ color: "black" }}>
              Are you looking for cloths?
            </h3> */}
            <p
              className={styles.missionText}
              style={{
                color: "black",
                textAlign: "justify",
                marginLeft: "20px",
              }}
            >
              Our mission at BagCode is to bridge the gap between traditional
              and modern fashion, creating timeless pieces that inspire
              confidence, self-expression, and a deep connection to our African
              roots.
            </p>
            <div className={styles["social-icons"]}>
              <FaTwitter size={24} />
              <FaFacebook size={24} color="blue" />
              <FaInstagram size={24} />
              <FaYoutube size={24} color="red" />
            </div>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4rem",
          }}
        >
          <div className={styles["store-info"]}>
            <div>
              <video
                controls
                autoPlay
                muted
                loop
                src={require("../WhatsApp Video 2025-02-11 at 16.28.28_fdfbc137.mp4")}
              ></video>
            </div>
            <div>
              <span style={{ color: "black", textAlign: "justify" }}>
                From everyday essentials to the latest trends, BagCode offers a
                curated collection to suit your style. Our commitment is to
                provide you with great fashion and exceptional customer service.
              </span>
            </div>
          </div>
        </section>

        <section className={styles.locationSection}>
          <h2 className={styles.locationTitle} style={{ color: "black" }}>
            Location & Accessibility
          </h2>
          <p className={styles.locationText} style={{ color: "black" }}>
            We're located at University of Ghana Commonwealth Hall
          </p>
        </section>
      </main>
    </div>
  );
};
export default AboutSection;
