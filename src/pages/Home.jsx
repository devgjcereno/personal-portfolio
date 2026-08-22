import React from 'react'
import logo from "../assets/logo.png";
import scrolldown from "../assets/scroll-down.png";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
const Home = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="h-full w-[90%] bg-[#F5F3EE]">
          {/* This is the navbar section */}
          <div className="w-full h-[60px] flex flex-row justify-between px-[64px] py-[20px]">
            <div className="">
              <p className="color-[#111111] text-[12px] font-bold ">
                GLENN CERENO
              </p>
            </div>
            <div>
              <div className="">
                <ul className="flex justify-center items-center text-[#666666] text-[12px] gap-[35px]">
                  <li>WORK</li>
                  <a href="#about">
                    <li>ABOUT</li>
                  </a>
                  <a href="#projects">
                    <li>PROJECTS</li>
                  </a>
                  <li>CONTACT</li>
                </ul>
              </div>
            </div>
          </div>

          {/* This is the underline */}
          <div className="w-full h-[1px] bg-[#E0E0E0]"></div>

          {/* This is the body section */}
          <div className="w-full h-full bg-[#F5F3EE] flex flex-col gap-[25px] px-[64px] py-[25vh]">
            <img src={logo} alt="" className="w-[160px] h-[115px]" />
            <p className="font-bold text-[56px] text-[#111111] leading-[50px]">
              HELLO, I'M GLENN.
            </p>
            <p className="font-bold text-[56px] text-[#111111] leading-[50px]">
              NICE TO MEET YOU.
            </p>
            <p className="font-regular text-[13px] text-[#777777] w-[430px] leading-[23px]">
              A holistic IT graduate who{" "}
              <b className="text-[#111111]">creates, innovates and builds</b>{" "}
              applications that help society flourish. Pursuing mastery in
              Information Technology, Cybersecurity, and Law.
            </p>

            {/* This is the scrolldown picture */}
            <img
              src={scrolldown}
              alt=""
              className="w-[20px] h-[25px] mt-[50px]"
            />
          </div>
          <section id="about">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="skills">
            <Skills />
          </section>

        </div>

        {/* This is the green section */}

        <div className="w-[10%] h-[100] bg-[#566A2C]"></div>
      </div>
    </>
  )
}

export default Home