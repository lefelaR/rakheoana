import React from "react";

const TechStack = () => {
  return (
    <section id="service" className="services-area gray-bg pt-125 pb-130">
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
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="single-service text-center mt-30">
              <div className="service-icon">
                <i className="lni lni-php"></i>
              </div>
              <div className="service-content">
                <h4 className="service-title">
                  <a href="#">PHP</a>
                </h4>
                <p>
                  PHP has been part of my development life from the start, for
                  about <strong>5 year </strong> i have built projects with it,
                  on a small and a big scale.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
