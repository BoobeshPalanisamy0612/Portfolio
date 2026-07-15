import { useEffect, useRef, useState } from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";

/* =========================
   React Project Images
========================= */

import portfolioModal from "../../assets/portfoliomodal.png";
import carrentalModal from "../../assets/carrentalmodal.png";
import weatherModal from "../../assets/weathermodal.png";
import emotionModal from "../../assets/emotionmodal.png";
import lendtrackModal from "../../assets/lendtrackmodal.png";
import chatbotModal from "../../assets/chatbotmodal.png";

/* =========================
   UI / UX Images
========================= */

// Food Delivery
import FoodApp from "../../assets/uiux/Food-app.png";
import FoodModal from "../../assets/uiux/FoodModal.png";

// Lent Track
import LentTrackApp from "../../assets/uiux/Lenttrack-app.png";
import LentTrackModal from "../../assets/uiux/LenttrackModal.png";

// Travel
import TravelApp from "../../assets/uiux/Travel-app.png";
import TravelModal from "../../assets/uiux/TravelModal.png";

// Fitness
import FitnessTrackerApp from "../../assets/uiux/FitnessTracker-app.png";
import FitnessTrackerModal from "../../assets/uiux/FitnessTrackerModal.png";

// Health Booking
import HealthBookingApp from "../../assets/uiux/HealthBooking-app.png";
import HealthBookingModal from "../../assets/uiux/HealthBookingModal.png";

// Weather
import WeatherPredictionApp from "../../assets/uiux/WeatherPrediction-app.png";
import WeatherPredictionModal from "../../assets/uiux/WeatherPredictionModal.png";

/* =========================
   React Projects
========================= */

const reactProjects = [
  {
    id: 1,
    title: "Weather Prediction AI",
    image: weatherModal,
    modalImage: weatherModal,
    description:
      "A modern weather prediction dashboard featuring real-time weather updates, interactive forecasts, and location-based search. Designed with a focus on usability, performance, and an elegant user experience.",
    demo: "https://boobesh-weather.vercel.app/",
    github:
      "https://github.com/BoobeshPalanisamy0612/Weather-Prediction",
  },
  {
    id: 2,
    title: "LendTrack",
    image: lendtrackModal,
    modalImage: lendtrackModal,
    description:
      "A modern loan management dashboard that simplifies tracking loans, repayments, borrowers, and financial insights through a clean, responsive, and user-friendly interface.",
    demo: "https://boobesh-lend-track.vercel.app/",
    github:
      "https://github.com/BoobeshPalanisamy0612/LendTrack",
  },
  {
    id: 3,
    title: "Emotion Detection",
    image: emotionModal,
    modalImage: emotionModal,
    description:
      "A responsive AI application that uses facial analysis to recognize emotions such as happiness, sadness, anger, and surprise, presented through a visually engaging dashboard.",
    demo:
      "https://boobesh-emotion-detection-ai.vercel.app/",
    github:
      "https://github.com/BoobeshPalanisamy0612/emotion-detection",
  },
  {
    id: 4,
    title: "Car Rental",
    image: carrentalModal,
    modalImage: carrentalModal,
    description:
      "A responsive car rental platform designed to simplify vehicle browsing, booking management, and rental analytics while delivering a seamless user experience.",
    demo:
      "https://boobesh-car-rental-website.vercel.app/",
    github:
      "https://github.com/BoobeshPalanisamy0612/car-rental-website",
  },
  {
    id: 5,
    title: "Portfolio",
    image: portfolioModal,
    modalImage: portfolioModal,
    description:
      "A sleek and interactive portfolio that reflects my passion for creating intuitive user experiences and building high-performance web applications using modern technologies.",
    demo:
      "https://boobeshpalanisamy0612.github.io/Portfolio/",
    github:
      "https://github.com/BoobeshPalanisamy0612/Portfolio",
  },
  {
    id: 6,
    title: "AI Chatbot",
    image: chatbotModal,
    modalImage: chatbotModal,
    description:
      "A responsive chatbot solution that combines natural language processing with a modern UI to deliver fast, accurate, and engaging conversations across multiple use cases.",
    demo:
      "https://boobesh-chat-bot-leo-ai.vercel.app/",
    github: "#",
  },
];

/* =========================
   UI / UX Projects
========================= */

const uiuxProjects = [
  {
    id: 1,
    title: "Food Delivery UI",
    image: FoodApp,
    modalImage: FoodModal,
    description:
      "A visually appealing and responsive food delivery UI designed in Figma, emphasizing usability, accessibility, and a smooth ordering experience through contemporary design principles.",
    figma:
      "https://www.figma.com/design/ihVKiAF2ybemN2fSTGsR0P/Rent-Wheels?t=HN6K5izjrESMhwmt-0",
  },
  {
    id: 2,
    title: "Lend Track UI",
    image: LentTrackApp,
    modalImage: LentTrackModal,
    description:
      "A user-centric finance dashboard UI created in Figma to simplify loan management, borrower details, and repayment monitoring through a responsive and visually appealing design.",
    figma:
      "https://www.figma.com/design/VKOhnbgQOyu85xdn68IW7B/Lendtrack",
  },
  {
    id: 3,
    title: "Travel App UI",
    image: TravelApp,
    modalImage: TravelModal,
    description:
      "A responsive travel app concept designed in Figma with interactive layouts, personalized recommendations, and a streamlined user journey from search to booking.",
    figma:
      "https://www.figma.com/design/yYZqbPPvK0eFcpGOFbnyh0/Travel-app",
  },
  {
    id: 4,
    title: "Fitness Tracker",
    image: FitnessTrackerApp,
    modalImage: FitnessTrackerModal,
    description:
      "A modern fitness tracker UI designed in Figma, featuring activity monitoring, workout progress, and health insights through a clean, intuitive, and engaging interface.",
    figma:
      "https://www.figma.com/design/qQPw1YQdfuT5JlW7WoumjT/FitX-App",
  },
  {
    id: 5,
    title: "Health Booking",
    image: HealthBookingApp,
    modalImage: HealthBookingModal,
    description:
      "A responsive healthcare booking interface created in Figma with streamlined appointment management, doctor profiles, and an engaging, patient-friendly design.",
    figma:
      "https://www.figma.com/design/XI7bJ8zpvg3m6vdBlQVepz/Health-Booking",
  },
  {
    id: 6,
    title: "Weather Prediction",
    image: WeatherPredictionApp,
    modalImage: WeatherPredictionModal,
    description:
      "A modern weather prediction UI designed in Figma, featuring real-time forecasts, interactive weather insights, and a clean, intuitive interface for a seamless user experience.",
    figma:
      "https://www.figma.com/design/u2Hl3wZwLouEQiA3q7mX8Y/Weather-Prediction",
  },
];

/* =========================
   COMPONENT
========================= */

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsRef = useRef([]);
  const visibleCount = 3;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reactProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleProjects = (projects) => {
    const visible = [];

    for (let i = 0; i < visibleCount; i++) {
      visible.push(
        projects[(currentIndex + i) % projects.length]
      );
    }

    return visible;
  };

  const visibleReact = getVisibleProjects(reactProjects);
  const visibleUIUX = getVisibleProjects(uiuxProjects);

  const activeReactDot =
    currentIndex < reactProjects.length / 3
      ? 0
      : currentIndex < (reactProjects.length * 2) / 3
      ? 1
      : 2;

  const activeUIUXDot =
    currentIndex < uiuxProjects.length / 3
      ? 0
      : currentIndex < (uiuxProjects.length * 2) / 3
      ? 1
      : 2;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [currentIndex]);

  return (
    <div id="work" className="Projects">

      {/* =========================
          TITLE
      ========================= */}
      <div className="Projects-title">
        <h1>My Projects</h1>
        <img
          src={theme_pattern}
          alt=""
          className="title-pattern"
        />
      </div>

      {/* =========================
          REACT PROJECTS
      ========================= */}

      <h2 className="project-heading">
        React JS Projects
      </h2>

      <div className="projects-grid">

        {visibleReact.map((project, i) => (

          <div
            key={`react-${project.id}`}
            ref={(el) => (cardsRef.current[i] = el)}
            className="project-card show"
            onClick={() => setSelectedProject(project)}
          >

            <div className="shine"></div>

            <div className="card-media">

              <div className="laptop-mockup">

                <div className="laptop-screen">

                  <div className="laptop-screen-inner">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-media-img"
                    />

                  </div>

                </div>

                <div className="laptop-base"></div>

              </div>

            </div>

            <div className="card-overlay">

              <span className="card-overlay-title">
                {project.title}
              </span>

            </div>

          </div>

        ))}

      </div>

      <div className="carousel-dots">

        {[0, 1, 2].map((dot) => (

          <span
            key={dot}
            className={`dot ${
              activeReactDot === dot ? "active" : ""
            }`}
          />

        ))}

      </div>

      {/* =========================
          UI / UX PROJECTS
      ========================= */}

      <h2 className="project-heading">
        UI / UX Projects
      </h2>

      <div className="projects-grid">

        {visibleUIUX.map((project, i) => (

          <div
            key={`uiux-${project.id}`}
            ref={(el) => (cardsRef.current[visibleCount + i] = el)}
            className="project-card show"
            onClick={() => setSelectedProject(project)}
          >

            <div className="shine"></div>

            <div className="card-media">

              <div className="laptop-mockup">

                <div className="laptop-screen">

                  <div className="laptop-screen-inner">

                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-media-img"
                    />

                  </div>

                </div>

                <div className="laptop-base"></div>

              </div>

            </div>

            <div className="card-overlay">

              <span className="card-overlay-title">
                {project.title}
              </span>

            </div>

          </div>

        ))}

      </div>

      <div className="carousel-dots">

        {[0, 1, 2].map((dot) => (

          <span
            key={dot}
            className={`dot ${
              activeUIUXDot === dot ? "active" : ""
            }`}
          />

        ))}

      </div>

      {/* =========================
          PROJECT MODAL
      ========================= */}

      {selectedProject && (

        <div
          className="project_modal_overlay"
          onClick={() => setSelectedProject(null)}
        >

          <div
            className="project_modal_container"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Left Side - Project Preview */}
            <div className="project_modal_left">
              <img
                src={selectedProject.modalImage}
                alt={selectedProject.title}
                className="project_modal_image"
              />
            </div>

            {/* Right Side - Project Details */}
            <div className="project_modal_right">

              <button
                className="project_modal_close"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>

              <h2 className="project_modal_title">
                {selectedProject.title}
              </h2>

              <p className="project_modal_desc">
                {selectedProject.description}
              </p>

              <div className="project_modal_buttons">

                {/* React Projects */}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_modal_btn"
                  >
                     Live Demo
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_modal_btn"
                  >
                     GitHub
                  </a>
                )}

                {/* UI / UX Projects */}
                {selectedProject.figma && (
                  <a
                    href={selectedProject.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project_modal_btn"
                  >
                     View in Figma
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