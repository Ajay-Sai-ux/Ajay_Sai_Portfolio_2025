import React from "react";
import styles from "@/styles/Header.module.css";

const Header = ({ onWorkClick }) => {

  return (
    <header className={styles.header}>

      <div className={styles.headerContainer}>
        <div className={styles.headerName}>Ajay sai</div>
      </div>

      <nav className={styles.nav}>
        <a onClick={onWorkClick}>Works</a>
        {/* <a href="#about">About (coming soon)</a> */}
      </nav>

    </header>
  );
};

export default Header;