import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function MainPage() {
  const { store, actions } = useContext(Context);
  const [valid, setValid] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLogin = async (params) => {
      const validation = await actions.validate();
      setValid(validation);
    };
    checkLogin();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    navigate("/");
  };

  if (valid) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center"
        style={{ backgroundColor: "#02010A" }}
      >
        <div className="container ">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="p-2 ms-auto">
                <button
                  className="btn btn-dark border "
                  type="button"
                  style={{ fontFamily: "Chakra Petch" }}
                  onClick={(e) => {
                    e.preventDefault;
                    handleLogout();
                  }}
                >
                  L_O_G ouT!
                </button>
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
                        <h5 className="card-title text-light">
                          Know the Artist
                        </h5>
                        <p className="card-text pb-md-2">
                          Brian Patrick Carroll (born May 13, 1969), known
                          professionally as Buckethead, is an American
                          guitarist.
                        </p>
                        <p className="card-text pb-md-2">
                          He has received critical acclaim for his innovative
                          and virtuosic electric guitar playing. Buckethead's
                          extensive solo discography currently includes 31
                          studio albums. Starting in 2011, Buckethead started
                          releasing albums in the "Pikes" series, mini-albums
                          usually around 30 minutes in length, each with a
                          sequential number similar to a comic book. As of
                          August 2024, Buckethead has released 662 Pike albums.
                        </p>

                        <p className="card-text pb-md-2">
                          Buckethead was credited by Guitar World as "ushering
                          in a new era of virtuosity" while ranking the release
                          of his 1992 debut album Bucketheadland the 45th
                          greatest moment in electric guitar history. The
                          magazine has also listed him among the "25 all-time
                          weirdest guitarists" and the "50 fastest guitarists of
                          all time". Some of the most well known song are
                          'Jordan', 'welcome to bucketheadland' and soothsayer'!
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
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="min-vh-100 d-flex align-items-center"
        style={{ backgroundColor: "#02010A" }}
      >
        <div className="container p-lg-5">
          <div
            className="container-fluid p-lg-5 border border-light rounded-3"
            style={{ backgroundColor: "#140152" }}
          >
            <div className="row row-cols-md-1 row-cols-lg-1 gap-lg-3 justify-content-center">
              <div className="col text-center" style={{ color: "#BA181B" }}>
                <h1 className="fw-bold">
                  GIVE ME A SECOND OR TWO ... but if nothing shows click the
                  button bellow, your token has expired or a goblin is recking
                  our backend, who knows!
                </h1>
                <div className="p-2 ms-auto">
                  <button
                    className="btn btn-dark border "
                    type="button"
                    style={{ fontFamily: "Chakra Petch" }}
                    onClick={(e) => {
                      e.preventDefault;
                      navigate("/");
                    }}
                  >
                    G_O bacK!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
