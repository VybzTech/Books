import React, { useState } from "react";
import Logo from "/Vybz Logo.png";

const Navbar = () => {
  const [nav, setNav] = useState("Books Library");
  return (
    <div className="navbar absolute top-0 left-0 w-full py-5 px-10 flex items-start justify-between">
      <div className="logo w-10">
        <img src={Logo} alt="Vybz Logo" />
      </div>
      <div className="library text-white font-serif mt-3 mr-2">
        <span className="active trans bg-[#0a0a0a22] p-1.5 px-3 rounded rounded-md hover:cursor-pointer hover:bg-[#0a0a0a33] hover:shadow">
          {nav}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
