import React from "react";

export default function SkillCard({ title, skills }) {
  return (
    <div className="w-[578px] h-[75px] px-[20px] py-[16px] bg-white border-[2px] border-[#E8E8E3] rounded-[10px] shadow-sm flex flex-col justify-center shrink-0">
      <div>
        <p className="text-[#566A2C] text-[12px] font-semibold">{title}</p>
      </div>

      <div className="flex flex-row text-[#555555] text-[13px] gap-[8px] mt-[5px] overflow-hidden whitespace-nowrap">
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <p>{skill}</p>
            {index < skills.length - 1 && <span>·</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
