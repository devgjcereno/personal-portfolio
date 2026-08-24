import React from "react";

const Navigation = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#F5F3EE]/95 backdrop-blur-sm w-full h-[70px] flex flex-row justify-between items-center px-[64px] py-[20px]">
        <div>
          <a
            href="#home"
            className="text-[#111111] text-[12px] font-bold tracking-wider hover:opacity-80 transition-opacity"
          >
            GLENN CERENO
          </a>
        </div>
        <div>
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
      </nav>

      {/* Navbar Underline */}
      <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
    </>
  );
};

export default Navigation;
