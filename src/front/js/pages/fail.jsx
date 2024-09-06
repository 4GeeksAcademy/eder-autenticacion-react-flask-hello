import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Fail() {
  const navigate = useNavigate();
  useEffect(() => {
    const time = setInterval(() => {
      navigate("/");
    }, 3000);

    return () => clearInterval(time);
  }, []);

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
              <h1 className="display-5  fw-bold">
                LOG IN FIRST! You will be redirected to our login page.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
