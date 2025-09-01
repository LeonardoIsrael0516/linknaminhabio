import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 bg-white">
        {/* Desktop: logo à esquerda, Mobile: logo centralizada */}
        <div className="flex items-center justify-center md:justify-start bg-white">
          <img
            src="/lovable-uploads/logo.png"
            alt="Logo"
            className="h-14 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
