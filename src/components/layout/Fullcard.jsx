import React from "react";
import styles from "@/styles/Fullcard.module.css";
import Image from "next/image";

const Fullcard = ({ src, alt, width, height}) => {

  return (
    <div className={styles.projectEntry}>
        <div className={styles.projectHeader}>

          <div className={styles.projectTitleGroup}>
            <div className={styles.projectTitle}>Worktual Contact Center</div>
            <div className={styles.projectDate}>Sept 2024 - Jan 2025</div>
          </div>

          <div className={styles.projectDescription}>
            <div className={styles.projectSummary}>
              Optimized the voice configuration to help consumer and enterprise
              users find what they need quickly, confidently, and intuitively
            </div>
          </div>

        </div>
        
        <div className={styles.projectImageWrapper}>
          <Image
            className={styles.projectImage}
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        </div>
    </div>
  );
};

export default Fullcard;
