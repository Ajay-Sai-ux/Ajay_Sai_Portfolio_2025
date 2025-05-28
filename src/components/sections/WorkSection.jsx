import styles from "@/styles/WorkSection.module.css";
import Fullcard from "@/components/layout/Fullcard";
import React from "react";

const WorkSection = ({link}) => {
  return (
    <section className={styles.work}>
      <div className={styles.workHeaderContainer}>
        <div className={styles.workHeader}>Selected work ↓</div>
        <div className={styles.workSubHeader}>Reach out for more detials</div>
      </div>

      <div className={styles.workWrapper}>
        <Fullcard
          link={"https://medium.com/@ajaysaiux/why-86-of-users-struggled-with-voice-setup-and-how-were-solving-it-f4c44f542bf9"}
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
