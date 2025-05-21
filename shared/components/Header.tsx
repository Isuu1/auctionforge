import React from "react";

//Styles
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Auction Forge</h1>
      <nav>
        <ul className={styles.menu}>
          <li>Home</li>
          <li>Template shop</li>
          <li>Create listing</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
