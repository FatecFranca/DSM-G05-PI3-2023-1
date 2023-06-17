"use client";

import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { IoMdSettings, IoMdAddCircle } from "react-icons/io";
import ContextMenu from "@/contexts/ContextMenu";
import LinksMenu from "../LinksMenu";

const Menu = () => {
  const [menu, setMenu] = useContext<any>(ContextMenu);
  return (
    <div className="z-50 absolute top-0 right-0  w-1/2 min-h-screen h-auto bg-blackMain transition-all duration-700 animate-in slide-in-from-left">
      <div
        onClick={() => setMenu(false)}
        className="absolute top-4 right-4 cursor-pointer"
      >
        <AiOutlineClose className="text-4xl text-yellow" />
      </div>
      <div className="mt-24 ml-16">
        <ul>
          <LinksMenu
            href=""
            icon={<BsFillPersonFill className="text-3xl text-yellow" />}
            title="Meu perfil"
          />
          <LinksMenu
            href=""
            icon={<IoMdSettings className="text-3xl text-yellow" />}
            title="Configurações"
          />
          <LinksMenu
            href="/Users/Register"
            icon={<IoMdAddCircle className="text-3xl text-yellow" />}
            title="Cadastrar Usuário"
          />
          <LinksMenu
            href="/Realty/Register"
            icon={<IoMdAddCircle className="text-3xl text-yellow" />}
            title="Cadastrar Imóvel"
          />
          <LinksMenu
            href="/Agenda"
            icon={<IoMdAddCircle className="text-3xl text-yellow" />}
            title="Agenda"
          />
        </ul>
      </div>
    </div>
  );
};

export default Menu;
