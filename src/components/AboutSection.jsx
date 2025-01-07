import styles from "../styles/FashionStore.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle}>Welcome</h1>
        <span className={styles.welcomeSubtitle}>
          to Fashion Store, Your Go-To Fashion Destination!
        </span>
      </header>

      <main className={styles.mainContent}>
        <section className={styles.aboutSection}>
          <div className={styles.aboutTitle}>
            <h1>About Us</h1>
          </div>
          <div className={styles.missionContainer}>
            <h2 className={styles.missionTitle}>Our Mission</h2>
            <h3 className={styles.missionQuestion}>
              Are you looking for cloths?
            </h3>
            <p className={styles.missionText}>
              If you're looking to do more than watch a simple video, we're here
              for it! Our manager, Tess, eagerly awaits assisting you with any
              of your needs. So send us your ideas about events, brand
              partnerships, or if you have any feedback for us. We can't wait to
              hear from you!
            </p>
            <div className={styles["social-icons"]}>
              <FaTwitter size={24} />
              <FaFacebook size={24} />
              <FaInstagram size={24} />
              <FaYoutube size={24} />
            </div>
          </div>
        </section>

        <section className={styles.locationSection}>
          <h2 className={styles.locationTitle}>Location & Accessibility</h2>
          <p className={styles.locationText}>
            We're located at University of Ghana Night market or Visit us
            in-store or shop online for fast and reliable delivery!
          </p>
        </section>
      </main>
    </div>
  );
};
export default AboutSection;
