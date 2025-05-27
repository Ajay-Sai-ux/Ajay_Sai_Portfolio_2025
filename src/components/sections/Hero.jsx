import Image from "next/image";
import styles from "@/styles/Hero.module.css";
import SecondaryButton from "../layout/SecondaryButton";
import PrimaryButton from "../layout/PrimaryButton";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <Image
          src="/favicon.ico"
          alt="Profile"
          width={60}
          height={60}
          className={styles.profileImage}
        />
        <div className={styles.textContent}>
          <h1 className={styles.title}>
            <span className={styles.primaryText}>I’m Ajay Sai — </span>
            <i>product designer at</i>
            <br />
            <span className={styles.primaryText}>Worktual.</span>
            <span className={styles.accentGreen}> ✦ </span>
            <span className={styles.primaryText}> I design,</span>
            <span className={styles.primaryText}> animate,</span>
            <br />
            <span className={styles.primaryText}> write,</span>
            <span className={styles.primaryText}> and code</span>
            <span className={styles.accentOrange}> ✽</span>


            {/* <span className={styles.primaryText}> developer by code,</span>
            <br />
            <span className={styles.primaryText}> designer by heart.</span> */}
          </h1>
          
          <div className={styles.buttonGroup}>
            <PrimaryButton />
            <SecondaryButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;