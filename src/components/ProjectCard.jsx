import React from "react";

const ProjectCard = ({ image, title, category, description, techStack }) => {
    return (
        <div className="w-[388px] h-[333px] pl-[64px] mt-[25px]">
            <div>
                {/* Card Picture */}
                <div>
                    <img src={image} alt={title} className="w-full h-[160px] object-cover rounded-t-[10px]" />
                </div>
                <div className="rounded-b-[10px] bg-[#FAFAF7] px-[15px] py-[10px] border-[2px] border-t-0 border-[#E8E8E3]">
                    {/* Card Title & Category */}
                    <div className="flex flex-row justify-between items-center">
                        <p className="font-bold text-[#111111] text-[13px]">{title}</p>
                        <p className="text-[#999999] font-semibold text-[13px]">{category}</p>
                    </div>
                    {/* Card Description */}
                    <div className="text-[#777777] text-[11px] font-normal mt-[10px] line-clamp-2">
                        {description}
                    </div>
                    {/* Card Tech Skills */}
                    <div className="w-auto items-center flex flex-wrap gap-[5px] mt-[10px]">
                        {techStack.map((tech, index) => (
                            <div key={index} className="border-[2px] border-[#E0DFDA] bg-[#FAFAF7] rounded-[5px]">
                                <p className="text-[10px] text-[#666666] px-[5px] py-[1px]">{tech}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;