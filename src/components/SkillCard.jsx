import React from "react";

const SkillCard = ({ title, skills }) => {
    return (
        <div className="w-[578px] h-[75px] px-[20px] py-[16px] bg-[#FFF] border-[2px] border-[#E8E8E3] rounded-[10px] ml-[64px] mb-[15px]">
            <div>
                <p className="text-[#566A2C] text-[12px] font-semibold">{title}</p>
            </div>

            <div className="flex flex-row text-[#555555] text-[13px] gap-[8px] mt-[5px]">
                {skills.map((skill, index) => (
                    <React.Fragment key={index}>
                        <p>{skill}</p>
                        {index < skills.length - 1 && <span>·</span>}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;