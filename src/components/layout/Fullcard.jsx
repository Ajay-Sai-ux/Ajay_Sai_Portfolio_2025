import React from "react";
import styles from "@/styles/Fullcard.module.css";
import Image from "next/image";
import Link from "next/link";

const Fullcard = ({ src, alt, width, height, link }) => {
  return (
    <Link
      href={link}
      className={styles.projectEntry}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={styles.projectHeader}>
        <div className={styles.projectTitleGroup}>
          <div className={styles.projectTitle}>
            <h2>
              Worktual CCaaS
            </h2>
            <Image src="/rightarrow.svg" alt="" width={32} height={32} />
          </div>
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
    </Link>
  );
};

export default Fullcard;
