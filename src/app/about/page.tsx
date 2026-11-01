"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "AI Engineering",
    description: "Building intelligent applications and AI-powered solutions.",
    skills: [
      "Python",
      "OpenAI Agents SDK",
      "Agentic Workflows",
      "Prompt Engineering",
      "RAG",
      "MCP",
      "Gemini AI",
    ],
  },
  {
    number: "02",
    title: "Full-Stack Development",
    description: "Developing responsive web applications and backend services.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "FastAPI",
      "REST APIs",
    ],
  },
  {
    number: "03",
    title: "FDE & Workflow Engineering",
    description: "Understanding problems and designing practical technical workflows.",
    skills: [
      "Workflow Design",
      "Workflow Diagnosis",
      "API Integration",
      "AI Automation",
      "Business Process Understanding",
    ],
  },
  {
    number: "04",
    title: "Developer Tools",
    description: "Tools and environments used in development and project workflows.",
    skills: [
      "Claude Code",
      "Spec Kit",
      "Git",
      "GitHub",
      "Docker",
      "QWEN",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#090B0D] px-5 py-20 text-white sm:px-8 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-emerald-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* About heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-emerald-400"> Me.</span>
          </h2>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/[0.09] bg-[#101417] p-6 sm:p-8 lg:p-10"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(110,231,183,0.8)]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              Introduction
            </span>
          </div>

          <p className="max-w-5xl text-sm leading-7 text-gray-300 sm:text-lg sm:leading-8">
            I&apos;m Aliza Moin — a BS Development Communication student at the
            University of Sindh and an AI development learner through the
            Governor Sindh Initiative for AI, Web 3.0 &amp; Metaverse (GIAIC).
            I&apos;m pursuing the FDE (Forward Deployed Engineering) track,
            where I&apos;m developing skills in Python, AI Engineering, Agentic
            AI, and Full Stack Development. I work with technologies such as
            Python, OpenAI Agents SDK, JavaScript, TypeScript, React, Next.js,
            and FastAPI to build AI-powered applications, intelligent agents,
            and web solutions. Through my learning journey and project work,
            I&apos;m exploring how AI and software can address practical
            business challenges. My goal is to become a Forward Deployed
            Engineer who can understand real-world problems and turn them into
            effective technical solutions.
          </p>
        </motion.div>

        {/* Technology Stack heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 mt-16"
        >
          <h3 className="mb-8 mt-16 text-2xl font-bold tracking-tight sm:text-5xl">
            What I Build <span className="text-emerald-400">With.</span>
          </h3>
        </motion.div>

        {/* Technology groups */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.number}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-xl border border-white/[0.08] bg-[#101417] p-5 transition-all duration-300 hover:border-emerald-400/30 sm:p-6"
            >
              {/* Group heading */}
              <div className="mb-4 flex items-start gap-4">
                <span className="pt-1 text-xs font-semibold tracking-wider text-emerald-400">
                  {group.number}
                </span>

                <div>
                  <h4 className="text-base font-semibold text-white transition-colors group-hover:text-emerald-300 sm:text-lg">
                    {group.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Separator */}
              <div className="mb-4 h-px bg-white/[0.07]" />

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: skillIndex * 0.04,
                    }}
                    className="rounded-md border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-emerald-400/30 hover:text-emerald-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
