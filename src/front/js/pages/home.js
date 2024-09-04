import React, { useContext } from "react";
import { Context } from "../store/appContext";
/* import rigoImageUrl from "../../img/rigo-baby.jpg"; */
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="vh-100 d-flex align-items-center" style={{ backgroundColor: "#02010A" }}>
      <div className="container p-lg-5">
        <div
          className="container-fluid p-lg-5 border border-light rounded-3"
          style={{ backgroundColor: "#140152" }}
        >
          <div className="row row-cols-md-1 row-cols-lg-1 gap-lg-3 justify-content-center">
            <div className="col text-center" style={{ color: "#BA181B" }}>
              <h1 className="display-5  fw-bold">Welcome to Bucketheadland</h1>
            </div>
            <div className="col d-flex px-lg-5 " style={{ maxWidth: "50em" }}>
              <div className="ps-lg-5">
                <p className=" text-center">L_O_G in!</p>
              </div>

              <div className="pe-lg-5 ms-auto d-flex text-center">
                <p className="px-lg-3">No account yet?</p>
                <button
                  type="button"
                  class="btn btn-dark border"
                  style={{ fontFamily: "Chakra Petch" }}
                >
                  Register!
                </button>
              </div>
            </div>
            <div className="col px-lg-5" style={{ maxWidth: "50em" }}>
              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label text-light"
                  style={{ fontFamily: "Chakra Petch" }}
                >
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  
                />
              </div>
              <div>
                <label
                  for="inputPassword5"
                  class="form-label text-light"
                  style={{ fontFamily: "Chakra Petch" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  class="form-control"
                  aria-describedby="passwordHelpBlock"
                  
                />
                <div id="passwordHelpBlock" class="form-text">
                  Don't share your password or any sensitive information to
                  anyone.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
