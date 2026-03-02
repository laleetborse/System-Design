import { motion } from "framer-motion";
import { skills } from "../constants/data";

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-surface-el/50">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Skills
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Technologies I work with
          </h2>
          <p className="mt-4 text-fg-secondary max-w-md mx-auto">
            My toolkit for turning ideas into production-ready applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group flex flex-col items-center gap-2.5 p-5 rounded-2xl bg-surface border border-border hover:border-accent/25 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 cursor-default"
            >
              <skill.icon
                size={32}
                style={{ color: skill.color }}
                className="group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
              />
              <span className="text-xs font-medium text-fg-secondary group-hover:text-fg transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
