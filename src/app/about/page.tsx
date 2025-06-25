"use client";

import {
  FaHtml5, FaCss3, FaJs, FaFigma, FaNodeJs,
  FaCode, FaDesktop,
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';
import {
  Tabs, TabsContent, TabsList, TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

const generateDots = (count = 60) =>
  Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 95,
    y: Math.random() * 95,
    size: Math.random() * 2 + 4,
    duration: Math.random() * 5 + 4,
    delay: Math.random() * 5,
    color: i % 2 === 0 ? "bg-white" : "bg-pink-500",
  }));

const about = {
  title: "About Me",
  description:
    "Hello, I am Aliza Moin, a committed web developer with expertise in HTML, CSS, Next.js, and TypeScript...",
  info: [
    { fieldName: "Name :-", fieldValue: "Aliza Moin" },
    { fieldName: "Email :-", fieldValue: "alizamoin222@gmail.com" },
    { fieldName: "Phone :-", fieldValue: "+92 317 38888" },
    { fieldName: "Nationality :-", fieldValue: "Pakistan" },
    { fieldName: "Language :-", fieldValue: "English, Urdu" },
  ],
};

const education = {
  title: "My Education",
  items: [
    { institution: "BOARD OF SECONDARY EDUCATION HYDERABAD SINDH", degree: "Matriculation", duration: "2018 - 2020" },
    { institution: "BOARD OF INTERMEDIATE EDUCATION HYDERABAD SINDH", degree: "Intermediate", duration: "2020 - 2022" },
    { institution: "University Of Sindh", degree: "Bachelor's in Development Communication", duration: "2023 - 2027" },
  ],
};

const course = {
  title: "My Course",
  items: [
    {
      institution: "Artificial Intelligence Program",
      degree: "Governor Sindh Initiative for GenAI, Web3, and Metaverse",
      duration: "2024 - Present",
    },
  ],
};

const experience = {
  title: "My Experience",
  items: [
    {
      projects:
        "● Serving as a Senior Student in the Governor Sindh Initiative, building AI projects using Python, GenAI tools, and creating responsive UIs with Next.js and Tailwind CSS. Collaborating on real-world AI solutions with peers.",
    },
    {
      projects:
        "● Conducted sessions on generative AI, explored real-world applications, and coordinated with mentors and industry experts to drive learning outcomes.",
    },
    {
      projects:
        "● Gained expertise in artificial intelligence, smart contracts, decentralized technologies, leadership, and team-based innovation.",
    },
  ],
};

const skillCategories = [
  {
    title: "Languages & Tools",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, level: 95 },
      { name: "CSS", icon: <FaCss3 />, level: 90 },
      { name: "TypeScript", icon: <SiTypescript />, level: 85 },
      { name: "Python", icon: <FaCode />, level: 80 },
    ],
  },
  {
    title: "Frontend Frameworks",
    skills: [
      { name: "Next.js", icon: <SiNextdotjs />, level: 85 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 95 },
    ],
  },
  {
    title: "Design & Styling",
    skills: [
      { name: "Figma", icon: <FaFigma />, level: 85 },
      { name: "Responsive Design", icon: <FaDesktop />, level: 95 },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Git", icon: <FaCode />, level: 85 },
      { name: "GitHub", icon: <FaCode />, level: 85 },
      { name: "Sanity CMS", icon: <FaCode />, level: 80 },
    ]
  },
  {
    title: "AI & Integration",
    skills: [
      { name: "Streamlit", icon: <FaCode />, level: 85 },
      { name: "Gemini AI", icon: <FaCode />, level: 80 },
      { name: "OpenAI SDK", icon: <FaCode />, level: 80 },
    ],
  },
];

const About = () => {
  const [dots, setDots] = useState(generateDots());

  useEffect(() => {
    setDots(generateDots());
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.6, ease: "easeIn" },
      }}
      className="relative min-h-[40vh] flex items-center justify-center py-10 mt-10 bg-black text-white overflow-hidden"
    >
      {/* Floating Background Dots */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className={`absolute rounded-full ${dot.color}`}
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              opacity: 0.5,
              filter: "blur(0.5px)",
            }}
            animate={{ y: ["0%", "-120%"] }}
            transition={{
              duration: dot.duration + 3,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto relative z-10">
        <Tabs defaultValue="about" className="flex flex-col xl:flex-row gap-8">
          <TabsList className="flex flex-col w-full xl:w-[850px] mx-auto xl:mx-0 gap-3">
            {["about", "skills", "education", "course", "experience"].map((tab, i) => (
              <TabsTrigger
                key={i}
                value={tab}
                className="px-4 py-3 rounded-xl bg-[#1a1a1a] hover:bg-[#ed6094] text-white text-lg font-medium hover:text-white transition-all"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* about */}
            <TabsContent value="about">
              <div className="flex flex-col gap-6 text-center xl:text-left">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#ed6094] via-[#b24bc0] to-[#f5f3ee] text-transparent bg-clip-text">
                  {about.title}
                </h3>
                <p className="max-w-[700px] mx-auto xl:mx-0 text-gray-300">{about.description}</p>
                <ul className="space-y-3 text-lg">
                  {about.info.map((item, index) => (
                    <li key={index} className="flex gap-2 justify-center xl:justify-start">
                      <span className="text-[#ed6094] font-semibold">{item.fieldName}</span>
                      <span>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills">
              <div className="text-center xl:text-left space-y-10">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#ed6094] via-[#cc77d7] to-[#f5f3ee] text-transparent bg-clip-text">
                  My Skills
                </h3>
                <div className="space-y-10">
                  {skillCategories.map((category, idx) => (
                    <div key={idx}>
                      <h4 className="text-2xl font-semibold text-white mb-4">{category.title}</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {category.skills.map((skill, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center gap-3 text-sm font-medium text-white">
                              <span className="text-xl">{skill.icon}</span>
                              <span>{skill.name}</span>
                              <span className="ml-auto text-[#ccc]">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-[#2c2c2c] h-2 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-[#ed6094] rounded-full transition-all duration-500"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education">
              <div className="text-center xl:text-left space-y-6">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#ed6094] via-[#b24bc0] to-[#f5f3ee] text-transparent bg-clip-text">
                  {education.title}
                </h3>
                <ScrollArea className="h-[800px]">
                  <ul className="grid grid-cols-1 gap-5">
                    {education.items.map((item, index) => (
                      <li key={index} className="bg-[#1a1a1a] p-6 xl:p-8 rounded-xl text-left space-y-2">
                        <span className="text-[#ed6094]">{item.duration}</span>
                        <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                        <p className="text-gray-400">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* course */}
            <TabsContent value="course">
              <div className="text-center xl:text-left space-y-6">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#ed6094] via-[#b24bc0] to-[#f5f3ee] text-transparent bg-clip-text">
                  {course.title}
                </h3>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 gap-5">
                    {course.items.map((item, index) => (
                      <li key={index} className="bg-[#1a1a1a] p-6 xl:p-8 rounded-xl text-left space-y-2">
                        <span className="text-[#ed6094]">{item.duration}</span>
                        <h4 className="text-lg font-semibold text-white">{item.degree}</h4>
                        <p className="text-gray-400">{item.institution}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* experience */}
            <TabsContent value="experience">
              <div className="text-center xl:text-left space-y-6 mb-20">
                <h3 className="text-5xl font-bold bg-gradient-to-r from-[#ed6094] via-[#b24bc0] to-[#f5f3ee] text-transparent bg-clip-text">
                  {experience.title}
                </h3>
                <ScrollArea className="h-auto">
                  <ul className="grid grid-cols-1 gap-5">
                    {experience.items.map((item, index) => (
                      <li key={index} className="bg-[#1a1a1a] text-gray-300 py-6 px-8 rounded-xl text-left">
                        <p>{item.projects}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;