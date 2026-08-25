import React from "react";
import logo from "../assets/logo.png";
import scrolldown from "../assets/scroll-down.png";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Work from "./Work.jsx";
import Education from "./Education.jsx";
import Certifications from "./Certifications.jsx";
import Contact from "./Contact.jsx";
import Navigation from "./Navigation.jsx";

const Home = () => {
  return (
    <div className="flex flex-row min-h-screen bg-[#F5F3EE]">
      {/* Main Content Area (90% width) */}
      <div className="w-[90%] bg-[#F5F3EE] flex flex-col relative overflow-hidden">
        {/* Sticky Navbar Section */}
        <Navigation />

        {/* Hero / Home Header Section */}
        <section
          id="home"
          className="w-full bg-[#F5F3EE] flex flex-col gap-[20px] px-6 sm:px-12 lg:px-[64px] py-16 scroll-mt-24"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-[140px] sm:w-[160px] h-[100px] sm:h-[115px] object-contain"
          />
          <h1 className="font-bold text-[36px] sm:text-[46px] lg:text-[56px] text-[#111111] leading-[42px] sm:leading-[50px]">
            HELLO, I'M GLENN.
          </h1>
          <h1 className="font-bold text-[36px] sm:text-[46px] lg:text-[56px] text-[#111111] leading-[42px] sm:leading-[50px]">
            NICE TO MEET YOU.
          </h1>
          <p className="font-normal text-[13px] text-[#777777] w-full max-w-[500px] leading-[23px] mt-2">
            A holistic IT graduate who{" "}
            <strong className="text-[#111111] font-bold">
              creates, innovates and builds
            </strong>{" "}
            applications that help society flourish. Pursuing mastery in
            Information Technology, Cybersecurity, and Law.
          </p>

          {/* Scroll Down Indicator */}
          <img
            src={scrolldown}
            alt="Scroll down"
            className="w-[20px] h-[25px] mt-[20px] opacity-70 hidden sm:block"
          />
        </section>

        {/* Section Divider */}
        <div className="flex items-center w-full justify-center my-4">
          <div className="w-[90%] h-[1px] bg-[#E0E0E0]" />
        </div>

        {/* Sections */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <div className="flex items-center w-full justify-center my-4">
          <div className="w-[90%] h-[1px] bg-[#E0E0E0]" />
        </div>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <div className="flex items-center w-full justify-center my-4">
          <div className="w-[90%] h-[1px] bg-[#E0E0E0]" />
        </div>

        <section id="skills" className="scroll-mt-24">
          <Skills />
        </section>

        <div className="flex items-center w-full justify-center my-4">
          <div className="w-[90%] h-[1px] bg-[#E0E0E0]" />
        </div>

        <section id="work" className="scroll-mt-24">
          <Work />
        </section>

        <div className="flex items-center w-full justify-center my-4">
          <div className="w-[90%] h-[1px] bg-[#E0E0E0]" />
        </div>

        <section id="education" className="scroll-mt-24">
          <Education />
        </section>

        <div className="flex items-center w-full justify-center my-4">
          <div className="w-[90%] h-[1px] bg-[#E0E0E0]" />
        </div>

        <section id="certifications" className="scroll-mt-24">
          <Certifications />
        </section>

        <div className="flex items-center w-full justify-center my-4">
          <div className="w-[90%] h-[1px] bg-[#E0E0E0]" />
        </div>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>

        {/* Footer Section */}
        <footer className="w-full">
          <div className="w-full h-[1px] bg-[#E0E0E0]"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-[64px] py-[30px] text-[11px] text-[#888888] gap-2">
            <p>GLENN CERENO © 2026</p>
            <p>Designed & built with care.</p>
          </div>
        </footer>
      </div>

      {/* Right Side Green Accent Column (10% width) */}
      <div className="w-[10%] bg-[#566A2C] min-h-full"></div>
    </div>
  );
};

export default Home;
