import React from "react";
import "./opening.css";
import dropdown from "../../Assets/dropdown.png";

const Openings = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const box = document.getElementsByClassName("opening");
    console.log(box.length);
    for (var i = 0; i < box.length; i++) {
      box[i].classList.toggle("extended");
    }
  };

  return (
    <div className="opening" onClick={handleClick}>
      <h3>{props.title}</h3>
      <img src={dropdown} alt="" srcset="" />
      <hr></hr>
      <h3>The Opportunity</h3>
      {props.opp.map((d) => {
        return <p>{d}</p>;
      })}
      <h3 className="opening_heading">Key Responsibility</h3>
      <ul>
        {props.resp.map((d) => {
          return <li>{d}</li>;
        })}
      </ul>
      <h3 className="opening_heading">You Must Have</h3>
      <ul>
        {props.must.map((d) => {
          return <li>{d}</li>;
        })}
      </ul>
      <h3 className="opening_heading">We Value</h3>
      <ul>
        {props.value.map((d) => {
          return <li>{d}</li>;
        })}
      </ul>
      <h3 className="opening_heading">Qualifications</h3>
      <ul>
        {props.qualification.map((d) => {
          return <li>{d}</li>;
        })}
      </ul>
      <h3 className="opening_heading">Location</h3>
      <p>{props.location}</p>
    </div>
  );
};

export default Openings;
