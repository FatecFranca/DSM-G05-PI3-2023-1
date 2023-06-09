"use client";

import React, { useContext, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoSignOut } from "react-icons/go";
import Menu from "../Menu";
import ContextMenu from "@/contexts/ContextMenu";
import Link from "next/link";
import { AuthContext } from "@/contexts/ContextAuth";
import { usePathname } from "next/navigation";
import ContextSearch from "@/contexts/ContextSearch";

const Header = () => {
  const [search, setSearch] = useContext<any>(ContextSearch);
  const [menu, setMenu] = useContext<any>(ContextMenu);
  const { signOut } = useContext(AuthContext);
  const pathname = usePathname();
  const handleMenu = () => {
    setMenu(!menu);
  };
  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Faça algo com o valor digitado, por exemplo:
    console.log("Valor digitado:", search);
    // Ou você pode salvá-lo em algum estado global ou em um banco de dados.
  };
  return pathname !== "/SignIn" ? (
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

      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center">
          <input
            className="border-2 p-2 w-96 border-solid border-yellow bg-blackMain rounded-3xl placeholder-whiteMain focus:outline-none text-whiteMain"
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={handleChange}
          />
          <button type="submit" className="cursor-pointer">
            <AiOutlineSearch className="text-2xl text-whiteMain -ml-12" />
          </button>
        </div>
      </form>

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
  ) : (
    ""
  );
};

export default Header;
