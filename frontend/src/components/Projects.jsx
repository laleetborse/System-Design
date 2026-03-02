import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import { projects } from "../constants/data";

export default function Projects() {
  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Projects
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Selected work
          </h2>
          <p className="mt-4 text-fg-secondary max-w-md mx-auto">
            A few projects I&apos;ve built recently that I&apos;m proud of.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl bg-surface-el border border-border overflow-hidden hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-el via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {project.internal ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface/90 backdrop-blur-sm text-fg-muted text-xs font-medium border border-border">
                      <FaLock size={10} />
                      Internal
                    </span>
                  ) : (
                    <>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-surface/90 backdrop-blur-sm text-fg-secondary hover:text-fg border border-border transition-colors"
                          aria-label="View code"
                        >
                          <FaGithub size={16} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 rounded-xl bg-accent text-white shadow-sm shadow-accent/20 hover:bg-accent-dark transition-colors"
                          aria-label="View live"
                        >
                          <FaExternalLinkAlt size={14} />
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-fg group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-fg-secondary leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-accent/8 text-accent border border-accent/12"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
