import React from "react";
import Logo from "/Vybz Logo.png";

const Navbar = () => {
  return (
    <div className="navbar absolute w-full top-0 left-0 py-4 px-10 flex items-center justify-between">
      <div className="logo w-12">
        <img src={Logo} alt="Vybz Logo" />
      </div>
      <div className="library">
        <span>Books Library</span>
      </div>
    </div>
  );
};

export default Navbar;
