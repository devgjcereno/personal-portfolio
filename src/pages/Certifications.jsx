import React from "react";
import CertificationsCard from "../components/CertificationsCard";

const certsList = [
  {
    title: "Electronic Product Assembly Servicing - NCII",
    issuer: "TESDA - Technical Education and Skills Development Authority",
    year: "2024",
    status: "COMPLETED",
  },
  {
    title: "Computer Systems Servicing - NCII",
    issuer: "TESDA - Technical Education and Skills Development Authority",
    year: "2025",
    status: "COMPLETED",
  },
  {
    title: "Data Analytics Level III - NC",
    issuer: "TESDA - Technical Education and Skills Development Authority",
    year: "2026",
    status: "COMPLETED",
  },
  {
    title: "TryHackMe - PreSecurity Certification",
    issuer: "TryHackMe",
    year: "2026",
    status: "IN PROGRESS",
  },
];

export default function Certifications() {
  return (
    <section className="bg-[#f5f4f0] text-[#2c2b29] min-h-screen px-6 py-12 md:px-20 font-sans">
      {/* Section Title */}
      <h2 className="text-xs font-bold tracking-widest uppercase mb-10 text-neutral-800">
        Certifications
      </h2>

      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-fit">
        {certsList.map((cert, index) => (
          <CertificationsCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            year={cert.year}
            status={cert.status}
          />
        ))}
      </div>
    </section>
  );
}
