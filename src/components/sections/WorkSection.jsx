import styles from "@/styles/WorkSection.module.css";
import Fullcard from "@/components/layout/Fullcard";
import React from "react";

const WorkSection = () => {
  return (
    <section className={styles.work}>
      <div className={styles.workHeaderContainer}>
        <div className={styles.workHeader}>Selected work ↓</div>
        <div className={styles.workSubHeader}>Reach out for more detials</div>
      </div>

      <div className={styles.workWrapper}>
        <Fullcard
          src="/CCaaS-Thumbnail.webp"
          alt="Animal"
          width={780}
          height={514}
        />
      </div>
    </section>
  );
};

export default WorkSection;
