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
  {
    label: "FACEBOOK",
    href: "https://www.facebook.com/profile.php?id=61572014758349",
    isPrimary: false,
    icon: "F",
  },
];

export default function Contact() {
  return (
    <section className="bg-[#f5f4f0] text-[#2c2b29] px-6 sm:px-12 lg:px-[64px] py-16 font-sans">
      <h2 className="text-xs font-bold tracking-widest uppercase mb-6 text-neutral-800">
        Contact
      </h2>

      <div className="flex flex-col w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-none mb-4">
          LET'S WORK <br /> TOGETHER.
        </h1>

        <p className="text-sm text-neutral-600 mb-8 leading-relaxed">
          Whether you are looking for a developer, have a project in mind, or
          simply want to say hello, my inbox is always open.
        </p>

        <div className="flex flex-wrap items-center gap-3 w-full">
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
