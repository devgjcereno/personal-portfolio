import React from "react";
import cardpicture from "../assets/card-picture.png";
const Projects = () => {
  return <>
    <p className="text-[11px] font-bold text-[#111111] pl-[64px]">PROJECTS</p>

    {/* Project cards */}
    <div className="w-[388px] h-[333px] pl-[64px] mt-[25px]" >

      <div>
        {/* Cards Picture */}
        <div className="">
          <img src={cardpicture} alt="" className="w-auto h-auto rounded-t-[10px]" />
        </div>
        <div className="rounded-b-[10px] bg-[#FAFAF7] px-[15px] py-[10px]">
          {/* Card Title */}
          <div className="flex flex-row justify-between ">
            <p className="font-bold text-[#111111] text-[13px]">Nursense</p>
            <p className="text-[#999999] font-semibold text-[13px]">BACKEND</p>
          </div>
          {/* Card Description */}
          <div className="text-[#777777] text-[11px] font-regular mt-[10px]">
            An Android application for nursing students to review their knowledge, test their understanding, and prepare for board examinations and certifications.
          </div>
          {/* Card Tech Skills */}
          <div className="w-auto h-[21px] items-center flex mt-[5px]">
            <div className="border-[2px] border-[#E0DFDA] bg-[#FAFAF7] rounded-[5px]">
              <p className="text-[10px] text-[#666666] px-[5px]">Flutter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default Projects;
