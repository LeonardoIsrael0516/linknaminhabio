import React from "react";
import { LogIn } from "lucide-react";

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
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <LogIn size={18} />
              <span>Login</span>
            </a>
          </div>
          
          {/* Mobile: Botão de Login */}
          <div className="md:hidden">
            <a
              href="https://linknaminhabio.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center space-x-2"
            >
              <LogIn size={16} />
              <span>Login</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
