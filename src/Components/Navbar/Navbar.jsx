import React from "react";
import { icons } from "../../icons";
import Avatar from "../../Assets/Img/Avatar.png";

const Navbar = () => {
  return (
    <div className="relative w-full flex gap-5 justify-between items-center mb-10">
      <div className="flex w-11/12 items-center relative">
        <span className="absolute p-5 cursor-pointer">{icons.search}</span>
        <input className="h-16 pl-10 w-full border-div rounded-md outline-0" type="search" />
      </div>
      <div className="flex items-center gap-2">
        <span className="cursor-pointer">{icons.Mode}</span>
        <span className="cursor-pointer">{icons.Notification}</span>
        <img className="w-10 h-10 cursor-pointer" src={Avatar} alt="avatar" />
      </div>
    </div>
  );
};

export default Navbar;
