import styles from "@/styles/PrimaryButton.module.css";

const PrimaryButton = () => {
  return (
    <a className={styles.Button} href="https://drive.google.com/file/d/1FvBnt5XxOM2INyHzRgkYxLbyXBUNqXQj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
      Download resume
    </a>
  );
};

export default PrimaryButton;
