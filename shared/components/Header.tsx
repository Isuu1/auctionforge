import React from "react";

//Styles
import styles from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Auction Forge</h1>
      <nav>
        <ul className={styles.menu}>
          <Link href="/" passHref>
            <li>Home</li>
          </Link>
          <Link href="/shop" passHref>
            <li>Template shop</li>
          </Link>
          <Link href="/creator" passHref>
            <li>Create listing</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
