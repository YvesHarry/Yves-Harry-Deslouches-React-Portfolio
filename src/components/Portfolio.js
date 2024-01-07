import React from "react";
import Project from "./Project";
import WorkDayPlanner from "../img/surf.png";
import WebAPI from "../img/pastel.png";
import Weather from "../img/showcase.jpg";
import YHDTechBlog from "../img/calculator.png";
import StackDev from "../img/LED.png";
import CritterSitter from "../img/run.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "YHD' Tech Blog",
              description: "CMS-Style Model View Controller Blog",
              imgSrc: YHDTechBlog,
              deployedLink:
                "https://yhd-tech-blog-9c7e712b6bfc.herokuapp.com/",
              githubLink:
                "https://git.heroku.com/yhd-tech-blog.git",
            },
            {
              title: "Workflow",
              description: "Progressive Web App",
              imgSrc: StackDev,
              deployedLink:
                "https://workflow-oj8s.onrender.com/",
              githubLink:
                "https://github.com/project3-team3/workflow-app/tree/main",
            },
            {
              title: "Online Workday Planner",
              description: "Third-Party API Sceduler ft. Day.js",
              imgSrc: WorkDayPlanner,
              deployedLink:
                "https://yvesharry.github.io/work-day-calendar/",
              githubLink:
                "https://github.com/YvesHarry/work-day-calendar.git",
            },
            {
              title: "Java Script: WEB API Quiz",
              description: "Dynamically updated HTML & CSS Web API quiz game.",
              imgSrc: WebAPI,
              deployedLink:
                "https://yvesharry.github.io/Quiz/",
              githubLink:
                "https://github.com/YvesHarry/Quiz.git",
            },
            {
              title: "Critter-Sitter",
              description: "Interactive Front-End Application Guide.",
              imgSrc: CritterSitter,
              deployedLink:
                "https://desolate-cliffs-01368-b072fa39f7d0.herokuapp.com/",
              githubLink:
                "https://github.com/YvesHarry/project_2_critter-sitter.git",
            },
            {
              title: "Weather Dashboard",
              description: "Server-Side APIs: (5) Day Weather Dashboard.",
              imgSrc: Weather,
              deployedLink:
                "https://yvesharry.github.io/Weather-App/",
              githubLink:
                "https://github.com/YvesHarry/Weather-App.git",
            },
          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;
