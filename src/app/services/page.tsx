

const education = [
  {
    institution: "University of Sindh",
    degree: "BS Development Communication",
    period: "Currently Enrolled — Semester 8",
    description:
      "Studying Development Communication with an interest in digital media, technology, and the role of communication in solving real-world challenges.",
  },
  {
    institution: "Governor Sindh Initiative (GIAIC)",
    degree: "FDE — Agent Factory Model and Advanced General Agents",
    period: "Currently Learning",
    description:
      "Developing practical skills in AI Engineering, Agentic AI, Python, AI agents, and Full Stack Development through the GIAIC learning program.",
  },
];

const experience = [
  {
    organization: "Governor Sindh Initiative (GIAIC)",
    role: "Student Leader",
    period: "Oct 2025 — Dec 2025",
    location: "Governor House, Karachi, Pakistan",
    description:
      "Led and supported fellow students during the GenAI, Web3, and Metaverse learning program. Helped coordinate peer learning activities and represented students within the program.",
  },
  {
    organization: "Governor Sindh Initiative (GIAIC)",
    role: "Senior Student",
    period: "Nov 2024 — Mar 2025",
    location: "Governor House, Karachi, Pakistan",
    description:
      "Completed advanced coursework in Cloud Applied Generative AI Engineering, exploring Large Language Models, RAG, NLP, agentic systems, and cloud infrastructure.",
  },
  {
    organization: "WAMTSOL LTD",
    role: "Backend Development Intern",
    period: "Internship",
    description:
      "Gained practical internship experience in backend development, working with server-side application concepts and development tasks.",
  },
];

const technicalProjects = [
  {
    name: "OpenAI Agents SDK Projects",
    category: "AI Engineering",
    description:
      "Built multiple Python-based projects using the OpenAI Agents SDK, exploring AI agents, tool integration, agent workflows, and practical agentic application development.",
  },
  {
    name: "Digital FTE — Personal AI Employee",
    category: "Agentic AI",
    description:
      "Developed a Personal AI Employee concept as part of the Digital FTE journey, exploring how AI agents can automate tasks and support real-world workflows.",
  },
];

const achievements = [
  {
    title: "Alibaba Cloud AI Hackathon Pakistan 2026",
    description:
      "Participated in the Alibaba Cloud AI Hackathon Pakistan 2026 with team projects focused on AI-powered solutions.",
    images: ["/certificate.jpg", "/alibaba.jpg"],
  },
];

function SectionHeading({
  title,
}: {
  title: string;
}) {
  return (
    <div className="mb-7">
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <div className="mt-3 h-1 w-14 rounded-full bg-emerald-400" />
    </div>
  );
}

function InfoCard({
  organization,
  role,
  period,
  location,
  description,
}: {
  organization: string;
  role: string;
  period: string;
  location?: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-emerald-400/30 sm:p-6">
      <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
        <div>
          <p className="text-sm font-medium text-emerald-400">
            {organization}
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            {role}
          </h3>
        </div>

        <span className="w-fit rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
          {period}
        </span>
      </div>

      {location && (
        <p className="mt-2 text-sm text-gray-500">
          {location}
        </p>
      )}

      <p className="mt-4 text-sm leading-7 text-gray-400">
        {description}
      </p>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#090B0D] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Page Introduction */}
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            My Journey
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Education & <span className="text-emerald-400">Experience.</span>
          </h1>
        </div>

        {/* Education */}
        <section className="mb-16">
          <SectionHeading title="Education" />

          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item) => (
              <InfoCard
                key={item.institution}
                organization={item.institution}
                role={item.degree}
                period={item.period}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* Professional Experience & Leadership */}
        <section className="mb-24 mt-24">
          <SectionHeading title="Professional Experience & Leadership" />

          <div className="space-y-5">
            {experience.map((item) => (
              <InfoCard
                key={`${item.organization}-${item.role}`}
                organization={item.organization}
                role={item.role}
                period={item.period}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* Technical Projects */}
        <section className="mb-24 mt-20">
          <SectionHeading title="Technical Projects" />

          <div className="grid gap-5 md:grid-cols-2">
            {technicalProjects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-emerald-400/30 sm:p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {project.name}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Achievements & Certifications */}
        <section>
          <SectionHeading title="Achievements & Certifications" />

          <div className="grid gap-5 md:grid-cols-2">
            {achievements.map((achievement) => (
              <article
                key={achievement.title}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
              >
                <h3 className="text-lg font-semibold text-white">
                  {achievement.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-400">
                  {achievement.description}
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {achievement.images.map((image) => (
                    <a
                      key={image}
                      href={image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden rounded-xl border border-white/10"
                    >
                      <img
                        src={image}
                        alt={`${achievement.title} certificate`}
                        className="h-36 w-full object-cover transition duration-300 hover:scale-105"
                      />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
