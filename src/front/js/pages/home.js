import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useRef } from "react";

/* import rigoImageUrl from "../../img/rigo-baby.jpg"asdasd; */
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const newLogin = useRef({});
  const navigate = useNavigate();

  return (
    <div
      className="vh-100 d-flex align-items-center"
      style={{ backgroundColor: "#02010A" }}
    >
      <div className="container p-lg-5">
        <div
          className="container-fluid p-lg-5 border border-light rounded-3"
          style={{ backgroundColor: "#140152" }}
        >
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 gap-lg-3 justify-content-center">
            <div className="col text-center" style={{ color: "#BA181B" }}>
              <h1 className="display-5  fw-bold">Welcome to Bucketheadland</h1>
            </div>
            <div className="col d-flex px-lg-5 " style={{ maxWidth: "50em" }}>
              <div className="pe-lg-5 ms-auto d-flex text-center">
                <p className="px-lg-3">No account yet?</p>
                <button
                  type="button"
                  className="btn btn-dark border"
                  style={{ fontFamily: "Chakra Petch", maxHeight:"40px"}}
                  onClick={()=>navigate('/register')}
                >
                  Register!
                </button>
              </div>
            </div>
            <div className="col px-lg-5" style={{ maxWidth: "50em" }}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label text-light"
                  style={{ fontFamily: "Chakra Petch" }}
                >
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={(e) => (newLogin.current.username = e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="inputPassword5"
                  className="form-label text-light"
                  style={{ fontFamily: "Chakra Petch" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                  onChange={(e) => (newLogin.current.password = e.target.value)}
                />
                <div id="passwordHelpBlock" className="form-text">
                  Don't share your password or any sensitive information to
                  anyone.
                </div>
              </div>
              <div className="p-2">
                <button
                  className="btn btn-dark border" 
                  type="button"
                  style={{ fontFamily: "Chakra Petch" }}
                  onClick={(e) => {
                    e.preventDefault;
                    navigate("/waiting");
                    actions.login(newLogin.current);
                  }}
                >
                  L_O_G in!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
