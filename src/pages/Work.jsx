import React from "react";
import WorkCard from "../components/WorkCard";

const workExperiences = [
  {
    role: "Software Developer Intern",
    company: "Praetorian Intelligence Incorporated",
    location: "Philippines",
    period: "Jun 2024 - Aug 2024",
    description:
      "Provided technical support and ideas for HR systems, assisted full-time employees using Flutter and Firebase.",
  },
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    location: "Remote",
    period: "2024 - Present",
    description:
      "Design and develop full-stack web applications for small businesses, student organizations, and local NGOs using modern web technologies including React, Supabase, and Appwrite.",
  },
];

export default function Work() {
  return (
    <section className="bg-[#f5f4f0] text-[#2c2b29] px-6 sm:px-12 lg:px-[64px] py-16 font-sans">
      <h2 className="text-xs font-bold tracking-widest uppercase mb-6 text-neutral-800">
        Work
      </h2>

      <div className="relative border-l border-neutral-300 ml-2 space-y-8 w-full">
        {workExperiences.map((job, index) => (
          <WorkCard
            key={index}
            role={job.role}
            company={job.company}
            location={job.location}
            period={job.period}
            description={job.description}
          />
        ))}
      </div>
    </section>
  );
}
