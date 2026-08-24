import React from "react";

export default function CertificationsCard({ title, issuer, year, status }) {
  // Helper function to handle status badge styles based on your image
  const getBadgeStyles = (statusType) => {
    switch (statusType) {
      case "COMPLETED":
        return "border-[#566A2C] text-[#566A2C] bg-[#566A2C]/5";
      case "IN PROGRESS":
        return "border-[#D97706] text-[#D97706] bg-[#D97706]/5";
      case "PLANNED":
      default:
        return "border-neutral-300 text-neutral-500 bg-neutral-100/50";
    }
  };

  return (
    <div className="w-[500px] h-[75px] px-[20px] py-[16px] bg-white border-[2px] border-[#E8E8E3] rounded-[10px] shadow-sm flex items-center justify-between shrink-0">
      <div className="flex flex-col justify-center">
        <h3 className="font-bold text-[#111111] text-[13px] leading-tight">
          {title}
        </h3>
        <p className="text-[11px] text-[#777777] font-normal mt-1">
          {issuer} · {year}
        </p>
      </div>

      <div>
        <span
          className={`text-[9px] font-bold tracking-wider px-[8px] py-[4px] rounded-full border-[1.5px] whitespace-nowrap ${getBadgeStyles(
            status,
          )}`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
