import React from 'react';
import './Projects.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';

const Projects = () => {
  return (
    <div id="work" className="Projects">
      
      <div className="Projects-title">
        <h1>My Projects</h1>
        <img src={theme_pattern} alt="Pattern" />
      </div>

      <div className="Projects-container">
        {mywork_data.map((work, index) => (
          <div className="project-card" key={index}>
            <img src={work.w_img} alt={work.w_name} className="project-image" />
            <div className="project-info">
              <h2>{work.w_name}</h2>
              <p>{work.w_description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="Projects-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow Icon" />
      </div>
    </div>
  );
};

export default Projects;
