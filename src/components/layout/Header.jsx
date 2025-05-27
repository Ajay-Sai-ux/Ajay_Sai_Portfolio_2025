import React from "react";
import styles from "@/styles/Header.module.css";

const Header = () => {

  return (
    <header className={styles.header}>

      <div className={styles.headerContainer}>
        <div className={styles.headerName}>Ajay sai</div>
      </div>

      <nav className={styles.nav}>
        <a href="#works">Works</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
      </nav>

    </header>
  );
};

export default Header;
