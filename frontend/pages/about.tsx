import React from "react";

const About = () => {
  return (
    <section id="about" className="about-area pt-125 pb-130 my-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center mb-5">
              <h2 className="title">About Me</h2>
              <p>
                I am a vibrant curious developer inhabiting the cape town tech
                space. I am also a foodie and a fantasy enthusiast.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="about-content mt-50 text-center">
              <div className="card">
                <div className="card-header">
                  <h5 className="about-title">The Lefela Legacy</h5>
                </div>
                <div className="card-body">
                  <p>
                    The Lefela legacy is one rich in history... lefela men from
                    times of old achieved greatness in being selfless and
                    helping others in whatever they might have needed. whether
                    it was in the fields of agriculture, politics, economics, a
                    long line on Lefela men have always risen up to the occasion
                    and presented solutions to complex human problems.{" "}
                    <a
                      href="http://wikipedia.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="lni-bulb x2"></i>
                    </a>
                  </p>
                </div>
              </div>

              <ul className="clearfix">
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni lni-calendar"></i>
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Date of birth:</span> 26 February 1990
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni lni-envelope"></i>
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Email:</span> rakgew@gmail.com
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni lni-phone"></i>
                    </div>
                    <div className="info-text">
                      <p>
                        <span>Phone:</span> +27 (0) 78 375 4146
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="single-info d-flex align-items-center">
                    <div className="info-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>

                    <div className="info-text">
                      <p>
                        <span>Location:</span> cape Town
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
