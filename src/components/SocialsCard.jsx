import React from "react";

export default function SocialsCard({ label, href, isPrimary, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 px-5 py-3 rounded-[10px] text-xs font-bold tracking-wider transition-all duration-200 border-[2px] ${
        isPrimary ?
          "bg-[#111111] text-white border-[#111111] hover:bg-neutral-800"
        : "bg-white text-neutral-800 border-[#E8E8E3] hover:border-neutral-400 shadow-sm"
      }`}
    >
      <span className="text-sm">{icon}</span>
      <span>{label}</span>
    </a>
  );
}
