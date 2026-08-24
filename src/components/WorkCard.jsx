import React from "react";

export default function WorkCard({
  role,
  company,
  location,
  period,
  description,
}) {
  return (
    <div className="relative pl-6 sm:pl-8">
      <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#566A2C]" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
        <div>
          <h3 className="text-base font-semibold text-neutral-900">{role}</h3>
          <div className="text-sm text-[#566A2C] font-medium mt-0.5 flex flex-wrap items-center gap-x-2">
            <span>{company}</span>
            <span className="text-neutral-400">·</span>
            <span className="text-neutral-500 text-xs flex items-center gap-1">
              📍 {location}
            </span>
          </div>
        </div>
        <span className="text-xs text-neutral-400 mt-1 sm:mt-0 font-mono">
          {period}
        </span>
      </div>

      <p className="text-sm text-neutral-600 mt-3 leading-relaxed max-w-3xl">
        {description}
      </p>
    </div>
  );
}
