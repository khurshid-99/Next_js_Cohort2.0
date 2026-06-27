import Link from "next/link";
import React from "react";

const AuthNav = () => {
  return (
    <nav className="flex gap-5">
      <Link href={"/"}>App</Link>
      <Link href={"/authlayout/login"}>Login</Link>
      <Link href={"/authlayout/register"}>Register</Link>
    </nav>
  );
};

export default AuthNav;
