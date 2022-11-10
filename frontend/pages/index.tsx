import React from "react";
import Image from 'next/image'


export default function Home() {
  return (
    <>
    <div id="parallax" className="header-content d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="header-content-right">
              <h4 className="sub-title animate__animated animate__backInLeft">Hello, I’m</h4>
              <h1 className="title animate__animated animate__backInLeft animate__delay-1s">Rakheoana Lefela</h1>
              <p>i am a Web and software Developer...</p>
              <a className="main-btn" href="/portfolio">View my Work</a>
            </div>
          </div>
          <div className="col-lg-6 offset-xl-1">
            <div className="header-image d-none d-lg-block">
              <div className="shadow-lg  bg-white rounded">
                <Image src="/images/Rakheoana-Profile.jpg"  width={500} height={500} alt="hero" id="header-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-social">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-social-icon">
                <ul>
                  <li><a href="https://twitter.com/r_lefela" target="_blank" rel="noreferrer">
                    <i className="lni lni-twitter-original"></i>
                  </a></li>
                  <li><a href="https://github.com/" target="_blank" rel="noreferrer">
                    <i className="lni lni-github-original"></i>
                  </a></li>
                  <li><a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
                    <i className="lni lni-linkedin-original"></i>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
  </>
  )
}
