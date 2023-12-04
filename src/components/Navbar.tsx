import React from "react";
import Logo from "../../public/Vybz Logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Vybz Logo" />
      </div>
      <div className="library">
        <span>Books Library</span>
      </div>
    </div>
  );
};

export default Navbar;
