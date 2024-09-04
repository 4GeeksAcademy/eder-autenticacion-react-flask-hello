import React from "react";
import { Link } from "react-router-dom";

export function MainPage() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{ backgroundColor: "#02010A" }}
    >
      <div className="container ">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown link
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div
          className="container-fluid p-lg-5 border border-light rounded-3"
          style={{ backgroundColor: "#140152" }}
        >
          <div className="row row-cols-md-1 row-cols-lg-1 gap-lg-3 justify-content-center">
            <div className="col">
              <h1 className="display-5  fw-bold">
                Discover a top-rank songs of this underground artist!
              </h1>
            </div>
            <div className="col">
              <div
                className="card mb-3 border-0"
                style={{ maxWidth: "60em", backgroundColor: "#140152" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://i.pinimg.com/736x/6e/27/d5/6e27d580635320767b0b71121c76e7ee.jpg"
                      className="card-img img-fluid "
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title text-light">Know the Artist</h5>
                      <p className="card-text pb-md-2">
                        Brian Patrick Carroll (born May 13, 1969), known
                        professionally as Buckethead, is an American guitarist.
                      </p>
                      <p className="card-text pb-md-2">
                        He has received critical acclaim for his innovative and
                        virtuosic electric guitar playing. Buckethead's
                        extensive solo discography currently includes 31 studio
                        albums. Starting in 2011, Buckethead started releasing
                        albums in the "Pikes" series, mini-albums usually around
                        30 minutes in length, each with a sequential number
                        similar to a comic book. As of August 2024, Buckethead
                        has released 662 Pike albums.
                      </p>

                      <p className="card-text pb-md-2">
                        Buckethead was credited by Guitar World as "ushering in
                        a new era of virtuosity" while ranking the release of
                        his 1992 debut album Bucketheadland the 45th greatest
                        moment in electric guitar history. The magazine has also
                        listed him among the "25 all-time weirdest guitarists"
                        and the "50 fastest guitarists of all time".
                      </p>
                      <p className="card-text">
                        <small className="text-muted">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <p>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseWidthExample"
                  aria-expanded="false"
                  aria-controls="collapseWidthExample"
                >
                  Toggle width collapse
                </button>
              </p>
              <div style={{ minHeight: " 60px" }}>
                <div
                  className="collapse collapse-horizontal"
                  id="collapseWidthExample"
                >
                  <div className="card card-body" style={{ width: "600px" }}>
                    This is some placeholder content for a horizontal collapse.
                    It's hidden by default and shown when triggered.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
