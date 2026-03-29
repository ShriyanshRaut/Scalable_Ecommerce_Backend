import React from "react";

function Navbar() {
  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      {/* Logo */}
      <h1 className="text-xl font-bold tracking-wide">
        🛒 E-Shop
      </h1>

      {/* Links */}
      <div className="flex gap-6 items-center">
        <button className="hover:text-gray-300">Home</button>
        <button className="hover:text-gray-300">Cart</button>
        <button className="hover:text-gray-300">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;