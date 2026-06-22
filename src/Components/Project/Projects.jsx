import { useEffect, useState } from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";

// React Images
import weather from "../../assets/carrental.png";
import portfolio from "../../assets/carrental.png";
import emotion from "../../assets/carrental.png";
import ecommerce from "../../assets/carrental.png";
import task from "../../assets/carrental.png";
import movie from "../../assets/carrental.png";

// UIUX Images
import food from "../../assets/carrental.png";
import bank from "../../assets/carrental.png";
import travel from "../../assets/carrental.png";
import fitness from "../../assets/carrental.png";
import learning from "../../assets/carrental.png";
import restaurant from "../../assets/carrental.png";

/* =========================
   DATA
========================= */

const reactProjects = [
  {
    id: 1,
    title: "Weather App",
    image: weather,
    description: "Weather forecasting app using React and API.",
    tech: ["React", "API"],
    demo: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: portfolio,
    description: "Personal portfolio with animations.",
    tech: ["React", "CSS"],
    demo: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Emotion Detection",
    image: emotion,
    description: "AI emotion detection app.",
    tech: ["React", "AI"],
    demo: "#",
    github: "#",
  },
  {
    id: 4,
    title: "E-Commerce Store",
    image: ecommerce,
    description: "Shopping cart system.",
    tech: ["React", "Node"],
    demo: "#",
    github: "#",
  },
  {
    id: 5,
    title: "Task Manager",
    image: task,
    description: "Task CRUD app.",
    tech: ["React", "Firebase"],
    demo: "#",
    github: "#",
  },
  {
    id: 6,
    title: "Movie Finder",
    image: movie,
    description: "Movie search app.",
    tech: ["React", "API"],
    demo: "#",
    github: "#",
  },
];

const uiuxProjects = [
  {
    id: 1,
    title: "Food Delivery UI",
    image: food,
    description: "Food ordering UI design.",
    figma: "#",
  },
  {
    id: 2,
    title: "Banking Dashboard",
    image: bank,
    description: "Bank UI dashboard.",
    figma: "#",
  },
  {
    id: 3,
    title: "Travel App",
    image: travel,
    description: "Travel booking UI.",
    figma: "#",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    image: fitness,
    description: "Fitness UI design.",
    figma: "#",
  },
  {
    id: 5,
    title: "Learning Platform",
    image: learning,
    description: "E-learning UI.",
    figma: "#",
  },
  {
    id: 6,
    title: "Restaurant Website",
    image: restaurant,
    description: "Restaurant UI design.",
    figma: "#",
  },
];

/* =========================
   COMPONENT
========================= */

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const [index, setIndex] = useState(0);
  const itemsPerPage = 2;

  /* =========================
     AUTO CAROUSEL
  ========================= */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev + itemsPerPage >= reactProjects.length
          ? 0
          : prev + itemsPerPage
      );
    }, 3000); // Change to 30000 for 30 sec

    return () => clearInterval(interval);
  }, []);

  const visibleReact = reactProjects.slice(
    index,
    index + itemsPerPage
  );

  const visibleUIUX = uiuxProjects.slice(
    index,
    index + itemsPerPage
  );

  return (
    <div id="work" className="Projects">

      {/* ================= TITLE ================= */}
      <div className="Projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="" className="title-pattern" />
      </div>

      {/* ================= REACT PROJECTS ================= */}
      <h2 className="project-heading">React JS Projects</h2>

      <div className="projects-grid">
        {visibleReact.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelected(project)}
          >
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {Array.from({
          length: Math.ceil(
            reactProjects.length / itemsPerPage
          ),
        }).map((_, i) => (
          <span
            key={i}
            className={`dot ${
              Math.floor(index / itemsPerPage) === i
                ? "active"
                : ""
            }`}
            onClick={() => setIndex(i * itemsPerPage)}
          />
        ))}
      </div>

      {/* ================= UI UX PROJECTS ================= */}
      <h2 className="project-heading">UI / UX Projects</h2>

      <div className="projects-grid">
        {visibleUIUX.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setSelected(project)}
          >
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {Array.from({
          length: Math.ceil(
            uiuxProjects.length / itemsPerPage
          ),
        }).map((_, i) => (
          <span
            key={i}
            className={`dot ${
              Math.floor(index / itemsPerPage) === i
                ? "active"
                : ""
            }`}
            onClick={() => setIndex(i * itemsPerPage)}
          />
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {selected && (
        <div
          className="modal-overlay"
          onClick={() => setSelected(null)}
        >
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <img
              src={selected.image}
              alt={selected.title}
              className="modal-image"
            />

            <div className="modal-content">
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>

              {selected.tech && (
                <div className="tech-stack">
                  {selected.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              )}

              <div className="modal-links">
                {selected.tech ? (
                  <>
                    <a
                      href={selected.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>

                    <a
                      href={selected.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </>
                ) : (
                  <a
                    href={selected.figma}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Figma Design
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
