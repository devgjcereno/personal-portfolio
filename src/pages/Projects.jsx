import React from "react";
import ProjectCard from "../components/ProjectCard";
import nursensePic from "../assets/card-picture.png";

const Projects = () => {
  return (
    <>
      <p className="text-[11px] font-bold text-[#111111] pl-[64px]">PROJECTS</p>

      {/* Render Project Cards */}
      <ProjectCard
        image={nursensePic}
        title="Nursense"
        category="BACKEND"
        description="An Android application for nursing students to review their knowledge, test their understanding, and prepare for board examinations and certifications."
        techStack={["Flutter", "Firebase", "Node.js", "Express.js", "MySQL"]}
      />
    </>
  );
};

export default Projects;