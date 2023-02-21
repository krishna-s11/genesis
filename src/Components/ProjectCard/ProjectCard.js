import React from "react";
import "./projectCard.css";

const ProjectCard = ({ img, title, data }) => {
  return (
    <div className="project_card">
      <img src={img} alt="" srcset="" />
      <h3>{title}</h3>
      <ul>
        {data.map((data) => {
          return <li>{data}</li>;
        })}
      </ul>
    </div>
  );
};

export default ProjectCard;
