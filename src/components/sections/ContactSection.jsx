import styles from "@/styles/ContactSection.module.css";

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <h2 className={styles.contactHeading}>
          Want to get in touch? I’d love to connect with you!
        </h2>
        <div className={styles.contactLinks}>
          <a href="mailto:ajaysaiux@gmail.com" className={styles.link}>Email →</a>
          <a href="https://linkedin.com/in/ajaysai-ux" target="_blank" className={styles.link}>LinkedIn →</a>
          <a href="https://instagram.com/ajay_sai_b" target="_blank" className={styles.link}>Instagram →</a>
          <a href="https://medium.com/@ajaysaiux" target="_blank" className={styles.link}>Medium →</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
