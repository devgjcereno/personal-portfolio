import React from "react";
import SkillCard from "../components/SkillCard.jsx";
const Skills = () => {
  return <>

    {/* The title */}
    <p className="text-[11px] font-bold text-[#111111] pl-[64px] mb-[20px]">SKILLS & TECHNOLOGY</p>

    {/* The cards of the the skills and technology */}

    {/* The card container of the skills & technology stack */}
    <SkillCard
      title="LANGUAGES"
      skills={["Python", "Java", "Javascript"]} />

    <SkillCard
      title="DATABASES"
      skills={["MySQL", "PostgresSQL", "Firebase", "Supabase", "SQLite"]} />
  </>;
};

export default Skills;
