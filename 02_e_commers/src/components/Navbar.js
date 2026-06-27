import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ToggleTheme";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-8 ">
      <h1>E-Commer</h1>
      <ul className="flex items-center gap-5 ">
        <Link href={"/layout/home"}>Home</Link>
        <Link href={"/layout/products"}>Products</Link>
      </ul>
      <ul className="flex items-center gap-5 ">
        <ModeToggle />
        <li>Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
