import React from "react";
import Logo from "/Vybz Logo.png";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 left-0 w-full py-5 px-10 flex items-center justify-between">
      <div className="logo w-10">
        <img src={Logo} alt="Vybz Logo" />
      </div>
      <div className="library text-white font-serif mt-3 mr-2">
        <span className="bg-[#0a0a0a1a] p-1.5 px-3 rounded rounded-md">Books Library</span>
        <ul>
          <li className=" opacity-50 mt-2 bg-[#0a0a0a1a] p-1.5 px-3 rounded rounded-md">Harry potter</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
