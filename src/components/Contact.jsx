import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactSection}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/522431b4561222719c9ada630b60a4bd22470b7cc136039819fce8fa8c9c9082?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83"
          alt="Banner"
          className={styles.banner}
        />

        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Keep in touch</h1>
          <p className={styles.description}>
            We would love to hear from you and answer any questions you may
            have. You can contact us by filling out the form below, sending us
            an email, or calling us on our phone number. We will get back to you
            as soon as possible. You can also follow us on our social media
            platforms and subscribe to our newsletter to stay updated on our
            latest news and offers. Thank you for your interest and support.
          </p>
        </div>

        <div className={styles.mainContent}>
          <div className={styles.contact}>
            <div className={styles.contactCard}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/79967b8af85ad4f62539bff9020585f6abc299219d666d5a98a557bddb518fc4?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83"
                alt=""
                className={styles.decorativeIcon}
              />
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Contact Us</h2>
                <div className={styles["contact-icons"]}>
                  <div className={styles["contact-icons-info"]}>
                    <FaEnvelope size={24} />
                    <span>example@gmail.com</span>
                  </div>
                  <div className={styles["contact-icons-info"]}>
                    <FaPhone size={24} />
                    <span>0200000000</span>
                  </div>
                  <div className={styles["contact-icons-info"]}>
                    <FaMapMarkerAlt size={24} />
                    <span>University of Ghana, Night Market</span>
                  </div>
                </div>
                <div className={styles["contact-icons"]}>
                  <h3>Social</h3>
                  <div className={styles["contact-icons-info"]}>
                    <FaTwitter size={24} />
                    <span>example@gmail.com</span>
                  </div>
                  <div className={styles["contact-icons-info"]}>
                    <FaFacebook size={24} />
                    <span>example@gmail.com</span>
                  </div>
                  <div className={styles["contact-icons-info"]}>
                    <FaInstagram size={24} />
                    <span>example@gmail.com</span>
                  </div>
                  <div className={styles["contact-icons-info"]}>
                    <FaYoutube size={24} />
                    <span>example@gmail.com</span>
                  </div>
                </div>
                <div className={styles.hoursSection}>
                  <h3 className={styles.hoursTitle}>Hours</h3>
                  <div className={styles.hours}>
                    08:00 - 12.00 Uhr
                    <br />
                    13.00 - 17:00 Uhr
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <form className={styles.contactForm}>
                <h2 className={styles.formTitle}>WRITE TO US</h2>

                <input
                  type="text"
                  id="name"
                  className={styles.formInput}
                  placeholder="Name"
                />

                <input
                  type="email"
                  id="email"
                  className={styles.formInput}
                  placeholder="Email"
                />

                <textarea
                  id="message"
                  className={styles.formTextarea}
                  placeholder="Message"
                />
                <button type="submit" className={styles.submitButton}>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className={styles.mapSection}>
          <iframe
            title="Legon"
            className={styles.mapImage}
            loading="lazy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69436.42762997092!2d-0.2389135374036893!3d5.6082425792308275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c79f4004277%3A0x781bce0112f495b7!2sLegon%20Campus!5e0!3m2!1sen!2sgh!4v1736268794760!5m2!1sen!2sgh"
            width="100px"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Contact;
