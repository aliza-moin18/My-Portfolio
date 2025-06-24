"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image"; // ✅ IMPORTED Next.js Image

interface ProjectTag {
  name: string;
  href: string;
}

interface Project {
  id: number;
  title: string;
  desc: string;
  image?: string;
  tags: ProjectTag[];
}

const projects: Project[] = [
  {
    id: 0,
    title: "Skincare Ecommerce Website",
    desc: "A fully responsive skincare ecommerce website built with Next.js and Tailwind CSS...",
    image: "/Skincare1.PNG",
    tags: [
      { name: "Live Demo", href: "https://nextjs-milestone-3-ecommerce-website-xu2q.vercel.app/" },
      { name: "GitHub", href: "https://github.com/aliza-moin18/NEXTJS_Milestone_3_Ecommerce_Website/tree/main" },
    ],
  },
  {
    id: 1,
    title: "EasyBuy – Multi-Vendor Marketplace Solution",
    desc: "A hackathon project built using Nextjs, Sanity, and Tailwind CSS to create a marketplace platform.",
    image: "/Furniture2.PNG",
    tags: [
      { name: "Live Demo", href: "https://easy-buy-marketplace-builder-hackathon-3rw4.vercel.app/" },
      { name: "GitHub", href: "https://github.com/aliza-moin18/EasyBuy-Marketplace-Builder-Hackathon" }
    ],
  },
    {
    id: 2,
    title: "Blog Website",
    desc: "A TechWorld blog website built with Nextjs and Tailwind CSS. The blog allows users to post articles and explore different topics.",
    image: "/blog3.PNG",
    tags: [
      { name: "Live Demo", href: "https://next-js-milestione-3-dynamic-blog-a37l.vercel.app/" },
      { name: "GitHub", href: "https://github.com/aliza-moin18/NextJs_Milestione_3_Dynamic_Blog" }
    ],
  },
  {
    id: 3,
    title: "Admin Dashboard",
    desc: `An admin dashboard for managing marketplace data, built with Next.js, Tailwind CSS  and Sanity CMS. 
Demo Login: =>  Email: admin@admin.com
Password: password`,
    image: "/admin4.PNG",
    tags: [
      { name: "Live Demo", href: "https://easy-buy-marketplace-admin-dashboard.vercel.app/" },
      { name: "GitHub", href: "https://github.com/aliza-moin18/EasyBuy-Marketplace-Admin-Dashboard" }
    ],
  },
  {
    id: 4,
    title: "Password Strength Meter",
    desc: "An interactive password strength checker built with Python and Streamlit. It evaluates password strength based on character variety, length, and common pattern detection.",
    image: "/password5.PNG",
    tags: [
      { name: "Live Demo", href: "https://project-02password-strength-meter-htpqr6stqmgmtuy3hgyw3h.streamlit.app/" },
      { name: "GitHub", href: "https://github.com/aliza-moin18/GIAIC-Python-Projects/tree/main/Project-02_Password-Strength-Meter" }
    ],
  },
  {
    id: 5,
    title: "Growth Mindset App",
    desc: "A motivational app built using Python and Streamlit that provides daily affirmations, mindset tips, and exercises to encourage positive thinking.",
    image: "/mindset6.PNG",
    tags: [
      { name: "Live Demo", href: "https://growth-mindset-app-admhcwupfwfm84gexjsg23.streamlit.app/" },
      { name: "GitHub", href: "https://github.com/aliza-moin18/growth-mindset-app" }
    ],
  },
  {
    id: 6,
    title: "Travel Website",
    desc: "A travel-themed website designed using Nextjs and Tailwind CSS. It helps users plan trips and includes a countdown timer.",
    image: "/travel7.PNG",
    tags: [
      { name: "Live Demo", href: "https://milestone-2-travel-website.vercel.app/" },
      { name: "GitHub", href: "https://github.com/aliza-moin18/Milestone_2_travel_website" }
    ],
  },
  {
    id: 7,
    title: "Company Portfolio",
    desc: "A static portfolio website built with pure HTML and CSS to showcase projects and contact details.",
    image: "/company.PNG",
    tags: [
      { name: "Live Demo", href: "https://html-css-assignment-44kc.vercel.app/" },
      { name: "GitHub", href: "https://github.com/aliza-moin18/HTML-CSS-Assignment/tree/main/FINAL%20CSS%20ASSIGNMENT" }
    ],
  },
  {
    id: 8,
    title: "YouTube Clone",
    desc: "A YouTube clone built using HTML and CSS simulating core functionalities with a clean UI.",
    image: "/youtube9.PNG",
    tags: [
      { name: "Live Demo", href: "https://youtube-clone-1zed.vercel.app/" },
      { name: "GitHub", href: "https://github.com/aliza-moin18/Youtube-Clone." }
    ],
  },
];

const generateDots = (count = 60) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 4,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 5,
    color: i % 2 === 0 ? "bg-white" : "bg-pink-400",
  }));

const Projects = () => {
  const [dots, setDots] = useState(generateDots());

  useEffect(() => {
    setDots(generateDots());
  }, []);

  return (
    <section className="min-h-[70vh] py-16 relative overflow-hidden bg-black text-[#f5f3ee]">
      {/* Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className={`absolute rounded-full ${dot.color}`}
            style={{
              width: dot.size,
              height: dot.size,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              opacity: 0.5,
              filter: "blur(0.8px)",
            }}
            animate={{ y: ["0%", "-150%"] }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 lg:px-20 relative z-10">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-14">
          My Projects
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#282828] text-[#f5f3ee] rounded-xl shadow-md overflow-hidden border border-[#b3b4b0]/20 hover:border-[#ed6094] hover:shadow-[0_0_20px_#ed6094aa] transition-all duration-300"
            >
              {project.image && (
                <div className="relative w-full h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#ed6094] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#b3b4b0] leading-relaxed mb-4 whitespace-pre-line">
                  {project.desc}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {project.tags.map((tag, i) => (
                    <a
                      key={i}
                      href={tag.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="px-3 py-1.5 text-sm border border-[#ed6094] text-[#ed6094] rounded hover:bg-[#ed6094] hover:text-white transition-all duration-300 flex items-center gap-2">
                        {tag.name === "Live Demo" ? (
                          <FaExternalLinkAlt />
                        ) : (
                          <FaGithub />
                        )}
                        {tag.name}
                      </button>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
