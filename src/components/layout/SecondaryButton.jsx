import styles from "@/styles/SecondaryButton.module.css";

const SecondaryButton = () => {
  return (
    <a href="#about" className={styles.Button}>
      More about me ↗
    </a>
  );
};

export default SecondaryButton;
