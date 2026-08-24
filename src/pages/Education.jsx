import React from "react";
import EducationCard from "../components/EducationCard";

const educationList = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Mabini Colleges, Inc.",
    details: "Leadership Awardee - (President)",
    period: "2021 - 2025",
  },

  {
    degree: "Master in Information Technology",
    institution: "University of Camarines Norte",
    details:
      "Earned 9 units in Operating Systems, System Analysis and Design, and System Architectures.",
    period: "2025 - Present",
  },

  {
    degree: "Juris Doctor (Planned)",
    institution: "To be determined",
    details: "Focus: Cybersecurity Law · Digital Rights · Technology Policy",
    period: "2030 onwards",
  },
];

export default function Education() {
  return (
    <section className="bg-[#f5f4f0] text-[#2c2b29] min-h-screen px-6 py-12 md:px-20 font-sans">
      {/* Section Title */}
      <h2 className="text-xs font-bold tracking-widest uppercase mb-10 text-neutral-800">
        Education
      </h2>

      {/* Timeline Container matching Work section */}
      <div className="relative border-l border-neutral-300 ml-2 space-y-12">
        {educationList.map((edu, index) => (
          <EducationCard
            key={index}
            degree={edu.degree}
            institution={edu.institution}
            details={edu.details}
            period={edu.period}
          />
        ))}
      </div>
    </section>
  );
}
