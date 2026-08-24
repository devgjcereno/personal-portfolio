import React from "react";

export default function ProjectCard({
  image,
  title,
  category,
  description,
  techStack,
}) {
  return (
    <div className="w-[350px] h-auto bg-white border-2 border-[#E8E8E3] rounded-[10px] shadow-sm overflow-hidden flex flex-col justify-between shrink-0">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-[160px] object-cover"
        />

        <div className="px-[15px] py-[12px] bg-[#FAFAF7]">
          <div className="flex flex-row justify-between items-center">
            <p className="font-bold text-[#111111] text-[13px]">{title}</p>
            <p className="text-[#999999] font-semibold text-[11px] tracking-wider">
              {category}
            </p>
          </div>

          <p className="text-[#777777] text-[11px] font-normal mt-[8px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="px-[15px] pb-[12px] bg-[#FAFAF7]">
        <div className="flex flex-wrap gap-[5px]">
          {techStack.map((tech, index) => (
            <div
              key={index}
              className="border-[2px] border-[#E0DFDA] bg-[#FAFAF7] rounded-[5px]"
            >
              <p className="text-[10px] text-[#666666] px-[5px] py-[1px]">
                {tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
