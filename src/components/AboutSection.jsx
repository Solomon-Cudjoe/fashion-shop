import styles from "../styles/FashionStore.module.css";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const AboutSection = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.welcomeSection}>
        <h1 className={styles.welcomeTitle} style={{ color: "black" }}>
          Welcome
        </h1>
        <span className={styles.welcomeSubtitle} style={{ color: "black" }}>
          to Fashion Store, Your Go-To Fashion Destination!
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
            <h3 className={styles.missionQuestion} style={{ color: "black" }}>
              Are you looking for cloths?
            </h3>
            <p className={styles.missionText} style={{ color: "black" }}>
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
              <img
                src={
                  "https://res.cloudinary.com/dkiafrm7z/image/upload/v1738922013/f446addc700c448d86855af3d50a2f97_lfdsll.jpg"
                }
                alt=""
              />
            </div>
            <div>
              <span style={{ color: "black" }}>
                From everyday essentials to the latest trends, [Store Name]
                offers a curated collection to suit your style. Our commitment
                is to provide you with great fashion and exceptional customer
                service.
              </span>
            </div>
          </div>
        </section>

        <section className={styles.locationSection}>
          <h2 className={styles.locationTitle} style={{ color: "black" }}>
            Location & Accessibility
          </h2>
          <p className={styles.locationText} style={{ color: "black" }}>
            We're located at University of Ghana Night market or Visit us
            in-store or shop online for fast and reliable delivery!
          </p>
        </section>
      </main>
    </div>
  );
};
export default AboutSection;
