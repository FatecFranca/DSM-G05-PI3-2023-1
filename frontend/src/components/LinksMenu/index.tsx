import React from "react";
import { IconType } from "react-icons";

interface LinksMenuProps {
  title: string;
  icon: React.ReactNode;
}

const LinksMenu: React.FC<LinksMenuProps> = ({ title, icon }) => {
  return (
    <li className="flex flex-row items-end cursor-pointer mt-6">
      <div className="mr-3">{icon}</div>
      <div className="text-whiteMain text-xl">{title}</div>
    </li>
  );
};

export default LinksMenu;
