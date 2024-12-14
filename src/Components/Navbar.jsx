import React, { useState } from "react";
import { FaBars, FaTimes, FaBell } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#e69f9f] text-black">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left side: Logo or Business Name */}
        <div className="text-2xl font-bold text-yellow-300">
          <img src="/logo.png" className="h-[60px] " alt="" />
        </div>

        {/* Middle: Routes (visible on large screens) */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-700">
            Home
          </a>
          <a href="/about" className="hover:text-gray-700">
            About
          </a>
          <a href="/products" className="hover:text-gray-700">
            Products
          </a>
          <a href="/contact" className="hover:text-gray-700">
            Contact
          </a>
        </div>

        {/* Right side: Login and Notification (visible on large screens) */}
        <div className="hidden md:flex space-x-6 items-center">
          <button className="hover:text-gray-700">Login</button>
          <FaBell className="text-xl hover:text-gray-700" />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-green-700">
          <a href="/" className="block py-2 px-4 hover:bg-green-600">
            Home
          </a>
          <a href="/about" className="block py-2 px-4 hover:bg-green-600">
            About
          </a>
          <a href="/products" className="block py-2 px-4 hover:bg-green-600">
            Products
          </a>
          <a href="/contact" className="block py-2 px-4 hover:bg-green-600">
            Contact
          </a>
          <button className="block w-full text-left py-2 px-4 hover:bg-green-600">
            Login
          </button>
          <div className="block py-2 px-4 hover:bg-green-600">
            <FaBell className="text-xl" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
