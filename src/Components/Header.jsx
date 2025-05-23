import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors">
            About
          </Link>
          <Link to="/howitworks" className="text-gray-600 hover:text-blue-500 transition-colors">
            How It Works
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-500 transition-colors">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition-colors">
            Contact
          </Link>
          <Link to="/donation" className="text-white bg-yellow-500 hover:bg-yellow-600 font-bold py-2 px-4 rounded transition-colors">
            Donate
          </Link>
        </nav>

        {/* Mobile Hamburger Button (visible only on mobile) */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu (slides in from right) */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-64 bg-white shadow-xl transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex flex-col space-y-4">
          <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors py-2">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors py-2">
            About
          </Link>
          <Link to="/how-it-works" className="text-gray-600 hover:text-blue-500 transition-colors py-2">
            How It Works
          </Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-500 transition-colors py-2">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition-colors py-2">
            Contact
          </Link>
          <Link to="/donation" className="text-white bg-yellow-500 hover:bg-yellow-600 font-bold py-2 px-4 rounded transition-colors text-center">
            Donate
          </Link>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;