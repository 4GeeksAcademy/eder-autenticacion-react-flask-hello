import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

export function Register() {
  const { store, actions } = useContext(Context);
  const newAccount = useRef({});
  const navigate = useNavigate();

  function clearState() {
    newAccount.current = {};
  }
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
          <div className="row row-cols-md-1 row-cols-lg-1 gap-lg-3 justify-content-center">
            <div className="col">
              <div>
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ fontFamily: "Chakra Petch" }}
                  onClick={() => navigate("/")}
                >
                  Back
                </button>
              </div>
              <div className="mt-lg-4">
                <p>Create an accout</p>
              </div>
            </div>
            <div className="col">
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                  <label
                    htmlFor="validationCustom01"
                    className="form-label text-light"
                    style={{ fontFamily: "Chakra Petch" }}
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom01"
                    onChange={(e) =>
                      (newAccount.current.username = e.target.value)
                    }
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label
                    htmlFor="validationCustom03"
                    className="form-label text-light"
                    style={{ fontFamily: "Chakra Petch" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationCustom03"
                    onChange={(e) => (newAccount.current.name = e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label text-light"
                    style={{ fontFamily: "Chakra Petch" }}
                  >
                    Email
                  </label>
                  <div className="input-group has-validation">
                    <span className="input-group-text" id="inputGroupPrepend">
                      @
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      id="validationCustomUsername"
                      aria-describedby="inputGroupPrepend"
                      onChange={(e) =>
                        (newAccount.current.email = e.target.value)
                      }
                      required
                    />
                  </div>
                </div>

                <div className="col-md-6">
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
                    onChange={(e) =>
                      (newAccount.current.password = e.target.value)
                    }
                  />
                  <div id="passwordHelpBlock" className="form-text">
                    Don't share your password or any sensitive information tos
                    anyone.
                  </div>
                </div>
                <div className="col-12">
                  {/* SUBMIT BORRA EL USEREF ANTES DE ENVIAR LA DATA??? */}
                  <button
                    className="btn btn-primary"
                    type="button"
                    style={{ fontFamily: "Chakra Petch" }}
                    onClick={(e) => {
                      e.preventDefault, console.log(newAccount.current);
                      actions.createUser(newAccount.current);
                    }}
                  >
                    Create New Accout
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
