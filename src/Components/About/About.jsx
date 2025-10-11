import React, { useRef } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/profile_img.png';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/reactjs.png';
import mongoDB from '../../assets/mongoDB.png';
import django from '../../assets/django.png';
import bootstrap from '../../assets/bootstrap.jpg';
import figma from '../../assets/figma.png';
import photoshop from '../../assets/photoshop.png';
import canva from '../../assets/canva.jpg';

const About = () => {
  return (
    <div id="about" className='about'>
    <div className="about-title">
      <h1>About Me</h1>
      <img className="about-pattern" src={theme_pattern} alt="" />
    </div>
        <div className="about-sections">
          <div className="about-left">
            <img className="about-profile" src={profile_img} alt="Profile" />
            </div>
            <div className="about-right">
              <div className="about-para">
                <p>I am an aspiring UI/UX Designer and React.js Developer passionate about creating intuitive and responsive web applications. I have gained hands-on experience through projects, practice, and continuous learning. I am eager to apply my skills, grow professionally, and contribute to impactful digital products.</p>
                <p>My passion for frontend development is reflected in my enthusiasm for learning and the dedication I bring to every project and practice task I take on.</p>
                </div>
                <div className="about-skills">
                  {/* Interactive horizontal scroller: move cursor inside the container to reveal skills */}
                  {/** We'll map cursor X position to scrollLeft of the scroller */}
                  <SkillsScroller />
                </div>
            </div>
        </div>
        <div className="about-achievements">
          <div className="about-achievement">
            <h1>1+</h1>
            <p> YEARS OF EXPERIENCE </p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>10+</h1>
            <p> PROJECTS </p>
          </div>
          <hr />
          <div className="about-achievement">
            <h1>6</h1>
            <p> CERTIFICATIONS </p>
          </div>
          <hr />
        </div>
    </div>
  )
}

export default About

function SkillsScroller(){
  const scrollerRef = useRef(null);

  function handleMove(e){
    const scroller = scrollerRef.current;
    if(!scroller) return;
    const rect = scroller.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    // cursor position relative to scroller (0 .. width)
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    // map x to scrollLeft (0 .. maxScroll)
    const maxScroll = scroller.scrollWidth - rect.width;
    scroller.scrollLeft = (x / rect.width) * maxScroll;
  }

  function handleLeave(){
    // optional: smooth return to start or keep position
  }

  const skills = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javascript },
    { name: 'React Js', icon: react },
    { name: 'Mongo DB', icon: mongoDB },
    { name: 'Django', icon: django },
    { name: 'Bootstrap', icon: bootstrap },
    { name: 'Figma', icon: figma },
    { name: 'Photoshop', icon: photoshop },
    { name: 'Canva', icon: canva },
  ];

  return (
    <div
      className="skills-scroller"
      ref={scrollerRef}
      onMouseMove={handleMove}
      onTouchMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="skills-track">
        {skills.map((s, i) => (
          <div
            className="skill-card"
            key={i}
            onMouseMove={(e) => handleCardMove(e)}
            onTouchMove={(e) => handleCardMove(e)}
            onMouseLeave={(e) => handleCardLeave(e)}
            onTouchEnd={(e) => handleCardLeave(e)}
          >
            {s.icon && (
              <img src={s.icon} alt={s.name} className="skill-icon" />
            )}
            <div className="skill-name">{s.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function handleCardMove(e){
  const el = e.currentTarget || e.target;
  // find the nearest .skill-card element
  const card = el.closest ? el.closest('.skill-card') : el;
  if(!card) return;
  const rect = card.getBoundingClientRect();
  const clientX = e.touches ? e.touches[0].clientX : e.clientX;
  const clientY = e.touches ? e.touches[0].clientY : e.clientY;
  const x = clientX - rect.left - rect.width / 2;
  const y = clientY - rect.top - rect.height / 2;
  const maxRotate = 8; // degrees
  const rotateY = (x / (rect.width / 2)) * maxRotate;
  const rotateX = -(y / (rect.height / 2)) * maxRotate;
  // apply transform including hover lift/scale
  card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.03)`;
}

function handleCardLeave(e){
  const el = e.currentTarget || e.target;
  const card = el.closest ? el.closest('.skill-card') : el;
  if(!card) return;
  // reset to default so CSS hover can handle state
  card.style.transform = '';
}
