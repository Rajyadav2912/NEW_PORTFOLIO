import React from "react";
import { Link } from "react-router-dom";

const ALLButton = ({ text, linkto, icon, page }) => {
  return (
    <button
      className="xl:w-full max-w-fit py-2 xl:px-4 
    px-4 border h-12 text-black lg:text-[1.05rem] text-[1rem] font-bold bg-[#c1ffff] rounded-[50px] mt-5 shadowcon"
    >
      <Link
        to={linkto}
        target={page}
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3"
      >
        {text}
        {icon}
      </Link>
    </button>
  );
};

export default ALLButton;
