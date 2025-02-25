import React from "react";
import logo from "../assets/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0000",
        color: "#fff",
        padding: "10px",

        bottom: 0,
        width: "100%",
      }}
    >
     

      <div className="container my-5">
        <footer className="text-center text-lg-start text-white" >


          <section>
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">LVC Solutions</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                  <p>
                  
                  <img src={logo} alt="Company Logo" className="logo" />
                
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Social Network</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                  <p>
                    <a href="#!" className="text-white">
                      Facebook
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Linkedin
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Instagram
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                    Facebook
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                  <p>
                    <a href="#!" className="text-white">
                      Home
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                     Who we are
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Services
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                     About Us
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                  Insights
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-white">
                      Contact us
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                  <p>
                    <i className="fas fa-home mr-3"></i> 5015 Addison Circle, #1025,
                    Addison,TX 75001, United States
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> + 01 60 275 65 614
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i>info@lvc-solutions.com
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2025 Copyright:
            <a className="text-white" href="/">
              Lvc-solutions.com
            </a>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
