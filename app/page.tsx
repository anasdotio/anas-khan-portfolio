"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const profileImage = "/anas-khan-profile.png";

const projects = [
  {
    title: "AI Interview Report Generator",
    description:
      "AI-powered interview preparation that analyzes resumes and job descriptions to identify skill gaps, generate personalized interview questions, and create a 7-day adaptive preparation roadmap.",
    tags: "AI · Resume analysis · Adaptive preparation",
    github: "https://github.com/anasdotio/Ai-Interview-Report-Generator",
  },
  {
    title: "RAG AI Document Chatbox",
    description:
      "An intelligent document assistant that uses retrieval-augmented generation to help people understand and work with their documents.",
    tags: "RAG · Vector database · REST APIs",
    github: "",
  },
];

const skillGroups = [
  { label: "01 / FRONTEND", title: "Interfaces", skills: ["React.js", "Tailwind CSS"] },
  { label: "02 / BACKEND", title: "Systems", skills: ["Node.js", "Express", "REST APIs"] },
  { label: "03 / DATA", title: "Foundations", skills: ["MongoDB", "Vector Database"] },
  { label: "04 / INTELLIGENCE", title: "AI products", skills: ["AI / RAG", "AWS"] },
];

function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg aria-hidden="true" className="home-arrow" fill="none" viewBox="0 0 24 24">
      {down ? (
        <path d="M12 4v15m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      ) : (
        <path d="M5 19 19 5M8 5h11v11" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      )}
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" className="menu-icon" fill="none" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

    intro
      .from(".home-nav", { y: -20, duration: 0.7 })
      .from(".home-meta, .home-side-note, .home-side-mark", { y: 14, duration: 0.7, stagger: 0.08 }, "-=.35")
      .from(".home-portrait", { scale: 0.92, duration: 1.2 }, "-=.45")
      .from(".home-kicker, .home-title, .home-description, .home-actions, .home-footer", { y: 24, duration: 0.8, stagger: 0.1 }, "-=.6");

    gsap.to(".home-portrait", {
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const revealElements = gsap.utils.toArray<HTMLElement>(
      ".portfolio-section-label, .home-continuation h2, .portfolio-section h2, .portfolio-contact h2, .portfolio-card, .timeline article, .education-list p, .skills span, .portfolio-contact .contact-link",
    );

    revealElements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    gsap.utils.toArray<HTMLElement>(".portfolio-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        { rotateX: 5 },
        {
          rotateX: 0,
          duration: 1,
          delay: index * 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    ScrollTrigger.refresh();

    return () => {
      intro.kill();
      gsap.killTweensOf(".home-portrait");
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="home-page">
      <header className="home-nav">
        <a className="home-wordmark" href="#home" aria-label="Anas Khan home">Anas Khan</a>
        <nav className="home-links" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="https://www.linkedin.com/in/anaskhan12" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="home-talk" href="mailto:hello@anasdev.in">Let&apos;s talk <Arrow /></a>
        </nav>
        <a className="home-menu" href="mailto:hello@anasdev.in" aria-label="Contact">
          <MenuIcon />
        </a>
      </header>

      <section className="home-hero" id="home" aria-labelledby="home-title">
        <div className="home-meta home-meta-left"><span /> FULL STACK DEVELOPER · AI BUILDER</div>
        <div className="home-meta home-meta-right">BASED IN INDIA · THINKING BEYOND</div>

        <div className="home-side-note">
          <span className="home-side-index">01 / PRESENCE</span>
          <strong>+</strong>
          <span>ENGINEERING<br />PRODUCTS<br />HUMAN CONNECTION</span>
        </div>

        <div className="home-portrait-wrap">
          <div className="home-portrait-glow" />
          <Image
            className="home-portrait"
            src={profileImage}
            alt="Anas Khan"
            width={600}
            height={600}
            priority
          />
        </div>

        <div className="home-copy">
          <p className="home-kicker">A HUMAN PERSPECTIVE ON TECHNOLOGY</p>
          <h1 className="home-title" id="home-title">Anas Khan</h1>
          <p className="home-description">
            I build products, reliable systems,
            <br className="desktop-break" /> and thoughtful digital experiences.
          </p>
          <div className="home-actions">
            <a className="home-primary-action" href="#work">Explore my work <Arrow down /></a>
            <a className="home-secondary-action" href="mailto:hello@anasdev.in">Start a conversation <Arrow /></a>
          </div>
        </div>

        <div className="home-footer">
          <span>SCROLL TO DISCOVER <Arrow down /></span>
          <span>BUILDING WITH INTENTION · 2026</span>
        </div>
      </section>
      <section className="home-continuation" id="work" aria-labelledby="continuation-title">
        <p className="home-kicker">02 / THE WORK, MULTIPLIED</p>
        <h2 id="continuation-title">Building useful things<br /><em>with intention.</em></h2>
        <a className="home-secondary-action" href="#contact">Start a conversation <Arrow /></a>
      </section>
      <section className="portfolio-section" aria-labelledby="projects-title">
        <div className="portfolio-section-label">03 / SELECTED WORK</div>
        <h2 id="projects-title">Products that solve<br /><em>real problems.</em></h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="portfolio-card" key={project.title}>
              <span className="portfolio-card-number">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="portfolio-card-tags">{project.tags}</span>
              {project.github && <a href={project.github} target="_blank" rel="noreferrer">View on GitHub <Arrow /></a>}
            </article>
          ))}
        </div>
      </section>
      <section className="portfolio-section about-section" id="about" aria-labelledby="about-title">
        <div className="portfolio-section-label">04 / ABOUT THE BUILDER</div>
        <div className="about-grid">
          <div className="about-heading">
            <p className="about-kicker">A little context</p>
            <h2 id="about-title">Curious by<br /><em>default.</em></h2>
            <span className="about-signature">ANAS KHAN · FULL STACK / AI</span>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I build at the intersection of thoughtful interfaces, dependable
              systems, and emerging AI.
            </p>
            <p>
              My approach is simple: understand the problem, make the
              experience clear, and build the foundation properly. I enjoy
              moving between frontend detail and backend architecture to turn
              complicated ideas into useful tools.
            </p>
            <div className="about-principles">
              <span><strong>01</strong> Clarity over complexity</span>
              <span><strong>02</strong> Systems that last</span>
              <span><strong>03</strong> Always learning</span>
            </div>
          </div>
        </div>
        <div className="timeline">
          <div className="timeline-heading"><span>THE PATH SO FAR</span><span>EXPERIENCE / CONTRIBUTION</span></div>
          <article><span>2022</span><div><h3>Frontend Developer Intern</h3><p>Featherone · Jul 2022 – Aug 2022</p><small>Worked with React.js and Tailwind CSS while learning the foundations of modern frontend development.</small></div><b>↗</b></article>
          <article><span>TECHFEST</span><div><h3>Student Coordinator</h3><p>Technical events and workshops</p><small>Led a team of 20+ students to organize the annual techfest for 300+ participants.</small></div><b>↗</b></article>
        </div>
      </section>
      <section className="portfolio-section education-section" aria-labelledby="education-title">
        <div className="portfolio-section-label">05 / EDUCATION &amp; STACK</div>
        <div className="education-grid">
          <div>
            <h2 id="education-title">The foundation<br /><em>keeps growing.</em></h2>
            <div className="education-list">
              <p><strong>Bachelor of Technology in Computer Science &amp; Engineering</strong><span>Completed · 2026</span></p>
              <p><strong>Diploma in Computer Science &amp; Engineering</strong><span>Completed · 2023</span></p>
            </div>
          </div>
          <div className="skills-panel">
            <div className="skills-panel-header">
              <span>THE TOOLKIT</span>
              <strong>09 <small>CORE SKILLS</small></strong>
            </div>
            <div className="skill-groups">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.label}>
                  <span className="skill-group-label">{group.label}</span>
                  <h3>{group.title}</h3>
                  <div className="skills">
                    {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                  <Arrow />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio-contact" id="contact" aria-labelledby="contact-title">
        <div className="portfolio-section-label">06 / GET IN TOUCH</div>
        <div className="contact-grid">
          <div>
            <h2 id="contact-title">Let&apos;s build<br /><em>something useful.</em></h2>
            <p className="contact-intro">Have a product idea, a problem to solve, or just want to say hello? Send a note and I&apos;ll get back to you.</p>
            <div className="social-links">
              <a href="https://github.com/anasdotio" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
              <a href="https://www.linkedin.com/in/anaskhan12/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href="https://www.instagram.com/anas_thakur_841/" target="_blank" rel="noreferrer">Instagram <Arrow /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={(event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
            const body = encodeURIComponent(`Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`);
            window.location.href = `mailto:hello@anasdev.in?subject=${subject}&body=${body}`;
            setSubmitted(true);
          }}>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" required type="email" placeholder="you@example.com" /></label>
            <label>Message<textarea name="message" required placeholder="Tell me a little about your idea" rows={5} /></label>
            <button type="submit">Send message <Arrow /></button>
            {submitted && <p className="form-status">Your email app should open with the message ready to send.</p>}
          </form>
        </div>
      </section>
      <footer className="site-footer">
        <span>© 2026 Anas Khan</span>
        <span>Built with intention</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}
