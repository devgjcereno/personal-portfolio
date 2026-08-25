import React from "react";
import SkillCard from "../components/SkillCard";

const skillCategories = [
  {
    title: "LANGUAGES",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "PHP",
      "SQL",
      "Bash",
    ],
  },
  {
    title: "FRAMEWORKS & LIBRARIES",
    skills: ["Flutter", "React", "Laravel", "Node.js", "Dart"],
  },
  {
    title: "DATABASES",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "SQLite",
      "Appwrite",
    ],
  },
  {
    title: "DEVOPS & TOOLING",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "VS Code",
      "Figma",
      "Postman",
      "Tunneling",
      "Open Source Softwares",
    ],
  },
];

export default function Skills() {
  return (
    <section className="bg-[#f5f4f0] text-[#2c2b29] px-6 sm:px-12 lg:px-[64px] py-16 font-sans">
      <div className="relative pl-6 sm:pl-8">
        <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#566A2C] rounded-full"></div>

        <h2 className="text-xs font-bold tracking-widest uppercase mb-6 text-neutral-800">
          Skills & Technology
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
