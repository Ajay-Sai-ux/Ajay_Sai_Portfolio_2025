import styles from "@/styles/PrimaryButton.module.css";

const PrimaryButton = ({link}) => {
  return (
    <a className={styles.Button} href={link} target="_blank" rel="noopener noreferrer">
      Download resume
    </a>
  );
};

export default PrimaryButton;
