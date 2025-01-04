import React from "react";
import { SocialLink } from "./SocialLink";
import { ContactInfo } from "./ContactInfo";

import styles from "../styles/Contact.module.css";

const socialLinks = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d35049f6d76b9146d60a49ae7d005fcdd4e6de05d317799f83146c20677bfac?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    username: "@exampleAcount",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/69868f85cdb08512b4bd7b1cb549b5924fdf00d9b6c6f99e7050c6d468d04b29?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    username: "@exampleAcount",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/594fb23578d642a9e65151ea936fd1d4be3019e62d9c8af8e909056338bb34fe?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    username: "@exampleAcount",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8552ae67d3f5f1e81e96cf76662500cb594d2bfc996270de1ba75697dd12972?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    username: "@exampleAcount",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ecc8707fc1fe55d1eb4a65b4cf33717ec8ef640658b990d006878736fd7f539?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    username: "@exampleAcount",
  },
];

const contactInfo = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c4184eb4636434422c4857815b25874b831a35f943cf784630e6a41be24b69e?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    text: "info@example.com",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/673f735ec05712e331bef83cf616e6bd39052ff326911c2d37d80a3d14c69c28?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    text: "001985512-854",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e545d89138509bd6ceb7bcdcc3ed8060c8fe85da5b0e8f0cc6034bd1c3db44a?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83",
    text: "John Smith 123 Main Street Amsterdam, NH 1000 Netherlands",
  },
];

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
          <div className={styles.contactCard}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/79967b8af85ad4f62539bff9020585f6abc299219d666d5a98a557bddb518fc4?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83"
              alt=""
              className={styles.decorativeIcon}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>Contact Us</h2>
              <div className={styles.contactInfoWrapper}>
                {contactInfo.map((info, index) => (
                  <ContactInfo key={index} {...info} />
                ))}
              </div>
              <div className={styles.socialSection}>
                <h3 className={styles.socialTitle}>Social</h3>
                {socialLinks.map((link, index) => (
                  <SocialLink key={index} {...link} />
                ))}
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
              <label htmlFor="name" className="visually-hidden">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={styles.formInput}
                placeholder="Name"
              />
              <label htmlFor="email" className="visually-hidden">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={styles.formInput}
                placeholder="Email"
              />
              <label htmlFor="message" className="visually-hidden">
                Message
              </label>
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

        <div className={styles.mapSection}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bbff7faaf5bca6365db0ebdfb019257028385dcb6afc57fb8fcb48ae9d04af38?placeholderIfAbsent=true&apiKey=621e179175074866811ad37de5ce7d83"
            alt="Location map"
            className={styles.mapImage}
          />
        </div>
      </div>
    </div>
  );
};
export default Contact;
