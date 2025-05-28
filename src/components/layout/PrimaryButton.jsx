import styles from "@/styles/PrimaryButton.module.css";

const PrimaryButton = () => {
  return (
    <a className={styles.Button} href="https://drive.google.com/file/d/1yMJ6Efns-K5P3qRr73r6ig3I5jk1l4GS/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      Download resume
    </a>
  );
};

export default PrimaryButton;
