import { useState } from "react";
import Logo from "../assets/6860545013e0a63ba8cb7e94004971f7.png"; // Correct path to your logo image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#121618] w-full h-[100px] flex justify-between items-center px-6 lg:px-16   z-50">
      <div className="flex flex-col items-center">
        <img src={Logo} alt="Logo" className="h-11 hover:opacity-80 transition-all" />
        
        
      </div>

      <div className="hidden lg:flex space-x-6 kelly">
        <a
          href="#"
          className="text-[#F5F5F5] text-[16px] font-oswald font-normal leading-[23.71px] tracking-wide text-left hover:text-[#0796EF] transition-all"
        >
          HOME
        </a>
        <a
          href="#"
          className="text-[#0796EF] text-[16px] font-oswald font-normal leading-[23.71px] tracking-wide text-left hover:text-[#F5F5F5] transition-all"
        >
          MENU
        </a>

        <a
          href="#"
          className="text-[#F5F5F5] text-[16px] font-oswald font-normal leading-[23.71px] tracking-wide text-left hover:text-[#0796EF] transition-all"
        >
         MAKE A RESERVATION
        </a>
        <a
          href="#"
          className="text-[#F5F5F5] text-[16px] font-oswald font-normal leading-[23.71px] tracking-wide text-left hover:text-[#0796EF] transition-all"
        >
          CONTACT US
        </a>
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden absolute top-[100px] left-0 w-full bg-[#121618] text-white p-4 space-y-4">
          <a
            href="#"
            className="text-[#F5F5F5] text-[16px] font-oswald font-normal leading-[23.71px] tracking-wide text-left hover:text-[#0796EF] transition-all"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#F5F5F5] text-[16px] font-oswald font-normal leading-[23.71px] tracking-wide text-left hover:text-[#0796EF] transition-all"
          >
            Menu
          </a>
          <a
            href="#"
            className="bg-[#F5F5F5] px-4 py-2 rounded text-black"
          >
            Reservation
          </a>
          <a
            href="#"
            className="bg-[#F5F5F5] px-4 py-2 rounded text-black"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
