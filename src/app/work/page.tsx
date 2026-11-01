
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { useRef } from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies?: string[];
  live: string;
  github: string;
  category: string;
  type: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "AI & Robotics Textbook",
    description:
      "An AI and humanoid robotics learning resource developed using a Spec-Driven Development workflow with Spec Kit.",
    image: "/Book.jpeg",
    technologies: ["Spec Kit", "ClaudeCode", "RAG", "QWEN"],
    live: "https://ai-humanoid-robotics-book-tau.vercel.app/",
    github: "https://github.com/aliza-moin18/AI-Robotics-Textbook",
    category: "AI & Robotics",
    type: "Spec-Driven Project",
  },
  {
    id: "02",
    title: "Ecommerce",
    description:
      "A responsive online shopping experience with product-focused layouts and a clean interface.",
    image: "/Skincare1.PNG",
    technologies: ["Next.js", "Tailwind CSS"],
    live: "https://nextjs-milestone-3-ecommerce-website-xu2q.vercel.app/",
    github:
      "https://github.com/aliza-moin18/NEXTJS_Milestone_3_Ecommerce_Website/tree/main",
    category: "E-Commerce",
    type: "Web Application",
  },
  {
    id: "03",
    title: "EasyBuy Marketplace",
    description:
      "A multi-vendor marketplace featuring product listings and Sanity-powered content management.",
    image: "/Furniture2.PNG",
    technologies: ["Next.js", "Sanity", "Tailwind CSS"],
    live: "https://easy-buy-marketplace-builder-hackathon-3rw4.vercel.app/",
    github:
      "https://github.com/aliza-moin18/EasyBuy-Marketplace-Builder-Hackathon",
    category: "Marketplace",
    type: "Marketplace System",
  },
  {
    id: "04",
    title: "TechWorld Blog",
    description:
      "A technology-focused blog featuring dynamic content and a responsive reading experience.",
    image: "/blog3.PNG",
    technologies: ["Next.js", "Tailwind CSS"],
    live: "https://next-js-milestione-3-dynamic-blog-a37l.vercel.app/",
    github:
      "https://github.com/aliza-moin18/NextJs_Milestione_3_Dynamic_Blog",
    category: "Digital Platform",
    type: "Content Platform",
  },
  {
    id: "05",
    title: "Marketplace Admin Dashboard",
    description:
      "An administrative interface for managing marketplace products and content.",
    image: "/admin4.PNG",
    technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    live: "https://easy-buy-marketplace-admin-dashboard.vercel.app/",
    github:
      "https://github.com/aliza-moin18/EasyBuy-Marketplace-Admin-Dashboard",
    category: "Dashboard",
    type: "Management System",
  },
];

export default function Work() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "right" ? 330 : -330,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#090B0D] px-5 py-20 text-white sm:px-8 lg:px-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-emerald-500/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-72 w-72 rounded-full bg-violet-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-end justify-between gap-4"
        >
          <div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              My<span className="text-emerald-400"> Work.</span>
            </h2>
          </div>

          {/* Carousel navigation */}
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => scrollProjects("left")}
              aria-label="Previous projects"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-black"
            >
              <FaChevronLeft size={12} />
            </button>

            <button
              onClick={() => scrollProjects("right")}
              aria-label="Next projects"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-gray-300 transition hover:border-emerald-400 hover:bg-emerald-400 hover:text-black"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </motion.div>

        {/* Projects gallery */}
        <div
          ref={sliderRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group w-[270px] min-w-[270px] snap-start overflow-hidden rounded-xl border border-white/[0.09] bg-[#101417] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 sm:w-[290px] sm:min-w-[290px]"
            >
              {/* Project image */}
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title}`}
                className="relative block h-[145px] overflow-hidden bg-[#171d20]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="290px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-black/50 px-2 py-1 text-[10px] font-medium text-gray-200 backdrop-blur-md">
                  {project.category}
                </span>

                <span className="absolute bottom-3 right-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                  <FaExternalLinkAlt size={10} />
                </span>
              </a>

              {/* Project details */}
              <div className="p-4">

                {/* Title */}
                <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-emerald-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="min-h-[55px] text-xs leading-[1.7] text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies &&
                  project.technologies.length > 0 && (
                    <div className="my-4 flex min-h-[25px] flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[10px] text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                {/* Project links */}
                <div className="flex items-center justify-between border-t border-white/[0.08] pt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-300 transition hover:text-emerald-200"
                  >
                    View Project
                    <FaExternalLinkAlt size={9} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code`}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition hover:border-emerald-400/40 hover:text-emerald-300"
                  >
                    <FaGithub size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
