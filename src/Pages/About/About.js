import React from "react";
import "./about.css";
import about from "../../Assets/about.jpg";

const About = () => {
  return (
    <div className="about_pg">
      <div className="hero_about_pg">
        <div className="hero_overlay_about_pg">
          <h1>Genesis Energy</h1>
        </div>
      </div>
      <div className="content_about_pg">
        <h1>About us</h1>
        <div style={{ display: "flex" }} className="about_us_pg_container">
          <div className="content_about_pg_left">
            <p>
              Established under the aegis of industry stalwarts having more than
              40 years of industry experience and exposure to all aspects of
              product and project lifecycle. Oil and Gas industry demands
              flexibility of operations and dexterity. Genesis Energy has
              rapidly established a reputation for offering dynamic solutions
              with adroitness.
            </p>
            <p>
              We offer solutions with direct / indirect support to end users,
              Consultants, Designers, EPC Contractors, Construction sites and
              Yards like ONGC, L&T, EIL, BHEL, Hyundai Heavy Industries, IOCL,
              Reliance, Cairn Energy, GSPC, HOEC and J Ray McDermott, etc
            </p>
            <p>
              Our mission is to exceed customer expectation by aligning to their
              needs by providing comprehensive solution including industry
              leading products, value added services and cutting-edge
              technologies and To be the world’s most trusted solution provider
              for Energy Sector
            </p>
          </div>
          <div className="content_about_pg_right">
            <img src={about} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
