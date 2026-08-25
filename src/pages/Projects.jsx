import React from "react";
import ProjectCard from "../components/ProjectCard";
import nursensePic from "../assets/nursense.png";
import ebuksanPic from "../assets/e-buksan.svg";

const projectsList = [
  {
    image: nursensePic,
    title: "Nursense",
    category: "BACKEND",
    description:
      "An Android application for nursing students to review their knowledge, test their understanding, and prepare for board examinations and certifications.",
    techStack: ["Flutter", "Supabase", "RestAPI", "Servers"],
  },
  {
    image: ebuksanPic,
    title: "E-buksan",
    category: "BACKEND",
    description:
      "An Android application for nursing students to review, test their knowledge, and prepare for examinations and certifications with interactive modules.",
    techStack: ["React", "Supabase", "DevOps"],
  },
];

export default function Projects() {
  return (
    <section className="bg-[#f5f4f0] text-[#2c2b29] px-6 sm:px-12 lg:px-[64px] py-16 font-sans">
      <div className="w-full max-w-5xl">
        <h2 className="text-xs font-bold tracking-widest uppercase mb-6 text-neutral-800">
          Projects
        </h2>

        {/* Left-aligned grid with balanced spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
          {projectsList.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
