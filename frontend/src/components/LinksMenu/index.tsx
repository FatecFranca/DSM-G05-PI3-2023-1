import ContextMenu from "@/contexts/ContextMenu";
import Link from "next/link";
import React, { useContext } from "react";

interface LinksMenuProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const LinksMenu: React.FC<LinksMenuProps> = ({ title, icon, href }) => {
  const [menu, setMenu] = useContext<any>(ContextMenu);
  return (
    <Link onClick={() => setMenu(false)} href={href}>
      <li className="flex flex-row items-end cursor-pointer mt-6">
        <div className="mr-3">{icon}</div>
        <div className="text-whiteMain text-xl">{title}</div>
      </li>
    </Link>
  );
};

export default LinksMenu;
