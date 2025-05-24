import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex py-8 justify-between">
      <h1>Auction Forge</h1>
      <nav>
        <ul className="flex gap-4 list-none">
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
