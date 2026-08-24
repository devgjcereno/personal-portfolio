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
    <section className="bg-[#f5f4f0] text-[#2c2b29] min-h-screen px-6 py-12 md:px-20 font-sans">
      <h2 className="text-xs font-bold tracking-widest uppercase mb-10 text-neutral-800">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-fit">
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
    </section>
  );
}
