import React from "react";

export default function About() {
  return (
    <section className="bg-[#f5f4f0] text-[#2c2b29] min-h-screen px-6 py-12 md:px-20 font-sans">
      <div className="flex flex-col gap-[20px] max-w-2xl">
        {/* Section Title */}
        <h2 className="text-xs font-bold tracking-widest uppercase mb-10 text-neutral-800">
          About
        </h2>

        {/* Text Content */}
        <div className="flex flex-col text-[#555555] text-[13px] gap-[15px] leading-relaxed">
          <p>
            I am Glenn Cereno, an IT graduate student based in the Philippines
            with a strong passion for building meaningful technology. My work
            sits at the intersection of software development, cybersecurity, and
            systems thinking, crafting applications that are both technically
            rigorous and genuinely useful.
          </p>
          <p>
            Beyond code, I am drawn to the structures that govern both
            technology and society. That curiosity is why I plan to pursue law
            school with a focus on cybersecurity policy, digital rights, and the
            legal dimensions of information security.
          </p>
          <p>
            I believe great technology is both technically sound and deeply
            human. That conviction drives everything I build.
          </p>
        </div>
      </div>
    </section>
  );
}
