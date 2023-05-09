import React from "react";
import "../css/Industries.scss";
import banking from "../assets/banking.png";
import eduction from "../assets/education.png";
import techincal from "../assets/technical.png";
import hospital from "../assets/hospital.png";
import binance from "../assets/binance.png";

const Industries = () => {
  return (
    <div className="bg-industries">
      <div className="container">
        <div className="heading-industries fs-5 ">Industries we Serve</div>
        <h2 className="text-white">
          Managed IT Services customized for your industry
        </h2>
        <div className="feature pb-5 ">
          <div className="grid row-indus">
            <div className="row">
              <div className="col-wd-6 col-md-4 col-sm-2">
                <div className="col-indus">
                  <img src={banking} alt="" className="w-50" />
                  <h6 className="mt-3">Banking</h6>
                </div>
              </div>

              <div className="col-wd-6 col-md-4 col-sm-2">
                <div className="col-indus">
                  <img src={binance} alt="" className="w-50" />
                  <h6 className="mt-3"> Markets</h6>
                </div>
              </div>

              <div className="col-wd-6 col-md-4 col-sm-2">
                <div className="col-indus">
                  <img
                    src={eduction}
                    alt=""
                    className=""
                    style={{ width: "60px" }}
                  />
                  <h6 className="mt-3"> Education</h6>
                </div>
              </div>

              <div className="col-wd-6 col-md-4 col-sm-2">
                <div className="col-indus">
                  <img src={techincal} alt="" className="w-50" />
                  <h6 className="mt-3">Manufacturing</h6>
                </div>
              </div>

              <div className="col-wd-6 col-md-4 col-sm-2">
                <div className="col-indus">
                  <img src={hospital} alt="" className="w-50" />
                  <h6 className="mt-3">Healthcare</h6>
                </div>
              </div>

              <div className="col-wd-6 col-md-4 col-sm-2">
                <div className="col-indus">
                  <img src={banking} alt="" className="w-50" />
                  <h6 className="mt-3">Banking</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
