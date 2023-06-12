"use client";

import React, { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import Menu from "../Menu";
import ContextMenu from "@/app/contexts/ContextMenu";
import Link from "next/link";
import { AuthContext } from "@/app/contexts/ContextAuth";

const Header = () => {
  const [menu, setMenu] = useContext<any>(ContextMenu);
  const { signOut } = useContext(AuthContext);

  const handleMenu = () => {
    console.log("entrei ak");
    setMenu(!menu);
  };

  return (
    <header className="bg-blackMain p-4 flex justify-around items-center">
      <Link href="/Home">
        <div className="cursor-pointer">
          <h1 className="text-3xl ">
            <span className="text-yellow">S</span>
            <span className="text-whiteMain">ee</span>
            <span className="text-yellow">M</span>
            <span className="text-whiteMain">y</span>
            <span className="text-yellow">P</span>
            <span className="text-whiteMain">lace</span>
          </h1>
        </div>
      </Link>
      <div className="flex flex-row items-center">
        <input
          className="border-2 p-2 w-96 border-solid border-yellow bg-blackMain rounded-3xl placeholder-whiteMain focus:outline-none text-whiteMain"
          type="text"
          placeholder="Buscar"
        />
        <button className="cursor-pointer">
          <AiOutlineSearch className="text-2xl text-whiteMain -ml-12" />
        </button>
      </div>
      <div className="flex flex-row">
        <div className="mr-12">
          <BsPersonCircle className="text-4xl text-whiteMain" />
        </div>
        <div onClick={handleMenu} className="cursor-pointer">
          <GiHamburgerMenu className="text-4xl text-yellow" />
        </div>
        <div onClick={signOut} className="cursor-pointer absolute right-6">
          <GoSignOut className="text-4xl text-yellow" />
        </div>
      </div>
      {menu == true && <Menu />}
    </header>
  );
};

export default Header;
