import styles from "@/styles/ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2 className={styles.contactHeading}>
          Want to get in touch? I’d love to connect with you!
        </h2>
        <div className={styles.contactLinks}>
          <a href="mailto:youremail@example.com" className={styles.link}>Email →</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className={styles.link}>LinkedIn →</a>
          <a href="https://instagram.com/yourprofile" target="_blank" className={styles.link}>Instagram →</a>
          <a href="https://medium.com/@yourprofile" target="_blank" className={styles.link}>Medium →</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
