import React from "react";
import Image from "next/image";

const data = [
  {
    id:1,
    company: "Design Guru",
    logo:"",
    link:"/images/icons/designguru.png",
    started: "Sept 2015",
    ended: "Dec 2015",
    position: "Intern (PHP developer)",
    responsinility:
      "Making static pages dynamic, connecting front-end with dynamic data using Mampp and sql database.",
    city: "Cape Town",
    country: "South Africa",
  },
  {
    id:2,
    company: "LUCIDOCEAN",
    logo:"",
    link:"/images/icons/lucidocean.png",
    started: "Jul 2018",
    ended: "MAr 2021",
    position: "Software Developer",
    responsinility:
      "Building new features for existing projects. | Upgrading ASP.Net projects UI to moredern CSS frameworks (Bootstrap4, Materialize)",
    city: "Cape Town",
    country: "South Africa",
  },
  {
    id:3,
    company: "WEMASOFT",
    logo:"",
    link:"/images/icons/wemasoft.png",
    started: "Jun 2021",
    ended: "Nov 2021",
    position: "Software Developer",
    responsinility:
      "Built new features for existing projects. | Project development life-cycle | Team lead | Allocating Tasks | Evaluating team perfomance through sprint management (scrum) | Selecting Tech for new projects and upgrading existing projects.",
    city: "Pretoria",
    country: "South Africa",
  },
  {
    id:4,
    company: "Turati Software",
    logo:"turati",
    link:"/images/icons/TuratiLogoTime.png",
    started: "Feb 2022",
    ended: "present",
    position: "Fullstack software developer",
    responsinility:
      "Project planning and kick-off | Induction and coaching | Building new features | Mobile App development using React-native & Expo Cli | Building ReastFul Api with AWS Api-Gateway, lambda, Serverless",
    city: "Johannesburg",
    country: "South Africa",
  },
];

const Experience = () => {
  return (
    <section id="pricing" className="pricing-area  pt-125 pb-130 my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-5">
              <h2 className="title">Work Experience</h2>
              <p>
                I took a two year gap after graduation doing valuntry work in
                different cities, however my
                <strong>LOVE</strong> for development never seized...
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {data.map((job) => (
            <div className="col-md-12 my-3" key={job.id}>
              <div className="card single-service" title="">
                <div className="card-header">
                  <Image
                    src={job.link}
                    title={job.logo}
                    alt=""
                    width={"200"}
                    height={"60"}
                  />
                  {/* <p className="h4">{job.company}</p> <p>{job.started} - {job.ended}</p>
                  <span className="float-right">{job.position}</span> */}
                </div>
                <div className="card-body">
                  <p className="fw-light">Responsibility</p>
                  <p className="fw-normal">{job.responsinility}</p>
                </div>
                <div className="card-footer">
                  <p>{job.city}, {job.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
