import React from "react";
import "./Navbar.css";

const Navbar = ({ onSelectType }) => {
  const handleTypeClick = (type) => {
    onSelectType(type);
  };

  return (
    <div className="navbar-section">
      {[1, 2, 3, 4, 5, 6].map((type) => (
        <button
          className="btn-type"
          key={type}
          onClick={() => handleTypeClick(type)}
        >
          TYPE {type}
        </button>
      ))}
    </div>
  );
};

export default Navbar;
