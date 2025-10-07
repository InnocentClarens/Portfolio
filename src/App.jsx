import React from "react";
import { motion } from "framer-motion";
import movie from "./assets/cine.jpg.png";
import logo from "./assets/logo.png";
import me from "./assets/IMG_3864.jpg";

const projects = [
  {
    title: "     Cine24 – Movie Seat Booking",
    blurb: "Interactive seat map with real-time pricing.",
    links: {
    demo: "https://innocentclarens.github.io/Cine-24/",
    code: "https://github.com/yourusername/cine24",
    shots: movie,
    },
  },
  {
    title: "     Gold Sky – Airline Booking",
    blurb: "Flight form + seat logic with session storage.",
    links: {
    demo: "https://innocentclarens.github.io/Gold-Sky/",
    code: "https://github.com/innocentclarens/gold-sky/",
    shots: logo,
  },
},
];

const Accent = ({ children }) => (
  <span className="bg-gradient-to-r from-blue-500 via-sky-400 to-rose-500 bg-clip-text text-transparent">
    {children}
  </span>
);

function ProjectCard({ p, i }) {
  return (
    <motion.article
      initial={{ y: 18, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: i * 0.05 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur"
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <img
          src={p.links.shots}
          alt={p.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-transparent to-rose-600/20" />
      </div>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="mt-1 text-white/75 text-sm">{p.blurb}</p>
        <div className="mt-3 flex gap-3">
          <a
            href={p.links.demo}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/10"
          >
            Live Demo ↗
          </a>
          <a
            href={p.links.code}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-white/90 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      {/* subtle background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-rose-600/20 blur-3xl" />
      </div>

      {/* nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
           <img 
            src={me} 
            alt="Rinaldi Innocent" 
            className="w-20 h-20 rounded-full object-cover border border-white/20" 
           />
            <a href="#home" className="text-lg font-semibold tracking-tight">
              <Accent>Rinaldi</Accent>
            </a>
          </div>

          <div className="hidden gap-6 text-sm sm:flex">
            <a href="#projects" className="text-white/80 hover:text-white">Projects</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      {/* hero */}
      <section id="home" className="mx-auto max-w-6xl px-4 pb-12 pt-10 sm:pt-20">
        <motion.div
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <h1 className="text-3xl sm:text-5xl font-semibold">
            From <Accent>IT </Accent> → <Accent>Front-End</Accent>
          </h1>
          <p className="max-w-2xl text-white/80">
            With a background in IT support, I now create user-friendly apps with modern web tech,
            building clean, responsive interfaces that solve real problems.
          </p>
          <a
            href="#projects"
            className="inline-block rounded-xl bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-white"
          >
            View Projects
          </a>
        </motion.div>
      </section>

      {/* projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-16">
        <h2 className="text-2xl sm:text-3xl font-semibold">Featured <Accent>Projects</Accent></h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}
        </div>
      </section>

      {/* About */}
      <section id="About" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-rose-600/20 p-8 backdrop-blur">
          <h3 className="text-xl sm:text-2xl font-semibold">About <Accent>me</Accent></h3>
          <div className="mt-4 flex flex-wrap gap-3">
           <h3>With 7 years in IT , I transitioned into software development, driven by the challenge of solving problems with code and the creativity of building products from the ground up. 
            I earned my Associate’s degree in Computer Programming from Lone Star College, where I built a strong foundation in programming concepts and software design. 
            Through Merit America, I further sharpened my skills in Java, SQL, Spring Boot, PostgreSQL, JUnit, and Git, applying them to real-world projects through Pair Programming and Capstone development.
            Along the way, I expanded into front-end development, building responsive, user-friendly applications with React, Tailwind CSS, HTML, CSS, and JavaScript. 
            I enjoy creating interfaces that feel intuitive and seamless, while ensuring they integrate smoothly with scalable backend systems.
            Today, I thrive on building scalable applications, designing clean user experiences, and crafting efficient, maintainable code. 
            Whether it’s backend logic in Java or front-end development with React, I enjoy turning complex requirements into reliable, engaging solutions.
            </h3>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-rose-600/20 p-8 backdrop-blur">
          <h3 className="text-xl sm:text-2xl font-semibold">Let’s build something <Accent>great</Accent></h3>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="mailto:innocentclarens@gmail.com" className="rounded-xl bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-white">Email</a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="rounded-xl px-5 py-2.5 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/10">GitHub</a>
            <a href="https://www.linkedin.com/in/rinaldi-innocent/" target="_blank" rel="noreferrer" className="rounded-xl px-5 py-2.5 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/10">LinkedIn</a>
          </div>
        </div>
      </section>

      

      <footer className="border-t border-white/10 py-8 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Rinaldi Innocent
      </footer>
    </div>
  );
}
