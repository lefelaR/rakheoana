import React from "react";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  const height = "200";
  const width = "200";

  return (
    <section id="work" className="work-area pt-125 pb-130">

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center pb-30">
              <p className="title h2 ">Past projects</p>
              <p className="h5">Live projects</p>
            </div>
          </div>
        </div>


        <div className="row">

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-work text-center mt-30">
              <div className="work-image">
                <img src={"/images/work/isutech.png"} alt="work" />
              </div>
              <div className="work-overlay">
                <div className="work-content">
                  <h3 className="work-title">ISU Technologies</h3>
                  <p className="text-white">Lucidocean</p>
                  <ul>
                    <li>
                      <a
                        className="image-popup"
                        href={"/images/work/isutech.PNG"}
                      >
                        <i className="lni lni-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.isutech.co.za/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-work text-center mt-30">
              <div className="work-image">
                <img src={"/images/work/HCIfoundation.png"} alt="work" />
              </div>
              <div className="work-overlay">
                <div className="work-content">
                  <h3 className="work-title">Hci foundation</h3>
                  <p className="text-white">Lucidocean</p>
                  <ul>
                    <li>
                      <a
                        className="image-popup"
                        href={"/images/work/HCIfoundation.png"}
                      >
                        <i className="lni lni-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.hcifoundation.co.za/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-work text-center mt-30">
              <div className="work-image">
                <img src={"/images/work/tmSquare.png"} alt="work" />
              </div>

              <div className="work-overlay">
                <div className="work-content">
                  <h3 className="work-title">
                    Town planning consultancy website
                  </h3>
                  <ul>
                    <li>
                      <a
                        className="image-popup"
                        href="<?php echo url('assets/images/work/tm.PNG')?>"
                      >
                        <i className="lni lni-plus"></i>
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.tmtownplanning.co.za/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-work text-center mt-30">
              <div className="work-image">
                <img src={"/images/work/csharp.png"} alt="work" />
              </div>
              <div className="work-overlay">
                <div className="work-content">
                  <h3 className="work-title">
                    C# Programming challenge results
                  </h3>
                  <ul>
                    <li>
                      <a
                        className="image-popup"
                        href={"/images/work/challenge.PNG"}
                      >
                        <i className="lni lni-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://preware-git-staging-lefelar.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-work text-center mt-30">
              <div className="work-image">
                <img src={"/images/work/reactSmall.png"} alt="work" />
              </div>
              <div className="work-overlay">
                <div className="work-content">
                  <h3 className="work-title">Movie website</h3>
                  <ul>
                    <li>
                      <a
                        className="image-popup"
                        href="<?php echo url('assets/images/work/reactMovie.png')?>"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://preware-git-staging-lefelar.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-work text-center mt-30">
              <div className="work-image">
                <img src={"/images/work/simple freight cover.jpg"} alt="work" />
              </div>
              <div className="work-overlay">
                <div className="work-content">
                  <h3 className="work-title">Simple Frieght</h3>
                  <p className="text-white">Simple Frieght</p>
                  <ul>
                    <li>
                      <a
                        className="image-popup"
                        href={"/images/work/simple freight web.PNG"}
                      >
                        <i className="lni lni-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://3.136.224.69/simple/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-work text-center mt-30">
              <div className="work-image">
                <img src={"/images/work/Wi-Taxi - Full Logo.png"} alt="work" />
              </div>
              <div className="work-overlay">
                <div className="work-content">
                  <h3 className="work-title">wiTaxi</h3>
                  <p className="text-white">Simple Frieght</p>
                  <ul>
                    <li>
                      <a
                        className="image-popup"
                        href={"/images/work/weTaxi.png"}
                      >
                        <i className="lni lni-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://www.witaxi.co.za"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="section-title text-center pb-30">
              <p className="title h2 ">Current projects</p>
              <p className="h5">Live projects</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-work text-center mt-30">
              <div className="work-image">
                <img src={"/images/work/onestopshop.png"} alt="work" />
              </div>
              <div className="work-overlay">
                <div className="work-content">
                  <h3 className="work-title">onestopshop</h3>
                  <p className="text-white">OneStopShop</p>
                  <ul>
                    <li>
                      <a
                        className="image-popup"
                        href={"/images/work/simple freight web.PNG"}
                      >
                        <i className="lni lni-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://3.136.224.69/simple/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="lni lni-link"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
          <div className="section-title text-center pb-30">
            <p className="title h2 ">Future projects</p>
            <p className="h5">Live projects</p>
          </div>
        </div>
        </div>

      </div>
    </section >
  );
};

export default Portfolio;
