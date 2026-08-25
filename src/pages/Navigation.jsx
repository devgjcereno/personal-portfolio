import React, { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#F5F3EE]/95 backdrop-blur-sm w-full h-[70px] flex flex-row justify-between items-center px-6 sm:px-[64px] py-[20px]">
        <div>
          <a
            href="#home"
            className="text-[#111111] text-[12px] font-bold tracking-wider hover:opacity-80 transition-opacity"
          >
            GLENN CERENO
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <ul className="flex justify-center items-center text-[#666666] text-[12px] gap-[35px] font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-[#111111] transition-colors"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#111111] transition-colors"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-[#111111] transition-colors"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="hover:text-[#111111] transition-colors"
              >
                SKILL
              </a>
            </li>
            <li>
              <a
                href="#work"
                className="hover:text-[#111111] transition-colors"
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-[#111111] transition-colors"
              >
                EDUCATION
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                className="hover:text-[#111111] transition-colors"
              >
                CERTIFICATIONS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-[#111111] transition-colors"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-[#111111] focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-[#F5F3EE] border-b border-[#E0E0E0] shadow-md z-40 py-4 px-6 sm:px-[64px]">
          <ul className="flex flex-col text-[#666666] text-[12px] gap-[20px] font-medium">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="hover:text-[#111111] transition-colors block"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-[#111111] transition-colors block"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMenu}
                className="hover:text-[#111111] transition-colors block"
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={closeMenu}
                className="hover:text-[#111111] transition-colors block"
              >
                SKILL
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={closeMenu}
                className="hover:text-[#111111] transition-colors block"
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#education"
                onClick={closeMenu}
                className="hover:text-[#111111] transition-colors block"
              >
                EDUCATION
              </a>
            </li>
            <li>
              <a
                href="#certifications"
                onClick={closeMenu}
                className="hover:text-[#111111] transition-colors block"
              >
                CERTIFICATIONS
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-[#111111] transition-colors block"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Navbar Underline */}
      <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
    </>
  );
};

export default Navigation;
