import React from "react";
import HeaderImg from "../../images/images.jpg";
function Header() {
  return (
    <div className="py-4 relative h-32 cyan">
      <img
        src={HeaderImg}
        className="absolute inset-0 w-full h-full object-cover"
      alt="" />
    </div>
  );
}

export default Header;

