import React from "react";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import "./projects.css";
import img1 from "../../Assets/refinery.jpeg";
import img2 from "../../Assets/tristar.png";
import img3 from "../../Assets/honeywell.png";
import img4 from "../../Assets/anggerik.png";

const Projects = () => {
  const data1 = [
    "ONGC 98/2 Offshore Facility",
    "ONGC Sagar Vijay Drillship/Rig",
    "ONGC MHN Offshore Platform",
    "ONGC Sagar Samrat Drilling Rig",
    "ONGC NQD/ICP Revamp Project",
  ];
  const data2 = [
    "ONGC 98/2 Offshore Facility",
    "ONGC HRD Wellhead Platform",
    "GSPC Well head Platform",
    "GSPC Process Platform",
    "ONGC LEWPP 1 & 2",
  ];
  const data3 = [
    "ONGC 98/2 Offshore Facility",
    "ONGC BPA/BPB Offshore Platform",
    "ONGC B 193 Offshore Platform",
    "ONGC MSP Offshore Platform",
    "ONGC ICPR Offshore Platform",
  ];
  const data4 = [
    "ONGC 98/2 Offshore Facility",
    "Vedanta Barmer Project",
    "City Gas distribution projects",
    "Coal Bed Methane Project",
    "ONGC offshore SHW Project",
    "ONGC offshore LEWPP 1& 2",
  ];
  return (
    <div className="projects_pg">
      <div className="hero_projects_pg">
        <div className="hero_overlay_projects_pg">
          <h1>Our Projects</h1>
        </div>
      </div>
      <div className="projects_pg_container">
        <h1>PROJECTS</h1>
        <div className="projects_pg_card_container">
          <ProjectCard
            img={img1}
            title="Appleton Emerson Electric"
            data={data1}
          />
          <ProjectCard
            img={img2}
            title="Tri-Star Industries Pte Ltd"
            data={data2}
          />
          <ProjectCard
            img={img3}
            title="Honeywell Automation India Ltd"
            data={data3}
          />
          <ProjectCard
            img={img4}
            title="Anggerik Laksana India Pvt Ltd"
            data={data3}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
