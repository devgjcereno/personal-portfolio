import React from "react";

export default function EducationCard({
  degree,
  institution,
  details,
  period,
}) {
  return (
    <div className="relative pl-6 sm:pl-8">
      {/* Timeline Dot matching WorkCard */}
      <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#566A2C]" />

      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
        <div>
          <h3 className="text-base font-semibold text-neutral-900">{degree}</h3>
          <p className="text-sm text-[#566A2C] font-medium mt-0.5">
            {institution}
          </p>
        </div>
        <span className="text-xs text-neutral-400 mt-1 sm:mt-0 font-mono">
          {period}
        </span>
      </div>

      <p className="text-sm text-neutral-600 mt-3 leading-relaxed max-w-3xl">
        {details}
      </p>
    </div>
  );
}
