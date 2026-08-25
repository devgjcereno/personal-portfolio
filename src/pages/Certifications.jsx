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
    <section className="bg-[#f5f4f0] text-[#2c2b29] px-6 sm:px-12 lg:px-[64px] py-16 font-sans">
      <h2 className="text-xs font-bold tracking-widest uppercase mb-6 text-neutral-800">
        Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
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
