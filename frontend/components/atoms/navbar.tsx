import Image from "next/image";

import Link from "next/link";
export default function Navbar() {
  return (
    <>
      <header id="home" className="header-area">
        <div className="navigation fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <a className="navbar-brand" href="index.html">
                    <Image
                      src="/images/logo.png"
                      width={100}
                      height={80}
                      alt="Logo"
                      id="header-logo"
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item active">
                        <Link className="page-scroll" href="/">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/about">
                          About
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/service">
                          Tech-Stack
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/experience">
                          Experience
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/work">
                          Portfolio
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/blog">
                          Blog
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="page-scroll" href="/contact">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
