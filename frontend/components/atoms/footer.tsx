
import React, { type CSSProperties } from "react";

type FooterProps = {
  className?: string;
  style?: CSSProperties;
};

export default function Footer({ className, style }: FooterProps) {
    var date = new Date().getFullYear();
    
    return (
        <>
            <footer
              id="footer"
              className={["footer-area", className].filter(Boolean).join(" ")}
              style={style}
            >
                <div className="footer-widget pt-130 pb-130">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="footer-content text-center">
                                    <a href="index.html">
                                        {/* <img src="assets/images/logo.png" alt="Logo" style="width: 4em" /> */}

                                    </a>

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
                <div className="footer-copyright pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright-text text-center pt-20">
                                    <p>Copyright © <span id="date"> {date} </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}