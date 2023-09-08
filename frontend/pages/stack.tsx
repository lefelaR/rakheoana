import React from "react";
import Layout from "@components/layouts/frontendLayout";

 const TechStack = () => {
  const data = [
    {
      id: 1,
      name: "AWS",
      description: "AWS cloud",
      icon: "aws",
    },
    {
      id: 2,
      name: "Nodejs",
      description:
        "Node.js is an open-source server environment. Node.js is cross-platform and runs on Windows, Linux, Unix, and macOS.",
      icon: "nodejs",
    },
    {
      id: 3,
      name: "REACT",
      description:
        "I have built a complex systems with react and have found it to be both powerful and flexible. 3 years",
      icon: "nextjs",
    },
    {
      id: 4,
      name: "GIT",
      description:
        "working in teams whether big or small demands some form of revisioning. I use git, bitbucket and SVN with ease",
      icon: "git",
    },
    {
      id: 5,
      name: "Typescript",
      description:
        "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
      icon: "typescript",
    },
  ];

  return (
    <Layout>
    <section id="techstack" className="services-area gray-bg pt-125 pb-130">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-30">
              <h2 className="title">Tech Stack</h2>
              <p>
                A list of thechnologies im comfotable with, those that i have
                worked with before.
              </p>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          {data.map((row) => {
            var icon = `lni lni-${row.icon}`;
            return (
              <div className="col-lg-4 col-md-6 col-sm-8" key={row.id}>
                <div className="single-service text-center mt-30">
                  <div className="service-icon">
                    <i className={icon}></i>
                  </div>
                  <div className="service-content">
                    <h4 className="service-title">
                      <a href="#">{row.name}</a>
                    </h4>
                    <p>{row.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default TechStack;
