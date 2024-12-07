import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#FDEFE1] text-black py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left side: Business name/logo and description */}
          <div className="text-center md:text-left">
          <img src="/logo.png" className="h-[100px] " alt="" />
          <p className="text-yellow-800 font-bold text-4xl mb-3">Glow Craft</p>
            {/* <p className="text-sm">
              Discover the benefits of natural skincare with our Thanaka Face Pack. Made with care, for healthy skin.
            </p> */}
          </div>
          
          {/* Middle: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-400">Home</a></li>
              <li><a href="/about" className="hover:text-green-400">About</a></li>
              <li><a href="/products" className="hover:text-green-400">Products</a></li>
              <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>
          
          {/* Right side: Social Media */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-blue-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-600" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-blue-700" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-sm">&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
