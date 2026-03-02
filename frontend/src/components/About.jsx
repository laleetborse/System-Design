import { motion } from "framer-motion";
import { HiSparkles, HiShieldCheck, HiChip, HiCloud } from "react-icons/hi";

const cards = [
  {
    icon: HiSparkles,
    title: "Generative AI",
    description: "Multi-agent systems, LangChain/LangGraph workflows, and LLM-powered automation at Salesforce.",
    accent: "accent",
  },
  {
    icon: HiCloud,
    title: "Cloud & Platform",
    description: "Event-driven architecture with Kafka, Salesforce platform development with LWC and Apex.",
    accent: "emerald",
  },
  {
    icon: HiShieldCheck,
    title: "Security",
    description: "FIDO2 passkey auth, cloud threat analysis, attack path mapping, and protocol vulnerability research.",
    accent: "rose",
  },
  {
    icon: HiChip,
    title: "Systems & Embedded",
    description: "Drone communication protocols, embedded systems, and control systems from IIT Kharagpur.",
    accent: "accent-light",
  },
];

const accentMap = {
  accent: { bg: "bg-accent/10", text: "text-accent" },
  emerald: { bg: "bg-emerald/10", text: "text-emerald" },
  rose: { bg: "bg-rose/10", text: "text-rose" },
  "accent-light": { bg: "bg-accent-light/10", text: "text-accent-light" },
};

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            About
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
            Software engineer with a passion for{" "}
            <span className="text-accent">building & securing</span> systems
          </h2>
          <p className="mt-5 text-fg-secondary leading-relaxed">
            I&apos;m an Associate Member of Technical Staff at Salesforce, where I build
            agentic AI workflows, event-driven architectures, and scalable platform features.
            I graduated from IIT Kharagpur in 2024 with a B.Tech in Instrumentation Engineering
            and a minor in Computer Science (CGPA: 8.75).
          </p>
          <p className="mt-4 text-fg-secondary leading-relaxed">
            My journey spans from cloud security research at CloudDefense.AI and
            passkey-based authentication at Samsung R&D to drone protocol vulnerability
            analysis for my bachelor thesis. I&apos;m passionate about open-source,
            continuous learning, and hackathons.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => {
            const colors = accentMap[card.accent];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-6 rounded-2xl bg-surface-el border border-border hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-black/5"
              >
                <div
                  className={`inline-flex p-2.5 rounded-xl ${colors.bg} ${colors.text} mb-4`}
                >
                  <card.icon size={22} />
                </div>
                <h3 className="font-semibold text-fg mb-1.5">{card.title}</h3>
                <p className="text-sm text-fg-secondary leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
