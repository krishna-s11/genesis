import React from "react";
import "./career.css";
import Openings from "../../Components/Openings/Openings";

const Career = () => {
  const opportunity = [
    {
      title: "APM Project Engineer",
      opp: [
        "Genesis energy is an implementation partner for delivering honeywell industrial software and we are looking for a Project Engineer who will be responsible for design, lead and execute Honeywell Asset Performance Management (APM) solutions implementation for Oil and Gas industry",
        "Honeywell is a leading provider of software offerings in the Process Industry which includes Oil and Gas, Refining, Petrochemicals, Paper, MMM industry. These offerings drive measurable business results for customers. The business is focused on outcome-based software solutions and engineering services, converting data into actions for the customer which enables greater reliability, safety and uptime & profitability. These solutions uniquely combine domain expertise and industry proven technology. Refer the link for further details on Honeywell offerings. https://www.honeywellforge.ai/us/en/industries/industrial",
      ],
      resp: [
        "Interface with Honeywell project team for delivery management",
        "Execute the technical delivery of the project right from design to closure.",
        "Develop design documents- FDS, DDS, test procedures and training manuals.",
        "Design and build performance and analytical models for new equipment types.",
        "Design and build models for process scenarios.",
        "Address customer issues on time by escalating to the right internal stakeholders",
        "Follow the Company defined standard practices and methods",
      ],
      must: [
        "3-5 years’ experience in designing and implementing APM/MES solutions for refining, petrochemical, mining, power, or other chemical industries",
        "Good understanding and knowledge of the unit operations and processes utilized in the process industries.",
        "Capability to build equipment/process performance models using thermodynamic and 1st principles.",
        "Experience in operations, performance monitoring, maintenance & diagnosis of failures for key operating equipment’s like Pumps, Compressors, Turbines, Heat Exchangers, Furnaces and similar rotary/static equipment.",
        "Good understanding of the Industry standards followed in APM space is an added advantage",
        "Working experience of R, Python or other Machine Learning tools is an added advantage",
        "Experience in writing SQL queries and stored procedures is an added advantage.",
        "Experience in implementing APM using Aspen M-Tell, GE Smart Signal, AVEVA APM, Expert Microsystems SureSense or similar APM solutions is an added advantage",
      ],
      value: [
        "Strong problem-solving mentality with a will to deliver results",
        "Critical thinker and process / result- oriented",
        "Experience & proven ability in analyzing / solutions for complex projects/issues",
        "Ability to work in fast-paced, dynamic environment with minimal supervision",
        "Fast learner and maintaining standardization & following execution processes.",
        "Manage customer expectation by understanding and appreciating the cultural differences",
        "Excellent presentation & Communication skills",
      ],
      qualification: [
        "BE/B.Tech/M.Tech in Mechanical, Chemical, Instrumentation.",
      ],
      location: "Flexible working location",
    },
    {
      title: "OTS Project Engineer",
      opp: [
        "Genesis energy is an implementation partner for delivering honeywell industrial software and we are looking for a Project Engineer  who will be responsible for design, lead  and execute Honeywell Operator Training Simulator (OTS) solutions implementation for Oil and Gas industry.",
        "Honeywell is a leading provider of software offerings in the Process Industry which includes Oil and Gas, Refining, Petrochemicals, Paper, MMM industry. These offerings drive measurable business results for customers. The business is focused on outcome-based software solutions and engineering services, converting data into actions for the customer which enables greater reliability, safety and uptime & profitability. These solutions uniquely combine domain expertise and industry proven technology. Refer the link for further details on Honeywell offerings. https://www.honeywellforge.ai/us/en/industries/industrial",
      ],
      resp: [
        "Responsible for executing OTS projects with project teams for end-to-end design for Refinery, Oil & Gas, Petrochemical, and other customers. ",
        "Support the development of functional and concept technical design specifications.",
        "Ensures implementation is done with respect to project standards and quality documents & final deliverable meets the functional specifications of the end user.",
        "Identify, advise, and incorporate modifications in simulation configuration.",
        "Should be able to anticipate the project risk and look for mitigation plan.",
        "Interface with project leads and customers for raising technical queries.",
        "Strong understanding of Refinery Process and & Critical Section. Having hands on Simulation experience in modelling Distillation columns, heat exchangers, rotating equipment, Reactors, Furnaces, Turbines etc.",
        "Participation in quality process reviews.",
        "Ensure completion of projects on schedule and within the allocated budget.",
        "Drive product improvement, productivity & Self skill enhancement.",
      ],
      must: [
        "At least 2+ years of experience in Simulation for refining/petrochemical process and minimum 2 yrs exp in Plant operations",
        "Strong domain knowledge & Chemical Engineering principles and operations.",
        "Good communication, writing & presentation skills.",
        "Knowledge of DCS and ESD will be added advantage.",
        "Ability to work in a team",
        "Strong ability to maintain good working relationship with customers.",
        "Graduate degree in Chemical Engineering discipline.",
      ],
      value: [
        "Simulation experience in either ASPEN/HYSIS/UNISIM both in Dynamic and Steady Sate simulation ",
        "Experience in deploying Operator Training Simulator in an operating company. ",
        "Experience in plant operations.",
        "Experience in plant startup & commissioning",
        "Configuration experience working on control systems, DCS / PLC / Safety Systems. ",
        "Programming skills C Sharp, Dot net, Python, VB is an added advantage.",
      ],
      qualification: [
        "BE/B.Tech/M.Tech in Mechanical, Chemical, Instrumentation.",
      ],
      location: "Flexible working location",
    },
  ];

  return (
    <div className="career_pg">
      <div className="hero_career_pg">
        <div className="hero_overlay_career_pg">
          <h1>Genesis Energy</h1>
        </div>
      </div>
      <div className="content_career_pg">
        <h1>Work With Us</h1>
        <p>
          Established in 2008, under the aegis of industry stalwarts having more
          than 40 years of industry experience and exposure to all aspects of
          product and project lifecycle. Oil and Gas industry demands
          flexibility of operations and dexterity. Genesis Energy has rapidly
          established a reputation for offering dynamic solutions with
          adroitness. We offer solutions with direct / indirect support to end
          users, Consultants, Designers, EPC Contractors, Construction sites and
          Yards like ONGC, L&T, EIL, BHEL, Hyundai Heavy Industries, IOCL,
          Reliance, Cairn Energy, GSPC, HOEC and J Ray McDermott, etc Our
          mission is to exceed customer expectation by aligning to their needs
          by providing comprehensive solution including industry leading
          products, value added services and cutting-edge technologies and To be
          the world’s most trusted solution provider for Energy Sector
        </p>
        <h2>Life @ Genesis Energy</h2>
        <p>
          We are a dynamic and innovative company dedicated to providing
          cutting-edge technology solutions to our clients. Our clients range
          from global fortune 500 companies like ONGC, IOCL ,BPCL etc. With over
          10 years of experience in the industry, we have established ourselves
          as a trusted partner to businesses of all sizes across a wide range of
          industries. We are authorized partners to Global majors like
          Honeywell, UOP, APPLETON, ARFLU etc.
        </p>
        <p>
          Our team is composed of highly skilled professionals with diverse
          backgrounds and expertise, allowing us to provide comprehensive and
          customized solutions tailored to each client's unique needs. We pride
          ourselves on our ability to stay ahead of the curve and keep up with
          the latest technological advancements, ensuring that our clients
          always have access to the most advanced and effective solutions
          available. We are seeking to expand our business to the field of
          industrial software and we are looking to build a team of talented and
          motivated individuals and help us continue to deliver world-class
          technology solutions to our clients. As a member of our team, you will
          have the opportunity to work with cutting-edge technologies and
          collaborate with a team of experienced professionals to develop and
          implement innovative solutions that drive business success for our
          customers.
        </p>
        <h2>Current Openings</h2>
        <p>
          Please send your resumes to{" "}
          <a href="mailto:vijay@gepl.biz" target="_blank" rel="noreferrer">
            vijay@gepl.biz
          </a>
        </p>
        {opportunity.map((d, i) => {
          return (
            <Openings
              title={d.title}
              opp={d.opp}
              resp={d.resp}
              must={d.must}
              value={d.value}
              qualification={d.qualification}
              location={d.location}
              key={i}
              id={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Career;
