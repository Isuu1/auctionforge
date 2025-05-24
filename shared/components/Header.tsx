import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="p-8 bg-gray-900 fixed left-0 right-0">
      <div className="m-auto flex justify-between md:w-[90%] lg:w-[80%] xl:w-[70%]">
        <Link href="/">
          <h1 className="text-xl">Auction Forge</h1>
        </Link>
        <nav>
          <ul className="flex gap-4 list-none">
            <Link href="/" passHref>
              <li className="text-lg transition-all hover:text-yellow-500">
                Home
              </li>
            </Link>
            <Link href="/shop" passHref>
              <li className="text-lg transition-all hover:text-yellow-500">
                Template shop
              </li>
            </Link>
            <Link href="/creator" passHref>
              <li className="text-lg transition-all hover:text-yellow-500">
                Create listing
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
