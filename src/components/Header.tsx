import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 bg-white">
        <div className="flex items-center justify-between bg-white">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <img
              src="/lovable-uploads/logo.png"
              alt="Logo"
              className="h-14 w-auto"
            />
          </div>
          
          {/* Botão de Login */}
          <div className="hidden md:block">
            <a
              href="https://linknaminhabio.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Login
            </a>
          </div>
          
          {/* Mobile: Botão de Login */}
          <div className="md:hidden">
            <a
              href="https://linknaminhabio.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
