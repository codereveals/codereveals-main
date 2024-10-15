"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = ({ item }) => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <>
      <Link
        href={item.path}
        className={`hover:text-[--secondaryColor] ${
          pathName === item.path && "is_active"
        }`}
      >
        {item.title}
      </Link>
    </>
  );
};

export default NavLinks;
