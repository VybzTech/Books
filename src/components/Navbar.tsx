import React from "react";
import Logo from "/Vybz Logo.png";

const Navbar = () => {
  return (
    <div className="navbar w-full py-5 px-10 flex items-center justify-between">
      <div className="logo w-10">
        <img src={Logo} alt="Vybz Logo" />
      </div>
      <div className="library ">
        <span>Books Library</span>
        <ul>
          <li>Harry potter</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
