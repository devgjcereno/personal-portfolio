import React from "react";
import SocialsCard from "../components/SocialsCard";

const socialLinks = [
  {
    label: "EMAIL",
    href: "mailto:cedobyte@gmail.com",
    isPrimary: true,
    icon: "✉",
  },
  {
    label: "GITHUB",
    href: "https://github.com/devgjcereno",
    isPrimary: false,
    icon: "⌘",
  },
];

export default function Contact() {
  return (
    <section className="bg-[#f5f4f0] text-[#2c2b29] min-h-screen px-6 py-12 md:px-20 font-sans">
      {/* Section Title */}
      <h2 className="text-xs font-bold tracking-widest uppercase mb-10 text-neutral-800">
        Contact
      </h2>

      {/* Main Content Container */}
      <div className="flex flex-col max-w-2xl">
        {/* Bold Heading */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 leading-none mb-4">
          LET'S WORK <br /> TOGETHER.
        </h1>

        {/* Description */}
        <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
          Whether you are looking for a developer, have a project in mind, or
          simply want to say hello, my inbox is always open.
        </p>

        {/* Action Buttons / Socials Cards Grid */}
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((social, index) => (
            <SocialsCard
              key={index}
              label={social.label}
              href={social.href}
              isPrimary={social.isPrimary}
              icon={social.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
