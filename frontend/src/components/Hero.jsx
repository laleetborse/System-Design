import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { socialLinks } from "../constants/data";

function getExperience() {
  const start = new Date(2024, 3); // April 2024
  const now = new Date();
  const months = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (years < 1) return `${months} mos`;
  if (rem === 0) return `${years} yr${years > 1 ? "s" : ""}`;
  return `${years} yr${years > 1 ? "s" : ""} ${rem} mos`;
}

export default function Hero() {
  const stats = [
    { value: "IIT KGP", label: "B.Tech '24" },
    { value: "Salesforce", label: "AMTS, Bengaluru" },
    { value: getExperience(), label: "Experience" },
  ];
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-20 pb-10"
    >
      {/* SVG grain filter */}
      <svg className="absolute w-0 h-0">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Gradient orb with grain */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="relative w-[min(80vw,600px)] aspect-square">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, #ec4899 0%, #f472b6 25%, #fb923c 55%, #fde68a 80%, transparent 100%)",
              filter: "blur(60px)",
              opacity: 0.7,
            }}
          />
          <div
            className="dark:hidden absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, #ec4899 0%, #f472b6 25%, #fb923c 55%, #fde68a 80%, transparent 100%)",
              filter: "blur(40px)",
              opacity: 0.35,
            }}
          />
          <div
            className="hidden dark:block absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, #ec4899 0%, #f472b6 25%, #fb923c 55%, #fde68a 80%, transparent 100%)",
              filter: "blur(40px)",
              opacity: 0.25,
            }}
          />
          {/* Grain texture overlay */}
          <div
            className="absolute -inset-[20%] opacity-50 dark:opacity-40 mix-blend-overlay pointer-events-none"
            style={{ filter: "url(#grain)" }}
          />
        </div>
      </div>

      {/* Top: headline */}
      <div className="relative mx-auto max-w-6xl w-full px-6 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold uppercase tracking-wider text-emerald bg-emerald/10 rounded-full border border-emerald/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" />
            Open to opportunities
          </span>

          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tighter text-fg">
            LALEET
            <br />
            <span className="text-fg-muted">BORSE</span>
          </h1>

          <p className="mt-8 text-base sm:text-lg text-fg-secondary max-w-lg leading-relaxed">
            Software engineer at Salesforce. Building agentic AI workflows,
            event-driven systems, and secure cloud-native applications.
            IIT Kharagpur &apos;24.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group px-7 py-3 rounded-full bg-accent text-white text-sm font-medium shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:bg-accent-dark transition-all duration-200"
            >
              View My Work
              <span className="inline-block ml-1 group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full text-sm font-medium border border-border text-fg-secondary hover:text-fg hover:border-fg-muted transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom: stats + socials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative mx-auto max-w-6xl w-full px-6"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-8 pt-8 border-t border-border">
          <div className="flex items-center gap-8 sm:gap-12">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-fg">
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-fg-muted mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {[
              { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
              { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
              { icon: FaTwitter, href: socialLinks.twitter, label: "Twitter" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-fg-muted hover:text-accent hover:bg-accent/5 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
