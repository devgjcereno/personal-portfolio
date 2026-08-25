import React from "react";

export default function SkillCard({ title, skills }) {
  return (
    <div className="w-full max-w-[578px] h-auto min-h-[75px] px-[20px] py-[16px] bg-white border-[2px] border-[#E8E8E3] rounded-[10px] shadow-sm flex flex-col justify-center">
      <div>
        <p className="text-[#566A2C] text-[12px] font-semibold">{title}</p>
      </div>

      <div className="flex flex-wrap text-[#555555] text-[13px] gap-x-[8px] gap-y-[2px] mt-[5px]">
        {skills.map((skill, index) => (
          <React.Fragment key={index}>
            <p className="whitespace-nowrap">{skill}</p>
            {index < skills.length - 1 && (
              <span className="text-neutral-400">·</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
