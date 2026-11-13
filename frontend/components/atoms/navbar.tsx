import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const links = [
  { href: "/", label: "Home" },
  { href: "/stack", label: "Tech-Stack" },
  { href: "/experience", label: "Experience" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { pathname } = useRouter();
  const itemClass = (href: string) =>
    pathname === href ? "nav-item active" : "nav-item";

  return (
    <>
      <header id="home" className="header-area">
        <div className="navigation fixed-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Link className="navbar-brand" href="/">
                    <Image
                      src="/images/logo.png"
                      width={100}
                      height={80}
                      alt="Logo"
                      id="header-logo"
                    />
                  </Link>
                  <button
                    className="navbar-toggler" type="button" data-toggle="collapse"
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
                      {links.map((link) => (
                        <li className={itemClass(link.href)} key={link.href}>
                          <Link className="page-scroll" href={link.href}>
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className={itemClass("/auth/signin")}>
                        <Link className="page-scroll" href="/auth/signin">
                          <i className="lni lni-lock">&nbsp; </i>
                          Login
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
