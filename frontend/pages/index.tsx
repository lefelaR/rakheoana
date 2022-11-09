import React from "react";

import Image from 'next/image'



export default function Home() {
  return (
    <div id="parallax" className="header-content d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6">
            <div className="header-content-right">
              <h4 className="sub-title animate__animated animate__backInLeft">Hello, I’m</h4>
              <h1 className="title animate__animated animate__backInLeft animate__delay-1s">Rakheoana Lefela</h1>
              <p>i am a Web and software Developer...</p>
              <a className="main-btn" href="#work">View my Work</a>
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
  )
}
